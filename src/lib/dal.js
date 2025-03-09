import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { redirect } from "next/dist/server/api-utils";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session.userid) {
    redirect("/error");
  }

  return { isAuth: true, userid: session.userid };
});
