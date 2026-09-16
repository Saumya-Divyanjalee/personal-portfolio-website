# Saumya.dev — Personal Portfolio

A responsive, single-page developer portfolio built with Angular, showcasing my projects, technical skills, and experience as a Software Engineer.

**🔗 Live site:** [personal-portfolio-website-beta-mocha.vercel.app](https://personal-portfolio-website-beta-mocha.vercel.app/)

---

## ✨ Features

- **Responsive design** — works across desktop, tablet, and mobile
- **Dark / light theme toggle** — persists via `localStorage`, respects system preference on first visit
- **Project showcase** with live category filtering (Full-Stack, Backend, AI/ML, Java)
- **Technical skills index** with real technology icons, grouped by category
- **Experience timeline** with scroll-reveal animation
- **Contact form** with validation and real email delivery via EmailJS
- **Single-page smooth-scroll navigation** with active-section highlighting
- **Server-side rendering (SSR)** for fast initial load and better SEO
- **Subtle animated code-rain background**, scroll-to-top button, and micro-interactions throughout

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Angular 20 (standalone components, signals, SSR) |
| Language | TypeScript |
| Styling | SCSS with CSS custom properties for theming |
| Email | EmailJS |
| Icons | Font Awesome, Devicon |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/app/
├── app.ts / app.html / app.scss     # Root shell: navbar, theme toggle, layout
├── home/                             # Composes all sections into the single page
├── hero/                             # Landing section with typing effect
├── about/                            # Editorial "newspaper" style bio section
├── skills/                           # Technology index with icons
├── experience/                       # Career timeline
├── projects/                         # Filterable project showcase
├── contact/                          # Contact form with EmailJS integration
├── footer/                           # Site footer
├── services/
│   ├── theme.ts                      # Dark/light theme state (SSR-safe)
│   └── navigation.ts                 # Shared smooth-scroll logic
├── shared/
│   ├── code-rain/                    # Animated background canvas
│   ├── scroll-top/                   # Scroll-to-top button
│   ├── loading-screen/               # Terminal-style boot animation
│   └── scroll-reveal.directive.ts    # IntersectionObserver-based reveal
├── models/
│   └── project.model.ts              # Project data shape
└── data/
    └── portfolio-data.ts             # Project content (single source of truth)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
git clone https://github.com/Saumya-Divyanjalee/my-portfolio.git
cd my-portfolio
npm install
```

### Development server

```bash
ng serve -o
```

Runs at `http://localhost:4200` with live reload.

### Production build

```bash
ng build
```

Outputs optimized, server-rendered build to `dist/my-portfolio`.

---
<img width="1896" height="866" alt="Screenshot 2026-09-16 140718" src="https://github.com/user-attachments/assets/d16af3f7-0df5-4c30-b110-485937318e04" />
<img width="1895" height="860" alt="Screenshot 2026-09-16 140728" src="https://github.com/user-attachments/assets/bbba335f-d003-4109-966d-c9997c348e49" />
<img width="1897" height="845" alt="Screenshot 2026-09-16 140736" src="https://github.com/user-attachments/assets/d68eabbe-5c3b-45e7-88b3-a3c8314bc08e" />
<img width="1901" height="857" alt="Screenshot 2026-09-16 140745" src="https://github.com/user-attachments/assets/54c3fd6b-86dc-4bfa-bc72-fdbe6abd1189" />
<img width="1917" height="857" alt="Screenshot 2026-09-16 140807" src="https://github.com/user-attachments/assets/b616f9fe-bcc8-4710-8b44-7365c2297303" />



## ⚙️ Environment Setup

The contact form uses [EmailJS](https://www.emailjs.com/) for delivery. To run your own copy:

1. Create a free EmailJS account and an email service + template
2. In `src/app/contact/contact.component.ts`, set your own:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

---

## 📦 Deployment

Deployed on [Vercel](https://vercel.com), with automatic redeployment on every push to `main`:

```bash
git add .
git commit -m "your message"
git push
```

---

 


## 📬 Contact

- **GitHub:** [@Saumya-Divyanjalee](https://github.com/Saumya-Divyanjalee)
- **Portfolio:** [personal-portfolio-website-beta-mocha.vercel.app](https://personal-portfolio-website-beta-mocha.vercel.app/)

---

## 📄 License

This project is open for reference. Please don't copy the content (bio, project descriptions) as-is — feel free to use the code structure as a learning reference.
