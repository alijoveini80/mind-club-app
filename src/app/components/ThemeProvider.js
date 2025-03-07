"use client";
import { useEffect } from "react";

export default function ThemeProvider() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Bale?.WebApp?.themeParams) {
      const theme = window.Bale.WebApp.themeParams;
      const root = document.documentElement;

      // Apply theme parameters as CSS variables
      Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(`--${key.replace(/_/g, "-")}`, value);
      });

      console.log("Theme applied:", theme);
    }
  }, []);

  return null; // No need to render anything, just apply styles
}
