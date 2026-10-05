import { LANGUAGES } from '../i18n/translations.js';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="lang-switch" aria-label="Language selector">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${lang === code ? ' active' : ''}`}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
