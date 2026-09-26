# Sahika Kandukuri — Portfolio

A React + Vite + Tailwind CSS portfolio site.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/`.

## Project structure

```
src/
  data/portfolio.js     ← all editable content lives here
  components/           ← one file per section
  App.jsx                ← composes the sections
  index.css              ← design tokens & global styles
public/
  resume.pdf              ← replace with your latest resume
```

## Things to edit before you deploy

Everything content-related is centralized in **`src/data/portfolio.js`**,
so you rarely need to touch the component files. Look for `// EDIT:`
comments — they mark placeholders that need your real information:

- `profile.leetcode` — confirm your LeetCode profile URL
- `stats` — the "DSA problems solved" stat is a placeholder; fill in your count
- `projects[].github` / `projects[].demo` — confirm repo URLs, add live demo links where deployed
- `journey` — confirm the internship year
- `public/resume.pdf` — already contains your uploaded resume; replace it whenever you update your resume, keeping the filename `resume.pdf`

The contact form (`src/components/Contact.jsx`) validates input but has
**no backend** — it won't actually send email yet. There's a comment in
that file showing where to wire up a service like
[Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/),
or your own API route.

## Deploying to Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (first run links/creates a Vercel project). Vercel
auto-detects Vite: build command `vite build`, output directory `dist`.

**Option B — GitHub + Vercel dashboard**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave the default framework preset (Vite) and click **Deploy**.
4. Every push to your main branch redeploys automatically.

## Notes

- Colors, type, and spacing are defined as design tokens in
  `tailwind.config.js` and `src/index.css` — change them there to
  re-theme the whole site consistently.
- Animations respect `prefers-reduced-motion`.
- No analytics or tracking included.
