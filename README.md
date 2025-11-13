# Aegis Black – Executive Protection & Secure Transport

A production-ready marketing site for a private bodyguard and executive escort transportation firm. Built with Vite + React + TypeScript, Tailwind CSS, and React Router, with interactive UI details adapted from ReactBits.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS (custom theme + utility-first layout)
- React Router DOM for multi-route UX
- lucide-react icon set
- Zod for client-side validation
- YAML/JSON data sources for services, fleet, team, and testimonials

## Quick Start
Follow the original bootstrap steps if you need to recreate the project from scratch:

```bash
npm create vite@latest aegis-black -- --template react-ts
cd aegis-black
npm i react-router-dom lucide-react zod clsx
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Run the project already contained in this repo:

```bash
npm install
npm run dev # http://localhost:5173
```

Production build & preview:

```bash
npm run build
npm run preview
```

## Tailwind + Styling Notes
- Global styles live in `src/styles/globals.css`, which imports Tailwind via `@import "tailwindcss";` (aliased to `src/styles/tailwind-directives.css`) and holds brand tokens.
- `tailwind.config.js` scopes content to `index.html` + `src/**/*.{ts,tsx}` and extends colors, fonts, and shadows.
- Typography uses Google Fonts (Playfair Display + Inter) imported once in the global stylesheet.

## ReactBits Integrations
ReactBits-inspired components are copied/adapted into `src/components/reactbits/`:

1. `AnimatedHeadline.tsx` – split-text hero headline animation.
2. `AuroraBackground.tsx` – animated gradient/aurora backdrop.
3. `SpotlightCard.tsx` – hover spotlight effect for cards.
4. `ScrollReveal.tsx` – intersection-based reveal for "Why Us" content.

Tweak motion settings directly inside each component (e.g., interval durations, blur radii, reveal thresholds) to dial in performance.

## Data & Content Sources
- `src/data/services.json`
- `src/data/fleet.json`
- `src/data/testimonials.json`
- `src/data/team.yaml`

Update these files to refresh copy, amenities, or bios without touching JSX.

### Images & Branding
Placeholder JPEGs sit under `public/images/**`. Swap each file with production photography (keeping filenames) for seamless deployment:
- `/images/hero.jpg`
- `/images/og.jpg`
- `/images/services/*.jpg`
- `/images/fleet/*.jpg`
- `/images/team/{atlas,valkyrie}.jpg`

Update licensing/insurance text inside `src/components/footer.tsx` with final legal copy.

## Routing & Key Features
- Router defined via `createBrowserRouter` in `src/main.tsx` with routes under `src/app/routes/*`.
- `usePageMetadata` (`src/lib/seo.ts`) ensures per-route `<title>` + `<meta name="description">` + OG/Twitter tags.
- Fleet page (`src/app/routes/fleet.tsx`) consumes `src/lib/filters.ts` for multi-criteria filtering and renders vehicle dossiers in the accessible modal (`src/components/ui/modal.tsx`).
- Contact form (`src/components/contact-form.tsx`) uses Zod schema from `src/lib/validation.ts` for synchronous validation before simulating submission.

## Connecting a Real Form Endpoint
Replace the mock `setTimeout` in `ContactForm` with your API call:

```ts
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(result.data),
});
// handle response / set errors
```

Show server-side validation feedback before toggling the success state.

## ReactBits Customization Cheatsheet
- `AnimatedHeadline`: adjust the interval delay (`45ms`) or transition speed for calmer motion.
- `AuroraBackground`: edit Tailwind gradient utilities/opacities for stronger or subtler glow.
- `SpotlightCard`: change the radial gradient radius (currently `180px`) for wider/narrower highlights.
- `ScrollReveal`: modify the `threshold` or animation duration to reveal earlier/later in scroll.

## Testing & Accessibility
- `npm run build` passes locally (tsc + Vite bundle) and the home page ships semantic landmarks, WCAG AA palette, focus-visible styles, and lazy-loaded media for Lighthouse ≥ 90 targets.
- Keyboard affordances: navbar drawer, testimonial carousel, fleet modal, and contact form controls all expose focus states.

## Next Steps
1. Swap placeholder imagery/copy with production assets.
2. Wire the contact form to your secure intake endpoint.
3. Add analytics or tag manager snippets in `index.html` if required.
4. Deploy the `dist/` output to Netlify, Vercel, Cloudflare Pages, or S3.
