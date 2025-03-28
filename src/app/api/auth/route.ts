import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  // try {
  const { code } = await request.json();
  console.log("code", code);
  const res = await fetch(`${process.env.API_ENDPOINT}/api/v1/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  if (!res.ok) {
    throw new Error("Failed to authenticate");
  }

  const data = await res.json();

  (await cookies()).set("token", data.result.token)

  return NextResponse.json({ message: "Success" });
  // } catch (error) {
  //   return NextResponse.json({ message: error });
  // }
}
