// lib/dal.js
import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifySession = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  // If the cookie doesn't exist, redirect immediately
  if (!cookie) {
    return null;
  }

  const session = await decrypt(cookie);

  // If decryption fails or session is invalid, redirect
  if (!session || !session.userid) {
    return null;
  }

  return { isAuth: true, userid: session.userid };
};
