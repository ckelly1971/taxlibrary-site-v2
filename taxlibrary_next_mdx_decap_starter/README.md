# The Tax Library — Next.js + MDX + Decap CMS

This project preserves your existing layout/placement and adds **MDX content** and a **Decap CMS** editor.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run the site
npm run dev

# 3) (Optional) Run Decap CMS locally in another terminal tab
npm run cms

# 4) Open the site
http://localhost:3000

# 5) Open the CMS (local backend)
http://localhost:3000/admin
```

### Editing Content
- Go to **/admin** (Decap CMS) and create/edit resource articles. Files are saved into `/content/*.mdx`.
- Or edit the MDX directly in the repo.

### Routes
- `/` — Homepage (layout preserved from your original)
- `/resources` — Resources index
- `/resources/[slug]` — MDX-driven resource pages, e.g.:
  - `/resources/corporation-tax`
  - `/resources/income-tax`
  - `/resources/vat`

### Notes
- Header/top bar/footer componentised and match your original HTML/CSS.
- Styling from `styles/globals.css`, ported from your uploaded file.
- To deploy and use Git-backed CMS auth, switch `backend` in `public/admin/config.yml` to `github` and add repo settings, or keep `git-gateway` if deploying on Netlify with Identity enabled.
