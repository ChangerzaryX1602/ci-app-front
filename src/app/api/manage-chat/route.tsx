import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteChat, editChat } from "@/lib/api/manage-chat";

export async function DELETE(request: NextRequest) {
  try {
    const token = (await cookies()).get("token");
    const { historyId } = await request.json();

    await deleteChat(token?.value as string, Number(historyId));

    return NextResponse.json({ message: "delete success" });
  } catch (error: any) {
    console.error("Error delete history:", error);
    // Return error with appropriate status code (e.g., 400, 500)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: error.status || 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = (await cookies()).get("token");
    const { chatId, place_holder } = await request.json();

    const res = await editChat(
      token?.value as string,
      Number(chatId),
      place_holder
    );

    if (!res) {
      return NextResponse.json(
        { error: "Failed to edit history" },
        { status: 400 }
      );
    }
    console.log("res UPDATE", res);

    return NextResponse.json({ answer: "responseChatbot.answer" });
  } catch (error: any) {
    console.error("Error creating history:", error);
    // Return error with appropriate status code (e.g., 400, 500)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: error.status || 500 }
    );
  }
}
