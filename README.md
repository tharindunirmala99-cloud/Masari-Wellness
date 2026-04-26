# Masari Wellness and Spa & Wellness — React SPA

A full static SPA website built with **React 18 + Vite + CSS Modules**.

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```
Output goes to `/dist` — deploy to Netlify, Vercel, or any static host.

---

## Project Structure

```
serenity-spa/
├── index.html                  # Vite entry point
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Assembles all sections
    ├── index.css               # Global CSS variables & reset
    └── components/
        ├── Navbar.jsx/.module.css
        ├── Hero.jsx/.module.css
        ├── About.jsx/.module.css
        ├── Treatments.jsx/.module.css
        ├── Packages.jsx/.module.css
        ├── Experience.jsx/.module.css
        ├── Testimonials.jsx/.module.css
        ├── Contact.jsx/.module.css
        └── Footer.jsx/.module.css
```

---

## Activating the Contact Form

The contact form uses **Web3Forms** (free, 250 submissions/month, no backend required).

1. Sign up at [https://web3forms.com](https://web3forms.com)
2. Create a new form and copy your **Access Key**
3. Open `src/components/Contact.jsx`
4. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your key:



---

## Customisation

| What | Where |
|---|---|
| Brand colours & fonts | `src/index.css` (CSS variables) |
| Spa name & contact info | `src/components/Contact.jsx`, `Footer.jsx`, `Navbar.jsx` |
| Treatments list | `src/components/Treatments.jsx` (treatments array) |
| Packages & pricing | `src/components/Packages.jsx` (packages array) |
| Hero background image | `src/components/Hero.module.css` (.bg rule) |
| Testimonials | `src/components/Testimonials.jsx` (testimonials array) |

---

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — instant dev server & optimised build
- **CSS Modules** — scoped styles, zero runtime overhead
- **Web3Forms** — serverless form handling
- **Intersection Observer API** — scroll-triggered animations (no library needed)
- **Google Fonts** — Cormorant Garamond + DM Sans

## Deployment (Netlify)

```bash
npm run build
# Drag and drop the /dist folder to netlify.com/drop
```

Or connect your Git repo for automatic deploys on every push.
