import { createSession, deleteSession } from "@/lib/session";
import { NextResponse } from "next/server";

// export async function GET() {}

export async function POST(req) {
  const { userid } = await req.json();
  session = await createSession(userid);

  return Response.json({ ok: true, session: session });
}

export async function DELETE() {
  deleteSession();

  return NextResponse.redirect("/");
}
