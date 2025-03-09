import { createSession, deleteSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";

export async function GET() {
  const session = await verifySession();
  if (!session) {
    return new NextResponse.json(null, { status: 401 });
  }
  return new NextResponse.json({ userid: session.userid }, { status: 200 });
}

export async function POST(req) {
  const { userid } = await req.json();
  await createSession(userid);

  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function DELETE() {
  deleteSession();

  return NextResponse.redirect("/");
}
