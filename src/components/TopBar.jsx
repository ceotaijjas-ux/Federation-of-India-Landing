import { useLanguage } from '../context/LanguageContext.jsx';

export default function TopBar() {
  const { t } = useLanguage();
  return (
    <div className="topbar">
      <div className="container">
        <span>{t('topMessage')}</span>
        <span>{t('reg')}</span>
      </div>
    </div>
  );
}
