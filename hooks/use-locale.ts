"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/utils/types";

const STORAGE_KEY = "convertly-locale";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const nextLocale: Locale = stored === "ar" ? "ar" : "en";
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLocale = () => {
    setLocale((current) => {
      const nextLocale: Locale = current === "en" ? "ar" : "en";
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
      document.documentElement.lang = nextLocale;
      document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
      return nextLocale;
    });
  };

  return { locale, toggleLocale, isRtl: locale === "ar" };
}
