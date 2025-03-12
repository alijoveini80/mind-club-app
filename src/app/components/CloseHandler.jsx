"use client";
import { useEffect } from "react";

export default function CloseHandler() {
  useEffect(() => {
    const handleClose = () => {
      console.log("Bale WebApp is closing, deleting session...");

      // Call the API to delete the session
      fetch("/api/auth/session", { method: "DELETE" })
        .then(() => console.log("Session deleted"))
        .catch((err) => console.error("Error deleting session:", err));
    };

    // Listen for the Bale WebApp close event
    const originalClose = window.Bale?.WebApp?.close;
    if (originalClose) {
      window.Bale.WebApp.close = function () {
        handleClose(); // Run session deletion
        return originalClose.apply(this, arguments); // Call the original close function
      };
    }

    return () => {
      if (originalClose) {
        window.Bale.WebApp.close = originalClose; // Restore the original function on cleanup
      }
    };
  }, []);
}
