// lib/session.js
// import { withIronSession } from "iron-session";
// import { generateRandomString } from "./generateRandomString";

export const sessionOptions = {
  password: process.env.SESSION_PASSWORD,
  cookieName: "login-token",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // set this to false in local (non-HTTPS) development
    sameSite: "none", // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#lax
    maxAge: 60 * 60 * 24, // Expire cookie before the session expires.
    path: "/",
  },
};

export const defaultSession = {
  isLoggedIn: false,
  username: "",
  counter: 0,
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// export function withSessionRoute(handler) {
//   return withIronSession(handler, sessionOptions);
// }

// You can also create a hook for client components if needed, but for simple session checks, API routes are sufficient
