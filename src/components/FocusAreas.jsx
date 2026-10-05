import SectionHead from './SectionHead.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { FOCUS_AREAS } from '../data/content.js';

export default function FocusAreas() {
  const { t } = useLanguage();
  return (
    <section className="focus" id="work">
      <div className="container">
        <SectionHead kicker="workKicker" title="workTitle" text="workIntro" />
        <div className="cards">
          {FOCUS_AREAS.map(({ icon, title, text }) => (
            <div className="card" key={title}>
              <div className="icon">{icon}</div>
              <h3>{t(title)}</h3>
              <p>{t(text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
