// theme-context.js
"use client";
import { createContext, useState, useEffect, useContext } from "react";
// Create a Context for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap around the part of your app where you want to access the theme
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(null); // Start with null to prevent SSR issues

  useEffect(() => {
    // Retrieve dark mode preference from localStorage or use system preference
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialDarkMode =
      savedMode !== null ? savedMode === "true" : prefersDark;

    setDarkMode(initialDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("darkMode", darkMode);
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

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
