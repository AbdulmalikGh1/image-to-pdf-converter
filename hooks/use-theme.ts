"use client";

import { useEffect, useState } from "react";
import type { Theme } from "@/utils/types";

const STORAGE_KEY = "image-to-pdf-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme =
      storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme: Theme = current === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  };

  return { theme, toggleTheme };
}
