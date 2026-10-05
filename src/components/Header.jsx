import Brand from './Brand.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { NAV_LINKS } from '../data/content.js';

export default function Header() {
  const { t } = useLanguage();
  return (
    <header>
      <div className="container nav">
        <Brand as="a" href="#home" />
        <nav>
          {NAV_LINKS.map(({ href, key }) => (
            <a key={href} href={href}>
              {t(key)}
            </a>
          ))}
          <a href="#membership" className="nav-cta">
            {t('navJoin')}
          </a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
