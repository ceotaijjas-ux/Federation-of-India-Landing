import SectionHead from './SectionHead.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { IMPACT_STATS } from '../data/content.js';

export default function Impact() {
  const { t } = useLanguage();
  return (
    <section className="impact">
      <div className="container">
        <SectionHead kicker="impactKicker" title="impactTitle" text="impactText" />
        <div className="impact-grid">
          {IMPACT_STATS.map(({ value, label }) => (
            <div className="impact-item" key={label}>
              <strong>{value}</strong>
              <span>{t(label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
