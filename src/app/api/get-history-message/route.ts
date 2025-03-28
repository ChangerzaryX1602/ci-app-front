import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getHistoryMessage } from "@/lib/api/get-history-message";

export async function GET(request: NextRequest) {
  try {
    const token = (await cookies()).get("token");
    const historyId = request.nextUrl.searchParams.get("historyId") as string;

    const data = await getHistoryMessage(
      token?.value as string,
      Number(historyId)
    );

    return NextResponse.json({ history: data });
  } catch (error: any) {
    console.error("Error creating history:", error);
    // Return error with appropriate status code (e.g., 400, 500)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: error.status || 500 }
    );
  }
}
