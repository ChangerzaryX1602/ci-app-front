import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const { code } = await request.json();
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
  const username = data.messages.toString().split(" ")[0] + " " + data.messages.toString().split(" ")[1];

  (await cookies()).set("token", data.result.token);

  return NextResponse.json({ message: "Success", username: username });
}
