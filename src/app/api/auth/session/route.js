import { createSession, deleteSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

export async function GET() {
  try {
    // const session = await verifySession();
    const cookieStore = await cookies();
    const cookie = cookieStore.get("session")?.value;
    const session = await decrypt(cookie);

    // If the cookie doesn't exist, redirect immediately
    if (!session) {
      return NextResponse.json({ error: "cookie not found" }, { status: 401 });
    }

    return NextResponse.json(session, { status: 200 });
    // return NextResponse.json({ userId: session.userId }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request", er: error.message },
      { status: 400 }
    );
  }
}

export async function POST(request) {
  try {
    const { userId } = await request.json(); // Correct way to parse JSON
    const session = await createSession(userId);
    console.log("session created: ", session);

    return NextResponse.json({ message: "session created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request) {
  deleteSession();

  return NextResponse.json(
    { message: "Session deleted successfully" },
    { status: 200 }
  );
  // return NextResponse.redirect(new URL("/", request.url));
}
