// app/api/auth/validate/route.js
import { NextResponse } from "next/server";
import { validateInitData } from "@/lib/validate";
import { sessionOptions, defaultSession, sleep } from "@/lib/session";

export async function POST(req, res) {
  // Changed handler function name
  // try {
  const { initData, userid } = await req.json();
  // console.log(initData);
  // console.log(userid);

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
        body: JSON.stringify({ userid: userid }),
      }
    );
    if (!response.ok) {
      return NextResponse.json(
        { isValid: true, error: "Session creation failed" },
        { status: 500 }
      );
    }

    console.log(response);

    return NextResponse.json({ isValid: true }, { status: 200 });
  } else {
    return NextResponse.json(
      { isValid: false, error: "Invalid hash" },
      { status: 403 }
    );
  }
}
// catch (error) {
//   console.error("Validation error:", error);
//   return NextResponse.json(
//     { isValid: false, error: "Validation failed" },
//     { status: 500 }
//   );
// }
// }

// export const POST = withSessionRoute(validationHandler); // Export the wrapped handler
