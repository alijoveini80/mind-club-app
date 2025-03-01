"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Bale?.WebApp?.initDataUnsafe?.user?.first_name
    ) {
      setFirstName(window.Bale.WebApp.initDataUnsafe.user.first_name);
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
      <p id="welcome">Welcome, {firstName || "user"}</p>
    </>
  );
}
