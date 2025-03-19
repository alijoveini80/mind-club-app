"use client"; // This is a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ClientComponent() {
  const router = useRouter();
  const [initData, setInitData] = useState(null);
  const [isValidUser, setIsValidUser] = useState(false);
  const [loadingSession, setLoadingSession] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Get initData from Bale WebApp API
    const data = window.Bale?.WebApp?.initData || ""; // Handle cases outside Bale
    const darkMode = window.Bale?.WebApp?.isDarkMode || ""; //
    setInitData(data);

    // Validate user with initData
    const validateUser = async () => {
      if (!data) {
        setIsValidUser(false); // Not in Bale context
        setLoadingSession(false);
        router.replace("/home");
      }
      if (darkMode !== undefined) {
        localStorage.setItem("darkMode", darkMode);
      }
      console.log("Validating user with initData: ");
      const unsafeData = window.Bale?.WebApp?.initDataUnsafe || "";
      console.log("unsafeData: \n", unsafeData);

      try {
        const response = await fetch("/api/auth/validate", {
          method: "POST",
          // credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            initData: data,
            queryId: window.Bale?.WebApp?.initDataUnsafe?.query_id,
            userId: window.Bale?.WebApp?.initDataUnsafe?.user?.id,
          }),
        });
        console.log(response);
        if (response.ok) {
          const res = await response.json();
          if (res?.authFromCache) {
            setIsValidUser(true);
            console.log("authFromCache: setIsValidUser true");
          } else {
            setIsValidUser(true);
            console.log("validate: setIsValidUser true");
          }
        } else {
          setIsValidUser(false);
        }
      } catch (error) {
        console.log("Validation Error:", error);
        setIsValidUser(false);
      }
      // finally {
      //   setLoadingSession(false); // Validation complete
      //   console.log("setLoadingSession false");
      // }
    };

    validateUser();
  }, []);

  useEffect(() => {
    // Check session status after validation
    if (isValidUser) {
      const checkSession = async () => {
        const sessionResponse = await fetch("/api/auth/session");
        if (sessionResponse.ok) {
          setIsLoggedIn(true);
          router.replace("/home");
        } else {
          setIsLoggedIn(false);
        }
        setLoadingSession(false); // Session check complete
      };
      checkSession();
    }
  }, [isValidUser]);

  const logout = async () => {
    await fetch("/api/auth/session", { method: "DELETE" });
    setIsLoggedIn(false); // Update client state to reflect logout
  };

  if (loadingSession) return <p>Loading session...</p>;

  if (!isValidUser) {
    return (
      <div>
        <p>Error: Invalid user. Please launch this Mini App from Bale.</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div>
        <p>Not logged in.</p>
        {/* You might not need a manual logout button in typical Mini App flow */}
      </div>
    );
  }

  return (
    <div>
      {window.Bale?.WebApp?.initDataUnsafe?.user ? (
        <p>
          Welcome, {window.Bale?.WebApp?.initDataUnsafe?.user?.first_name} ! You
          are logged in.
        </p>
      ) : (
        <p>Welcome, Bale User! You are logged in.</p>
      )}
      <button
        className="bg-amber-700 p-2 m-4 mr-0 rounded-2xl"
        type="button"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
      {/* <p>Welcome, Bale User! You are logged in.</p> */}
      {/* Your Mini App content goes here */}
      <button className="bg-red-900 p-2 m-4 rounded-2xl" onClick={logout}>
        Logout
      </button>{" "}
      {/* Optional logout button */}
    </div>
  );
}

export default ClientComponent;
