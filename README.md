# X Fleet Pro

Simple static marketing site for `xfleetpro.com`, focused on Geotab fleet services.

## Pages

- `index.html` — Home
- `company.html` — Company
- `about.html` — About
- `contact.html` — Contact

Shared header/footer and interactions live in `script.js`. Styles are in `styles.css`.

## Preview

```bash
python3 -m http.server 5173
```

Open `http://localhost:5173`.

## Deploy (Vercel + GitHub)

1. Push to GitHub
2. Import the repo in Vercel (framework: Other)
3. Add domain `xfleetpro.com`

DNS:

- A `@` → `76.76.21.21`
- CNAME `www` → `cname.vercel-dns.com`
