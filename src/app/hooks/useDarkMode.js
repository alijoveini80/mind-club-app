import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(null); // Start with null to prevent SSR issues

  useEffect(() => {
    // Get dark mode preference from localStorage or use system preference
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialDarkMode =
      savedMode !== null ? savedMode === "true" : prefersDark;

    setDarkMode(initialDarkMode); // Update state after component mounts
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("darkMode", darkMode); // Save to localStorage
      document.documentElement.setAttribute(
        "data-theme",
        darkMode ? "dark" : "light"
      );
      document.documentElement.style.setProperty(
        "--background",
        darkMode ? "#0a0a0a" : "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--foreground",
        darkMode ? "#ededed" : "#171717"
      );
    }
  }, [darkMode]);

  return [darkMode, setDarkMode]; // Return the state and updater function
}
