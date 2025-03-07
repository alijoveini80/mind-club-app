// Next.js Route Handlers (App Router)
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions, defaultSession, sleep } from "@/lib/session";
// import { generateRandomString } from "@/lib/generateRandomString";

export async function GET() {
  const session = await getIronSession(await cookies(), sessionOptions);
  if (session.isLoggedIn !== true) {
    return Response.json(defaultSession);
  }
  return Response.json(session);
}

export async function POST(req) {
  const { userid } = await req.json();
  const session = await getIronSession(await cookies(), sessionOptions);
  session.isLoggedIn = true;
  session.userid = userid;
  console.log("Session created for user", userid);
  session.counter = 0;
  await session.save();
  return Response.json(session);
}

export async function DELETE() {
  const session = await getIronSession(await cookies(), sessionOptions);

  session.destroy();

  return Response.json(defaultSession);
}
