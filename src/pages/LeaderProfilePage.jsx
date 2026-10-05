import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { leaderBio } from '../data/leaderBio.js';
import TopBar from '../components/TopBar.jsx';
import Footer from '../components/Footer.jsx';

export default function LeaderProfilePage() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const bio = leaderBio[lang] || leaderBio.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      {/* ── Page Header ── */}
      <div className="profile-page-header">
        <div className="container">
          <button className="btn-back" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>

      {/* ── Profile Content ── */}
      <main className="profile-page-main">
        <div className="container profile-page-container">
          
          {/* Left / Top: Sticky Sidebar with Photo & Stats */}
          <aside className="profile-sidebar">
            <div className="profile-sidebar-inner">
              <img src="/ceo_foi.jpeg" alt={t('leaderName')} className="profile-avatar" />
              <h1 className="profile-name">{t('leaderName')}</h1>
              <p className="profile-tagline">{bio.tagline}</p>
              
              <div className="profile-roles">
                {bio.roles.split(' | ').map((role, i) => (
                  <span key={i} className="profile-role-tag">{role}</span>
                ))}
              </div>

              <div className="profile-highlights">
                {bio.highlights.map(h => (
                  <div className="profile-stat" key={h.label}>
                    <span className="ps-icon">{h.icon}</span>
                    <div>
                      <strong>{h.value}</strong>
                      <small>{h.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right / Bottom: Bio Sections */}
          <article className="profile-content">
            {bio.sections.map((sec, i) => (
              <section className="profile-section" key={i}>
                <h2 className="profile-section-heading">{sec.heading}</h2>
                {sec.content && sec.content.split('\n\n').map((para, j) => (
                  <p key={j} className="profile-para">{para}</p>
                ))}
                {sec.isList && sec.items && (
                  <ul className="profile-list">
                    {sec.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

        </div>
      </main>

      <Footer />
    </>
  );
}
