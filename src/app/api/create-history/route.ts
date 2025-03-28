import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHistory, askChatbot } from "@/lib/api/create-chat";

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    const token = (await cookies()).get("token");
    const data = await createHistory(token?.value as string, question);
    const historyId = data.id;

    if (!historyId) {
      return NextResponse.json(
        { error: "Failed to create history" },
        { status: 400 }
      );
    }

    const responseChatbot = await askChatbot(token?.value as string, historyId, question);
    
    return NextResponse.json({ answer: responseChatbot.answer, historyId: historyId });
  } catch (error: any) {
    console.error("Error creating history:", error);
    // Return error with appropriate status code (e.g., 400, 500)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: error.status || 500 }
    );
  }
}
