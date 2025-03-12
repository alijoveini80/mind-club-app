import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId, queryId) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, queryId, expiresAt });
  // const session = await encrypt({ userId });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "none",
    path: "/",
    partitioned: true,
  });

  return session;
}

// export async function updateSession() {
//   const session = (await cookies()).get("session")?.value;
//   const payload = await decrypt(session);

//   if (!session || !payload) {
//     return null;
//   }

//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)(
//     await cookies()
//   ).set("session", session, {
//     httpOnly: true,
//     secure: true,
//     expires: expires,
//     sameSite: "none",
//     path: "/",
//     partitioned: true,
//   });
// }

export async function deleteSession() {
  const cookieStore = await cookies();
  const value = cookieStore.get("session")?.value;
  if (value) {
    console.log("try to delete session", value);
    cookieStore.set("session", value, {
      httpOnly: true,
      secure: true,
      expires: new Date(0), // Expire the cookie immediately
      sameSite: "none",
      path: "/",
      partitioned: true,
    });
  }
  const session = (await cookies()).get("session")?.value;

  if (!session) {
    console.log("Session cookie not found");
  }
}

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}
