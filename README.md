# Mijael Figueroa | Portfolio

Personal portfolio built with React and Vite to showcase services, selected projects, technical skills, certificates, and contact channels in a polished bilingual experience.

Live site: [figueroamijael.github.io/cv-porfolio](https://figueroamijael.github.io/cv-porfolio/)

## Overview

This project is the public portfolio of Mijael Figueroa. It was designed as a fast, responsive single-page experience with complementary internal views, language switching, dark/light theme support, project highlights, pricing plans, and direct contact access.

The content is centralized so the portfolio can be updated quickly without touching every component manually.

## Main Features

- Bilingual interface: English and Spanish.
- Dark mode and light mode toggle with persisted preference.
- Personal presentation and CV download.
- Services section with pricing plans and FAQ.
- Professional experience timeline.
- Project showcase with live preview links.
- Contact section with Gmail, WhatsApp, Telegram, LinkedIn, Instagram, and GitHub.
- Responsive layout for desktop, tablet, and mobile.
- GitHub Pages ready deployment.

## Tech Stack

- React 18
- Vite 5
- React Router DOM
- Bootstrap and Bootstrap Icons
- AOS
- tsParticles
- CSS modules/files organized by section

## Project Structure

```text
src/
  Context/
    Languaje-context.jsx      # Translations and centralized content
  components/
    Content/                  # Hero section
    Header/                   # Main and internal page headers
    Main/                     # About, Services, Projects, Contact
    Experiencie/              # Experience timeline
    Footer/
    ScrollToTop/
    darkMode/
  pages/
    Home/
    About/
    Service/
    Contact/
    Project/
  cv/
  img/
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/FigueroaMijael/cv-porfolio.git
cd cv-porfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: starts the local Vite server.
- `npm run build`: creates the production build in `dist/`.
- `npm run preview`: serves the production build locally.
- `npm run lint`: runs ESLint.
- `npm run deploy`: builds the project and publishes `dist/` to `gh-pages`.

## Content Editing

Most portfolio content is centralized in:

- [`src/Context/Languaje-context.jsx`](./src/Context/Languaje-context.jsx)

From that file you can update:

- Navigation labels
- About section text
- Services copy
- Project cards
- Pricing plans
- FAQ content
- Contact labels
- Language-specific strings

Static assets are stored in:

- [`src/img`](./src/img)
- [`src/cv`](./src/cv)

## Routing and GitHub Pages

This project uses:

- `HashRouter` for safer static hosting on GitHub Pages
- `base: '/cv-porfolio/'` in [`vite.config.js`](./vite.config.js)

That means the repository name and published base path must stay aligned. If the repository name changes, update `vite.config.js` as well.

## Deployment

This project is configured to deploy automatically to GitHub Pages.

### Automatic deploy

Every push to `main` triggers:

1. Dependency installation
2. Production build with Vite
3. Publish of `dist/` into the `gh-pages` branch

Workflow file:

- [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml)

### Manual deploy

If needed, you can still deploy manually with:

```bash
npm run deploy
```

### Important GitHub Pages configuration

In the repository settings, GitHub Pages should publish from:

- Branch: `gh-pages`
- Folder: `/ (root)`

If GitHub Pages is configured to publish from `main` instead, the site may serve the development `index.html` instead of the built app.

## Contact

- Gmail: `figueroamijael86@gmail.com`
- WhatsApp: `1136817159`
- Telegram: `1136817159`
- GitHub: [github.com/FigueroaMijael](https://github.com/FigueroaMijael)
- LinkedIn: [mijael-figueroa-019952249](https://www.linkedin.com/in/mijael-figueroa-019952249?trk=contact-info)

## Notes

- This portfolio is under active iteration.
- Visual content, pricing, projects, and copy can be updated from the translation/content context without major structural changes.
