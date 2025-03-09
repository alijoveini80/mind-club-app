import { createSession, deleteSession } from "@/lib/session";
import { NextResponse } from "next/server";

// export async function GET() {}

export async function POST(req) {
  const { userid } = await req.json();
  await createSession(userid);

  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function DELETE() {
  deleteSession();

  return NextResponse.redirect("/");
}
