import SectionHead from './SectionHead.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const CDEV_IMAGES = [
  '/cdev_bk_camp.jpeg',
  '/cdev_evt1_camp.jpeg',
  '/cdev_evt3_camp.jpeg',
  '/cdev_evt5_camp.jpeg',
  '/cdev_evt6_camp.jpeg',
  '/cdev_med_camp.jpeg',
  '/cdev_mevt2_camp.jpeg',
];

export default function Activities() {
  const { t } = useLanguage();
  return (
    <section id="activities">
      <div className="container">
        <SectionHead kicker="activityKicker" title="activityTitle" text="activityText" />
        <div className="collage-grid">
          {CDEV_IMAGES.map((src, i) => (
            <div className={`collage-item collage-item-${i + 1}`} key={i}>
              <img src={src} alt={`Activity ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
