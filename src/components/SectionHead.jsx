import { useLanguage } from '../context/LanguageContext.jsx';

export default function SectionHead({ kicker, title, text }) {
  const { t } = useLanguage();
  return (
    <div className="section-head">
      <div className="kicker">{t(kicker)}</div>
      <h2>{t(title)}</h2>
      <p>{t(text)}</p>
    </div>
  );
}
