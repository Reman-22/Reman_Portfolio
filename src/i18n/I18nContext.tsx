import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Language } from "./translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("language") as Language | null;
    return saved === "ar" ? "ar" : "en";
  });

  const isRTL = language === "ar";

  const setLanguageAndSave = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage: setLanguageAndSave,
        t: translations[language],
        isRTL,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
