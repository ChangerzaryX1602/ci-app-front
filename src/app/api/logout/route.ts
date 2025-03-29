import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json(
    { message: "Logout successful" },
    { status: 200 }
  );
  res.cookies.set("token", "", { maxAge: -1 }); // Clear the token cookie
  return res;
}
