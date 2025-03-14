import { Button } from "@heroui/button";
import { verifySession } from "@/lib/dal";
import ProtectPage from "@/app/components/ProtectPage";
import EventDisplay from "@/app/components/EventDisplay";
import CardComponent from "@/app/components/CardComponent";
export default async function Dashboard() {
  const session = await verifySession();

  return (
    <>
      {!session ? (
        <h1>Not authenticated</h1>
      ) : (
        <>
          <h1>Dashboard</h1>
          <ProtectPage title="dashboard" userId={session.userId} />
          <EventDisplay />
          {/* <Button className="theme-button hover-button p-2 m-2 ml-5 mb-6 rounded-2xl">
            Click me
          </Button> */}
          <CardComponent />
        </>
      )}
    </>
  );
}
