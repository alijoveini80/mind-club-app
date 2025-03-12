"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
// import useDarkMode from "@/app/hooks/useDarkMode";
import { useTheme } from "@/app/components/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (darkMode) {
  //     root.setAttribute("data-theme", "dark");
  //     root.style.setProperty("--background", "#0a0a0a");
  //     root.style.setProperty("--foreground", "#ededed");
  //   } else {
  //     root.setAttribute("data-theme", "light");
  //     root.style.setProperty("--background", "#ffffff");
  //     root.style.setProperty("--foreground", "#171717");
  //   }
  // }, [darkMode]);
  if (darkMode === null) return null; // Prevent hydration issues
  return (
    <header
      className={`w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          MyBrand
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <button
          // onClick={() => setDarkMode(!darkMode)}
          onClick={() => setDarkMode((prevMode) => !prevMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t p-4">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
