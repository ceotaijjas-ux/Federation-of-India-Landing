import { useLanguage } from '../context/LanguageContext.jsx';
import { PILLARS } from '../data/content.js';

export default function Vision() {
  const { t } = useLanguage();
  return (
    <section className="vision">
      <div className="container">
        <div className="kicker">{t('visionKicker')}</div>
        <h2>{t('visionTitle')}</h2>
        <p>{t('visionText')}</p>
        <div className="pillars">
          {PILLARS.map(({ title, text }) => (
            <div className="pillar" key={title}>
              <strong>{t(title)}</strong>
              <span>{t(text)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
