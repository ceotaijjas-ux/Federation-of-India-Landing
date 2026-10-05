# SC & ST Federation of India - Landing Page

React + Vite single-page site with English / தமிழ் / हिन्दी language switching.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New -> Project**, import the repo.
3. Framework preset is detected as **Vite** (build `npm run build`, output `dist`). Click **Deploy**.

Or with the CLI: `npm i -g vercel && vercel --prod`.

## Project structure

```
public/logo.jpeg              Logo + favicon
src/
  main.jsx                   Entry point
  App.jsx                    Page layout (section order)
  context/LanguageContext.jsx  Language state, t() helper, localStorage persistence
  i18n/translations.js       ALL text in EN / TA / HI + form placeholders
  data/organization.js       Name, registration no., address
  data/content.js            Lists that drive sections (cards, stats, events...)
  components/                One component per section
  styles/                    One CSS file per section (imported via index.css)
```

## Common edits

- **Change text / add a language**: `src/i18n/translations.js` (add the block and a `LANGUAGES` entry).
- **Real statistics**: `IMPACT_STATS` in `src/data/content.js`.
- **Photos**: Activities and Events backgrounds are Unsplash placeholder URLs in `src/styles/activities.css` and `src/styles/events.css`. Put your own images in `public/images/` and reference them as `/images/your-photo.jpg`.
- **Contact form**: currently shows an alert. Connect it in `src/components/ContactForm.jsx`.
