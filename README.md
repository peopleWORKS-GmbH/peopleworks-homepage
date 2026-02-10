## PeopleWorks Homepage

Simple one-page Next.js site styled exclusively with Tailwind CSS, mirroring the provided example: hero, consulting focuses, about section with accordion, and a contact form opening an email draft.

### Run Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

### Edit

- Main page: app/page.tsx
- Global styles: app/globals.css (Tailwind v4 via `@tailwindcss/postcss`)

### Contact Form

The form uses a `mailto:` link to open an email client with the entered subject/body. No backend required.

### Language Switch

- Toggle DE/EN via the switcher in the header.
- Preference is saved to `localStorage` and the `<html lang>` attribute updates accordingly.
