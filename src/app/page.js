"use client";
import React, { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    if (typeof window.Bale !== "undefined") {
      // Code that uses window, only on client-side
      console.log(window.Bale.initData.user.first_name);
    }
  }, []); // Run only once on mount
  return (
    <>
      <h1>Home</h1>
      <p id="wellcome">wellcome, user</p>
    </>
  );
}
