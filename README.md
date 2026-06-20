# BotikaTech Website

Marketing and download website for the **BotikaTech** offline pharmacy desktop app.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

This is a standalone project: it has its own dependencies and does **not** share
`node_modules` with the Electron desktop app in the parent folder.

## Sections

- **Hero** — headline + an OS-detecting primary download button.
- **Features** — the app modules (Dashboard, Cash Fund, Products, Inventory, Orders, Reports, Customers, Shops, Backup).
- **How it works** — 5-step activation flow (download → pay → receive key → enter key in Settings → activated).
- **Pricing** — One Month / Six Months / One Year / One-Time plans (prices are placeholders).
- **Download** — per-platform buttons (macOS / Windows / Linux) pointing at GitHub Releases.
- **Contact** — Facebook + email for receiving the activation key.

## Getting started

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build   # production build
npm run start   # serve the production build
```

## What to update

Most editable content lives in two files:

- **`lib/content.ts`** — site name, contact email, Facebook URL, features list,
  activation steps, and **pricing** (replace the `₱—` placeholders with real prices).
- **`lib/downloads.ts`** — installer download links and the displayed `APP_VERSION`.

The logo is `public/botikatech-logo.webp` (copied from the desktop app). Swap it
out if you have a dedicated BotikaTech logo.

## Hosting the installers (GitHub Releases)

The installers are large (the macOS `.dmg` is ~145MB) and are **not** committed to
git. Host them as GitHub Release assets instead:

1. Build the desktop app from the parent folder:

   ```bash
   cd ..
   npm run build:mac     # or build:win / build:linux
   ```

   Artifacts are produced under the desktop app's `build/` (e.g.
   `BotikaTech-1.0.0-arm64.dmg`).

2. Create a release on GitHub for `Popoy-Dev/pharma-free-software` and upload the
   installer files as assets. Keep the file names consistent with
   `lib/downloads.ts`, e.g. `BotikaTech-1.0.0-arm64.dmg`.

3. The site links to `releases/latest/download/<file>`, so each new release with
   matching file names is picked up automatically. When you add Windows/Linux
   builds, flip `available: true` and point their `url` at the uploaded asset in
   `lib/downloads.ts`.

## Deploy to Vercel

1. Push this repo to GitHub (already done if you cloned it).
2. In Vercel, import the project and set the **Root Directory** to `website`.
3. Framework preset: **Next.js**. Build command and output are auto-detected.
4. Deploy. Vercel gives you a production URL and preview URLs for each push.

Alternatively, from the CLI:

```bash
cd website
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

## Notes

- The site is informational only — it does not generate activation keys. Keys are
  issued manually after payment, exactly as the desktop app expects.
- Pricing numbers are placeholders until you set real rates.
