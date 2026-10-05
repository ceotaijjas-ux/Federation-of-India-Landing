// Structural content. Visible text lives in src/i18n/translations.js (referenced by key).

export const NAV_LINKS = [
  { href: '#about', key: 'navAbout' },
  { href: '#work', key: 'navWork' },
  { href: '#activities', key: 'navActivities' },
  { href: '#events', key: 'navEvents' },
];

export const TRUST_ITEMS = [
  { title: 'trust1a', text: 'trust1b' },
  { title: 'trust2a', text: 'trust2b' },
  { title: 'trust3a', text: 'trust3b' },
  { title: 'trust4a', text: 'trust4b' },
];

export const ABOUT_CHECKS = ['check1', 'check2', 'check3', 'check4'];

export const FOCUS_AREAS = [
  { icon: '🎓', title: 'c1t', text: 'c1p' },
  { icon: '⚖️', title: 'c2t', text: 'c2p' },
  { icon: '💼', title: 'c3t', text: 'c3p' },
  { icon: '🏛️', title: 'c4t', text: 'c4p' },
  { icon: '🤝', title: 'c5t', text: 'c5p' },
  { icon: '📢', title: 'c6t', text: 'c6p' },
];

export const PILLARS = [
  { title: 'p1t', text: 'p1p' },
  { title: 'p2t', text: 'p2p' },
  { title: 'p3t', text: 'p3p' },
  { title: 'p4t', text: 'p4p' },
];

// Replace with verified statistics before publishing.
export const IMPACT_STATS = [
  { value: '500+', label: 'impact1' },
  { value: '25+', label: 'impact2' },
  { value: '10+', label: 'impact3' },
  { value: '1000+', label: 'impact4' },
];

// Background photos are set in src/styles/activities.css (nth-child order).
export const ACTIVITIES = ['a1', 'a2', 'a3', 'a4', 'a5'];

// Background photos are set in src/styles/events.css (nth-child order).
export const EVENTS = [
  { title: 'event1t', text: 'event1p' },
  { title: 'event2t', text: 'event2p' },
  { title: 'event3t', text: 'event3p' },
];

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: '#membership', key: 'navJoin' },
];
