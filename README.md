# Wu Yun-Ching (吳昀慶) — Portfolio & Academic Showcase

> Personal website, research portfolio, and interactive GIS platform of Wu Yun-Ching (吳昀慶) — Designer, Urban Researcher, and Sustainability Advocator.

## 🚀 How to Publish to GitHub Pages (GitHub Web)

This repository includes a ready-to-use **GitHub Actions** workflow (`.github/workflows/deploy.yml`) for instant, automated deployment to GitHub Pages.

### Step 1: Export to GitHub
In Google AI Studio, click the **Settings / Export** menu in the top right and select **Export to GitHub** (or push this repository to your GitHub account).

### Step 2: Enable GitHub Pages in your Repository
1. Go to your GitHub repository: `https://github.com/<your-username>/<repo-name>`
2. Click **Settings** (齒輪圖示) → **Pages** (左側欄選單).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! GitHub Actions will trigger automatically upon every push to `main`, compile the app, and host it live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Build production bundle
npm run build
```

## 🌐 Features
- **White Tech Aesthetic**: Minimalist, high-contrast, technical grid styling.
- **Bilingual Support**: Instant switch between Traditional Chinese (繁體中文) and English (EN).
- **Interactive GIS & Living Labs**: Direct links to Taipei Walk Map, Historical Cartography, and Amsterdam Living Lab studies.
- **Master's Thesis Showcase**: ARIE Evaluation Model (Avoid, Reduce, Insist, Encourage) & 3E Framework.
- **Embedded Documentaries**: Video player supporting YouTube and Vimeo knowledge media.
- **Publications & Preprints**: Searchable articles and one-click citation copy.
