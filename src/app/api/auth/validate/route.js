import { NextResponse } from "next/server";
import { validateInitData } from "@/lib/validate";

export async function POST(req) {
  const { initData, userId } = await req.json();

  if (!initData) {
    return NextResponse.json(
      { isValid: false, error: "No initData provided" },
      { status: 400 }
    );
  }

  const isValid = validateInitData(initData);
  if (isValid) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { isValid: true, error: "Session creation failed" },
        { status: 500 }
      );
    }

    // Extract Set-Cookie from the fetch response
    const setCookie = response.headers.get("set-cookie");
    console.log("setCookie ", setCookie);

    // Create the NextResponse
    const nextResponse = NextResponse.json({ isValid: true });

    // If there is a Set-Cookie header, attach it to the response
    if (setCookie) {
      nextResponse.headers.set("Set-Cookie", setCookie);
      nextResponse.headers.set("Access-Control-Allow-Credentials", "true");
    }

    return nextResponse;
  } else {
    return NextResponse.json(
      { isValid: false, error: "Invalid hash" },
      { status: 403 }
    );
  }
}
