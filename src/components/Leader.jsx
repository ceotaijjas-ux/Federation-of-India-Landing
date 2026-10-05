import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { leaderBio } from '../data/leaderBio.js';

export default function Leader() {
  const { t, lang } = useLanguage();
  const bio = leaderBio[lang] || leaderBio.en;

  return (
    <section id="leadership" className="section-gray">
      <div className="container leader-grid">

        {/* ── Left: copy ─────────────────────────── */}
        <div className="leader-copy">
          <div className="kicker">{t('leaderKicker')}</div>
          <h2>{t('leaderName')}</h2>

          {/* Mobile-only photo order */}
          <div className="leader-img-mobile" style={{ display: 'none' }}>
            <div className="leader-img-wrapper">
              <img
                src="/ceo_foi.jpeg"
                alt={t('leaderName')}
                className="leader-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x500/eaeaea/666666?text=Photo";
                }}
              />
            </div>
          </div>

          {/* Role tags */}
          <div className="leader-roles">
            {bio.roles.split(' | ').map(role => (
              <span key={role} className="leader-role-tag">{role}</span>
            ))}
          </div>

          <p className="leader-degrees">{t('leaderDegrees')}</p>

          {/* Highlights */}
          <div className="leader-highlights">
            {bio.highlights.map(h => (
              <div className="leader-highlight" key={h.label}>
                <span className="lh-icon">{h.icon}</span>
                <strong>{h.value}</strong>
                <small>{h.label}</small>
              </div>
            ))}
          </div>

          <p className="leader-title">
            <strong>{t('leaderTitle')}</strong>
            <br />
            {t('leaderOrg')}
          </p>

          <Link to="/leader-profile" className="btn btn-primary leader-readmore">
            Read More →
          </Link>
        </div>

        {/* ── Right: photo ────────────────────────── */}
        <div className="leader-img-container">
          <div className="leader-img-wrapper">
            <img
              src="/ceo_foi.jpeg"
              alt={t('leaderName')}
              className="leader-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x500/eaeaea/666666?text=Photo";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
