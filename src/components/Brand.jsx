import { useLanguage } from '../context/LanguageContext.jsx';
import { ORG_NAME } from '../data/organization.js';

export default function Brand({ as: Tag = 'div', ...props }) {
  const { t } = useLanguage();
  return (
    <Tag className="brand" {...props}>
      <img src="/logo.png" alt={`${ORG_NAME} logo`} />
      <div className="brand-title">
        {ORG_NAME}
        <small>{t('brandTamil')}</small>
      </div>
    </Tag>
  );
}
