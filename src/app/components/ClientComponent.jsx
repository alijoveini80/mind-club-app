"use client"; // This is a Client Component

import { useEffect, useState } from "react";

function ClientComponent() {
  const [initData, setInitData] = useState(null);
  const [isValidUser, setIsValidUser] = useState(false);
  const [loadingSession, setLoadingSession] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Get initData from Bale WebApp API
    const data = window.Bale?.WebApp?.initData || ""; // Handle cases outside Bale
    setInitData(data);

    // Validate user with initData
    const validateUser = async () => {
      if (!data) {
        setIsValidUser(false); // Not in Bale context
        setLoadingSession(false);
        return;
      }
      const response = await fetch("/api/auth/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          initData: data,
          userid: window.Bale?.WebApp?.initDataUnsafe?.user?.id,
        }),
      });
      if (response.ok) {
        setIsValidUser(true);
      } else {
        setIsValidUser(false);
      }
      setLoadingSession(false); // Validation complete
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
      {/* <p>Welcome, Bale User! You are logged in.</p> */}
      {/* Your Mini App content goes here */}
      <button onClick={logout}>Logout</button> {/* Optional logout button */}
    </div>
  );
}

export default ClientComponent;
