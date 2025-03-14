"use client";

import { useTheme } from "@/app/context/ThemeContext";

export function useThemeStyles(lightStyles, darkStyles) {
  const { darkMode } = useTheme();

  const styles = Object.keys(lightStyles).reduce((acc, key) => {
    acc[key] = darkMode ? "" : lightStyles[key];
    return acc;
  }, {});

  return {
    style: styles,
    className: darkStyles,
  };
}
