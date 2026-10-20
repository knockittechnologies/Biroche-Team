# The Brioche Team — Website

A marketing website for The Brioche Team (dessert brand): Home, Our Menu, Locations,
Brand Origin, Events & Corporate, Franchise, Careers, and Contact pages.

## Project structure

```
frontend/   React app (Create React App + CRACO, Tailwind, Radix UI, Framer Motion)
backend/    FastAPI service (optional — see note below)
```

All page content (menu items, locations, events, franchise info, etc.) is static
data inside the React app (`frontend/src/lib/site.js` and the page components).
The only feature that talks to the backend is the enquiry/contact forms.

## Deploying the website (frontend)

This is a standard Create React App project and deploys like any static site.

```bash
cd frontend
npm install
npm run build
```

This produces a `frontend/build` folder — upload that folder's contents to any
static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, Nginx, etc.).

### Deploying on Vercel

This zip has `frontend/`, `backend/`, and other folders all at the top level —
it is **not** a single-app repo. If you import/deploy it on Vercel without
telling it where the React app actually lives, Vercel won't find it and
you'll get a blank white screen after deploy. To fix:

1. Vercel dashboard → your project → **Settings → General**
2. **Root Directory** → set to `frontend` (this is the one that matters)
3. **Framework Preset** → Create React App
4. **Build Command** → `npm run build` (default)
5. **Output Directory** → `build` (default)
6. Redeploy

A `frontend/vercel.json` is included with a rewrite rule so client-side routes
like `/menu` or `/locations` work on direct load/refresh, not just from
in-app navigation.

For Netlify, the equivalent settings are:
- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `frontend/build`

### A note on `npm install`

There's a known dependency conflict in the react-scripts 5 / CRACO toolchain
between two different major versions of `ajv` that different build plugins
need. It's already handled for you: `npm install` runs a `postinstall` script
(`frontend/scripts/fix-ajv.js`) that patches this automatically. You shouldn't
need to do anything extra — just `npm install` and `npm run build` as normal.

If you ever see a build error mentioning `ajv-keywords`, run:
```bash
cd frontend/node_modules/ajv-keywords && npm install ajv@8.17.1 --no-save
```

## Running locally

```bash
cd frontend
npm install
npm start
```

Opens the dev server at http://localhost:3000.

## Backend (optional)

`backend/` is a small FastAPI service (see `backend/requirements.txt`). It's only
needed if you want the Contact/Events/Franchise enquiry forms to actually save
submissions somewhere — currently they post to `/api/enquiries`, which isn't yet
implemented in `backend/server.py` (only a basic status-check endpoint exists).
The site itself works and displays fully without the backend running.

To run it:
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```
