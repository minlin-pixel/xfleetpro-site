# xFleetPro marketing site

This repo contains a lightweight, static marketing landing page for `xfleetpro.com`, with copy and structure inspired by modern fleet/telematics sites and a strong focus on Geotab.

## Files

- `index.html`: Page content and layout
- `company.html`: Company info page
- `about.html`: About page
- `contact.html`: Contact page
- `styles.css`: Styling (responsive, no build step)
- `script.js`: Mobile menu, sticky header elevation, contact mailto form, footer year

## Preview locally

From the project folder:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Deploy

### Vercel (via GitHub)

This repo is configured for **Vercel static hosting** (see `vercel.json`). Recommended flow:

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import Git Repository** and select the repo.
3. Framework preset: **Other** (no build step needed).
4. Deploy.
5. In Vercel: **Project → Settings → Domains**
   - Add `xfleetpro.com` and (optionally) `www.xfleetpro.com`

### DNS for `xfleetpro.com` (Vercel)

In your DNS provider:

- **A record** for apex `xfleetpro.com` → `76.76.21.21`
- **CNAME** for `www` → `cname.vercel-dns.com`

After DNS propagates, Vercel will provision TLS and your site will be live at `xfleetpro.com`.

