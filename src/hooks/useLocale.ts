"use client";

import { useEffect, useState, useCallback } from "react";
import { type Locale, type TranslationKey, translations } from "@/locales/translations";

const COOKIE_NAME = "locale";

function readLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  const value = match?.split("=")[1];
  return value === "es" || value === "en" ? value : null;
}

function writeLocaleCookie(locale: Locale) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

/**
 * Locale detection priority:
 * 1. Cookie (explicit user choice, persisted)
 * 2. Browser language (navigator.language / navigator.languages)
 * 3. Default: English
 */
export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = readLocaleCookie();
    if (saved) {
      setLocaleState(saved);
      setReady(true);
      return;
    }

    const browserLangs =
      (navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language]) || [];

    const isSpanish = browserLangs.some((lang) =>
      lang.toLowerCase().startsWith("es")
    );

    setLocaleState(isSpanish ? "es" : "en");
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeLocaleCookie(next);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale]?.[key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  return { locale, setLocale, t, ready };
}
