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

### GitHub Pages (recommended)

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that deploys the site to **GitHub Pages** on every push to `main`.

1. Create a GitHub repo (example name: `xfleetpro-site`).
2. Add the remote and push:

```bash
git remote add origin YOUR_REPO_GIT_URL
git push -u origin main
```

3. In GitHub: **Settings → Pages**
   - **Build and deployment**: select **GitHub Actions**
4. Ensure the custom domain is set to **`xfleetpro.com`** (this repo includes a `CNAME` file).

### DNS for `xfleetpro.com`

At your domain registrar / DNS provider:

- For apex domain `xfleetpro.com` (A records):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Optional (recommended) for `www.xfleetpro.com`:
  - CNAME `www` → `YOUR_GITHUB_USERNAME.github.io`

After DNS propagates, GitHub Pages will provision TLS and your site will be live at `xfleetpro.com`.

### Other hosts

Because it’s static, you can also deploy by uploading these files to Netlify, Vercel static, S3/CloudFront, etc.

