import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getHistory } from "@/lib/api/get-history";

export async function GET() {
  try {
    const token = (await cookies()).get("token");
    const data = await getHistory(token?.value as string);

    return NextResponse.json({ data: data });
  } catch (error: any) {
    console.error("Error creating history:", error);
    // Return error with appropriate status code (e.g., 400, 500)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: error.status || 500 }
    );
  }
}
