import { createContext, useState } from "react";
import en from "./translation-en.json";
import hi from "./translation.json";

export const LangContext = createContext();

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  const translations = lang === "en" ? en : hi;

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <LangContext.Provider value={{ lang, translations, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}