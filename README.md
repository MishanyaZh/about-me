# Mykhailo Zholondkovskyi Portfolio

Personal portfolio and CV website with featured projects, complete project list,
work experience, and contact links.

## Live

- Portfolio: https://zhm-about-me.netlify.app

## Tech Stack

- React 17
- TypeScript + JavaScript (mixed codebase)
- React Router 6
- Emotion styled components
- MUI (Material UI)
- Netlify deployment

## Main Features

- Home page with summary, skills, work experience, and education
- Portfolio page with two levels of filtering:
  - View switcher: Featured / All projects
  - Technology filters shown dynamically only for available projects
- Theme toggle (light/dark) with persisted preference in localStorage
- CV open/download links in footer

## Project Structure

- `src/components` - UI sections and reusable blocks
- `src/views` - routed pages (Home, Portfolio)
- `src/Skills` - content data (skills, experience, projects)
- `public` - static assets (preview image, CV PDF, manifest)

## Scripts

- `npm start` - run app in development mode
- `npm run build` - create production build
- `npm test` - run tests (currently no custom test suite)
- `npm run deploy` - Netlify deploy command

## Run Locally

1. Install dependencies:

   `npm install`

2. Start development server:

   `npm start`

3. Open http://localhost:3000

## Notes

- This is a legacy CRA-based project kept intentionally stable.
- Dependency upgrades and major migrations should be done carefully and
  incrementally.
