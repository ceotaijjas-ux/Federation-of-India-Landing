import { useLanguage } from '../context/LanguageContext.jsx';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="eyebrow">{t('heroEyebrow')}</div>
          <h1>
            <span>{t('heroLine1')}</span>
            <br />
            <span>{t('heroLine2')}</span>
            <br />
            <span>{t('heroLine3')}</span>
          </h1>
          <div className="hero-sub">{t('heroSub')}</div>
          <p>{t('heroText')}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#about">
              {t('heroBtn1')}
            </a>
            <a className="btn btn-outline" href="#membership">
              {t('heroBtn2')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
