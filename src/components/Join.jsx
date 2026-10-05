import { useLanguage } from '../context/LanguageContext.jsx';

export default function Join() {
  const { t } = useLanguage();
  return (
    <section className="join" id="membership">
      <div className="container join-row">
        <div>
          <h2>{t('joinTitle')}</h2>
          <p>{t('joinText')}</p>
        </div>
        <a className="btn" href="#contact">
          {t('joinBtn')}
        </a>
      </div>
    </section>
  );
}
