"use client";

// import { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";
// import { useThemeStyles } from "@/app/hooks/useThemeStyles";

export default function ThemeTestBox() {
  // const [mounted, setMounted] = useState(false);
  const { darkMode } = useTheme();
  // const themeStyles = useThemeStyles(
  //   {
  //     backgroundColor: "white",
  //     color: "black",
  //   },
  //   "dark:bg-red-500 dark:text-white p-4 rounded"
  // );

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <>
      <div
        className="error-card"
        //  {...themeStyles}
      >
        {darkMode ? "Dark Mode Active" : "Light Mode Active"}
        <br />
        If this turns red in dark mode, it works!
      </div>
      <button className="theme-button">Click me</button>
    </>
  );
}
