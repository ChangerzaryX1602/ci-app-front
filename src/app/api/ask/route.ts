import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { askChatbot } from "@/lib/api/create-chat";

export async function POST(request: NextRequest) {
  try {
    const { historyId, question } = await request.json();
    const token = (await cookies()).get("token");

    const responseChatbot = await askChatbot(token?.value as string, Number(historyId), question);
    
    return NextResponse.json({ answer: responseChatbot.answer });
  } catch (error: any) {
    console.error("Error ask chatbot:", error);
    // Return error with appropriate status code (e.g., 400, 500)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: error.status || 500 }
    );
  }
}
