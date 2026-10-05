import Brand from './Brand.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { FOOTER_LINKS } from '../data/content.js';
import { ADDRESS_LINES, REG_NO } from '../data/organization.js';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>{t('footerText')}</p>
          </div>
          <div>
            <h4>{t('quickTitle')}</h4>
            <ul>
              {FOOTER_LINKS.map(({ href, key }) => (
                <li key={href}>
                  <a href={href}>{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t('officeTitle')}</h4>
            <ul>
              {ADDRESS_LINES.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>Reg. No: {REG_NO}</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <span>{t('copyright')}</span>
          <span>
            Powered by{' '}
            <a
              href="https://www.aminoid.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="aminoid-link"
            >
              Aminoid
            </a>
          </span>
          <span>{t('verify')}</span>
        </div>
      </div>
    </footer>
  );
}
