"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_EVENT = "portfolio-theme-change";

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function subscribeToTheme(callback: () => void): () => void {
  const handleChange = () => callback();
  window.addEventListener(THEME_EVENT, handleChange);
  window.addEventListener("storage", handleChange);
  return () => {
    window.removeEventListener(THEME_EVENT, handleChange);
    window.removeEventListener("storage", handleChange);
  };
}

function subscribeMounted(): () => void {
  return () => {};
}

export function useTheme() {
  const mounted = useSyncExternalStore(
    subscribeMounted,
    () => true,
    () => false,
  );

  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = getThemeSnapshot() === "light" ? "dark" : "light";
    const root = document.documentElement;
    if (nextTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  return { theme, toggleTheme, mounted };
}
