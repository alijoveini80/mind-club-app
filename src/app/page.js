"use client"; // Ensures it's a client component

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isClosingConfirmationEnabled, setClosingConfirmation] = useState(true);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Bale?.WebApp?.initDataUnsafe?.user
    ) {
      const userData = window.Bale.WebApp.initDataUnsafe.user;
      setUser(userData);

      // Show Settings Button
      window.Bale.WebApp.SettingsButton.show();

      // Handle Settings Button Click
      window.Bale.WebApp.onEvent("settingsButtonPressed", () => {
        console.log("Handle onClick event on SettingsButton");
      });
    }
  }, []);

  // Close MiniApp
  const handleClose = () => {
    window.Bale.WebApp.close();
  };

  // Request Contact
  const handleRequestContact = () => {
    window.Bale.WebApp.requestContact((wasShared) => {
      console.log(
        "First way: ",
        wasShared ? "Number shared by user." : "Number not shared."
      );
    });

    window.Bale.WebApp.onEvent("contactRequested", (event) => {
      const wasShared = event.status === "sent";
      console.log(
        "Second way: ",
        wasShared ? "Number shared by user." : "Number not shared."
      );
    });
  };

  // Enable/Disable Closing Confirmation
  const handleToggleClosingConfirmation = () => {
    if (window.Bale.WebApp.isClosingConfirmationEnabled) {
      window.Bale.WebApp.disableClosingConfirmation();
      setClosingConfirmation(false);
    } else {
      window.Bale.WebApp.enableClosingConfirmation();
      setClosingConfirmation(true);
    }
  };

  // Expand MiniApp
  const handleExpand = () => {
    window.Bale.WebApp.expand();
  };

  return (
    <div className="body">
      <h1>User Data:</h1>
      <p id="user_data">
        {user ? (
          <>
            ID: {user.id} <br />
            First Name: {user.first_name} <br />
            Username: {user.username} <br />
          </>
        ) : (
          "Loading user data..."
        )}
      </p>

      <h1>Callbacks:</h1>
      <div className="p-2">
        <button className="p-2 m-1" onClick={handleClose}>
          Close
        </button>
        <button className="p-2 m-1" onClick={handleToggleClosingConfirmation}>
          {isClosingConfirmationEnabled ? "Disable" : "Enable"} Closing
          Confirmation
        </button>
        <button className="p-2 m-1" onClick={handleExpand}>
          Expand
        </button>
        <button className="p-2 m-1" onClick={handleRequestContact}>
          Request Contact
        </button>
      </div>
    </div>
  );
}
