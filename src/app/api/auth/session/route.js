import { createSession, deleteSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    // const session = await verifySession();
    // const cookieStore = await cookies();
    // const cookie = cookieStore.get("session")?.value;
    const cookie = request.cookies.get(session)?.value;

    // If the cookie doesn't exist, redirect immediately
    if (!cookie) {
      return NextResponse.json({ error: "cookie not found" }, { status: 401 });
    }

    const session = await decrypt(cookie);

    // If decryption fails or session is invalid, redirect
    if (!session || !session.userid) {
      return NextResponse.json(
        { error: "decryption fails or session is invalid" },
        { status: 401 }
      );
    }

    // if (!session) {
    //   return NextResponse.json({ error: "not found" }, { status: 401 });
    // }
    return NextResponse.json(
      { ok: true, userid: session.userid },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request", er: error.message },
      { status: 400 }
    );
  }
}

export async function POST(req) {
  try {
    const { userid } = await req.json(); // Correct way to parse JSON
    await createSession(userid);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE() {
  deleteSession();

  return NextResponse.redirect("/");
}
