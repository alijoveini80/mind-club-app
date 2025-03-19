"use client";
// import { Moon, Sun } from "lucide-react";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "@/app/context/ThemeContext";

export default function DarkModeButton() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode((prevMode) => !prevMode)}
      className="m-2 mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {darkMode ? (
        <LuSun size={24} color="yellow" className="w-5 h-5" />
      ) : (
        <LuMoon size={18} className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
