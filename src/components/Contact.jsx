import SectionHead from './SectionHead.jsx';
import ContactForm from './ContactForm.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { ADDRESS_LINES, REG_NO } from '../data/organization.js';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact">
      <div className="container">
        <SectionHead kicker="contactKicker" title="contactTitle" text="contactText" />
        <div className="contact-grid">
          <div>
            <div className="contact-box">
              <div className="contact-item">
                <small>{t('addressLabel')}</small>
                <strong>
                  {ADDRESS_LINES.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < ADDRESS_LINES.length - 1 && (
                        <>
                          ,<br />
                        </>
                      )}
                    </span>
                  ))}
                </strong>
              </div>
              <div className="contact-item">
                <small>{t('regLabel')}</small>
                <strong>Reg. No: {REG_NO}</strong>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
