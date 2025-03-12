"use client";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined" && window.Bale?.WebApp?.isDarkMode) {
      const darkMode = window.Bale?.WebApp?.isDarkMode;
      localStorage.setItem("darkMode", darkMode);
      console.log("Dark mode from Bale is set to Local storage:", darkMode);

      // const root = document.documentElement;
      // if (darkMode) {
      //   root.setAttribute("data-theme", "dark");
      //   // root.style.setProperty("--background", "#0a0a0a");
      //   // root.style.setProperty("--foreground", "#ededed");
      // } else {
      //   root.setAttribute("data-theme", "light");
      //   // root.style.setProperty("--background", "#ffffff");
      //   // root.style.setProperty("--foreground", "#171717");
      // }

      // Object.entries(theme).forEach(([key, value]) => {
      //   root.style.setProperty(`--${key.replace(/_/g, "-")}`, value);
      // });

      console.log("Theme applied:", darkMode);
    }
  }, []);

  if (!isMounted) {
    return null; // Avoid hydration errors
  }

  return <>{children}</>;
}
