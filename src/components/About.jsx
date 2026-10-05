import { useLanguage } from '../context/LanguageContext.jsx';
import { ABOUT_CHECKS } from '../data/content.js';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-img" />
        <div className="about-copy">
          <div className="kicker">{t('aboutKicker')}</div>
          <h2>{t('aboutTitle')}</h2>
          <p>{t('aboutP1')}</p>
          <p>{t('aboutP2')}</p>
          <div className="check">
            {ABOUT_CHECKS.map((key) => (
              <div key={key}>
                <b>✓</b>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
