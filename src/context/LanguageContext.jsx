import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, placeholders } from '../i18n/translations.js';

const STORAGE_KEY = 'siteLanguage';
const LanguageContext = createContext(null);

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    /* storage unavailable - fall back to English */
  }
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.className = `lang-${lang}`;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key) => translations[lang][key] ?? translations.en[key] ?? key,
      placeholder: (key) => placeholders[lang][key] ?? placeholders.en[key],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
