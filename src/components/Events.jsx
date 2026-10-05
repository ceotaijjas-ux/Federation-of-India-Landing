import { useState, useEffect, useCallback } from 'react';
import SectionHead from './SectionHead.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const EVT_IMAGES = Array.from({ length: 29 }, (_, i) => `/evt-${String(i + 1).padStart(2, '0')}.jpeg`);

export default function Events() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + EVT_IMAGES.length) % EVT_IMAGES.length);
  }, []);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % EVT_IMAGES.length);
  }, []);

  useEffect(() => {
    if (!isAuto) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [isAuto, next]);

  return (
    <section className="events" id="events">
      <div className="container">
        <SectionHead kicker="eventsKicker" title="eventsTitle" text="eventsText" />

        <div
          className="evt-slider"
          onMouseEnter={() => setIsAuto(false)}
          onMouseLeave={() => setIsAuto(true)}
        >
          {/* Main slide */}
          <div className="evt-main">
            <img
              src={EVT_IMAGES[current]}
              alt={`Event ${current + 1}`}
              className="evt-main-img"
            />
            <button className="evt-arrow evt-prev" onClick={prev} aria-label="Previous">&#8249;</button>
            <button className="evt-arrow evt-next" onClick={next} aria-label="Next">&#8250;</button>
            <div className="evt-counter">{current + 1} / {EVT_IMAGES.length}</div>
          </div>

          {/* Dot indicators */}
          <div className="evt-dots">
            {EVT_IMAGES.map((_, i) => (
              <button
                key={i}
                className={`evt-dot${i === current ? ' active' : ''}`}
                onClick={() => { setCurrent(i); setIsAuto(false); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="evt-thumbs">
            {EVT_IMAGES.map((src, i) => (
              <button
                key={i}
                className={`evt-thumb${i === current ? ' active' : ''}`}
                onClick={() => { setCurrent(i); setIsAuto(false); }}
                aria-label={`Thumbnail ${i + 1}`}
              >
                <img src={src} alt={`Thumbnail ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
