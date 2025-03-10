import { verifySession } from "@/lib/dal";

export default async function Dashboard() {
  const session = await verifySession();

  return (
    <>
      {!session ? (
        <h1>Not authenticated</h1>
      ) : (
        <h1>wellcome to dashboard page, {session.userId}</h1>
      )}
    </>
  );
}
