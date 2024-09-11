"use client";  // Client-side only

import { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';  // Sun and Moon icons for the button

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Check for stored theme in local storage on initial load
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Toggle theme and update local storage
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
    >
      {theme === "light" ? (
        <BsMoon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <BsSun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}
