// app/page.js
import ClientComponent from "@/app/components/ClientComponent";

// This is a Server Component (default in app directory)
export default function HomePage() {
  return (
    <div>
      <h1>My Bale Mini App</h1>
      <ClientComponent />
    </div>
  );
}
