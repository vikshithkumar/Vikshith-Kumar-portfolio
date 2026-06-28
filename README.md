# Arihant Shukla — Portfolio

Live at 👉 [arihantshukla.me](https://arihantshukla.me)

A modern, fully responsive personal portfolio showcasing my projects, certifications, and skills as a Full-Stack & Java Developer.

---

## ✨ Features

- **Dark / Light Mode** — Smooth toggle with persistence via `localStorage`
- **Interactive 3D Certificates Sphere** — Drag to rotate, scroll to zoom, click to expand
- **Animated Hero** — Particle background with typewriter role cycling
- **Projects Showcase** — Embedded live previews with modal detail views
- **Contact Form** — Powered by Web3Forms with toast notifications
- **Fully Responsive** — Mobile-first design across all sections

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| 3D / WebGL | Three.js, @react-three/fiber, @react-three/drei |
| Styling | Tailwind CSS + Vanilla CSS (custom properties) |
| Animations | CSS keyframes, Three.js useFrame |
| Forms | Web3Forms API |
| Deployment | Vercel + Custom Domain |

---

## 🛠️ Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/Arihantshukla98/Arihant-portfolio.git
cd Arihant-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx            # Navbar with dark/light toggle
│   ├── Hero.jsx              # Animated hero with particles
│   ├── About.jsx             # About section
│   ├── Projects.jsx          # Project cards with live previews
│   ├── Certificates.jsx      # Certificate grid + 3D sphere
│   ├── HolographicSphere.jsx # Interactive 3D sphere (Three.js)
│   ├── HolographicSphere.css
│   ├── Particles.jsx         # WebGL particle background
│   ├── Particles.css
│   ├── Contact.jsx           # Contact form
│   └── Footer.jsx
├── App.jsx                   # Theme state + routing
├── index.css                 # Global CSS variables (dark/light)
├── main.jsx
└── siteData.js               # All content data (projects, certs, stats)
```

---

## 📬 Contact

- **Email:** arihantshukla24@gmail.com
- **GitHub:** [@Arihantshukla98](https://github.com/Arihantshukla98)
- **Location:** Bengaluru, India
