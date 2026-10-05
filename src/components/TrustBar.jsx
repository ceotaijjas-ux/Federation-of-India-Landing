import { useLanguage } from '../context/LanguageContext.jsx';
import { TRUST_ITEMS } from '../data/content.js';

export default function TrustBar() {
  const { t } = useLanguage();
  return (
    <div className="trust">
      <div className="container trust-row">
        {TRUST_ITEMS.map(({ title, text }) => (
          <div className="trust-item" key={title}>
            <strong>{t(title)}</strong>
            <span>{t(text)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
