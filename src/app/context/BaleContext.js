"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BaleContext = createContext();

export const BaleProvider = ({ children }) => {
  const router = useRouter();
  const [lastEvent, setLastEvent] = useState(null);

  useEffect(() => {
    let counter = 0;
    const checkWebApp = setInterval(() => {
      console.log("try: ", counter);
      counter += 1;
      if (typeof window !== "undefined" && window.Bale?.WebApp) {
        const { WebApp } = window.Bale;

        // Check if WebApp.onEvent exists and is a function
        if (typeof WebApp.onEvent === "function") {
          console.log("Bale WebApp is ready");
          setLastEvent("event start ...");

          // Clear the interval since WebApp is now available
          clearInterval(checkWebApp);

          WebApp.BackButton.show();
          WebApp.SettingsButton.show();
          // Register event listeners
          // WebApp.onEvent("backButtonClicked", () => {
          //   console.log("Back button clicked");
          //   setLastEvent("backButtonClicked");
          // });
          // Register event listeners
          if (WebApp.BackButton.isVisible) {
            console.log("Back button isVisible");
          }
          WebApp.BackButton.onClick(() => {
            router.back();
            console.log("Back button clicked");
            setLastEvent("backButtonClicked");
          });

          WebApp.SettingsButton.onClick(() => {
            router.back();
            console.log("Settings button clicked");
            setLastEvent("settingsButtonPressed");
          });
        }
      }
    }, 500); // Retry every 50ms until WebApp is available

    return () => clearInterval(checkWebApp); // Cleanup interval when unmounting
  }, []);

  return (
    <BaleContext.Provider value={{ lastEvent }}>
      {children}
    </BaleContext.Provider>
  );
};

export const useBale = () => {
  const context = useContext(BaleContext);
  if (!context) {
    throw new Error("useBale must be used within a BaleProvider");
  }
  return context;
};
