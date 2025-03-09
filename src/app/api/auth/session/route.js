import { createSession, deleteSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";

export async function GET() {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json(null, { status: 401 });
  }
  return NextResponse.json(
    { ok: true, userid: session.userid },
    { status: 200 }
  );
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
