import { verifySession } from "@/lib/dal";
import ProtectPage from "@/app/components/ProtectPage";
export default async function ProtectedPage() {
  const session = await verifySession();

  return (
    <>
      {!session ? (
        <h1>Not authenticated</h1>
      ) : (
        <ProtectPage title="protected" userId={session.userId} />
      )}
    </>
  );
}
