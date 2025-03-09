import { createSession, deleteSession } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET() {}

export async function POST(req) {
  const { userid } = await req.json();
  await createSession(userid);

  return Response.json({ status: 200 });
}

export async function DELETE() {
  const session = await getIronSession(await cookies(), sessionOptions);
  deleteSession();

  return NextResponse.redirect("/");
}
