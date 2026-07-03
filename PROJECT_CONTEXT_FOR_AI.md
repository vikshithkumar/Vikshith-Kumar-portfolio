# Project Context: Vikshith Kumar S Portfolio

This document serves as a complete, centralized knowledge base for the portfolio project. It details the system architecture, file/folder structure, technology stack, data flows, configuration, component breakdowns, coding patterns, and guidelines for future development.

---

## 📖 Project Overview & Purpose
The project is a premium, modern, fully responsive personal portfolio website for **Vikshith Kumar S**, a Data Engineer based in Bengaluru, India. 

### Key Features
1. **Dark & Light Themes**: Minimalist monochrome look (pitch black default, pure white light mode) using custom CSS properties with persistence synced through `localStorage`.
2. **Interactive 3D Certificates Sphere**: A dynamic 3D globe rendered with Three.js (React Three Fiber) containing certificates as interactive node badges. Users can drag to rotate, scroll to zoom, hover to trigger rotating neon HUD rings, and click to view certificates in a custom holographic detail modal.
3. **Alternative List Grid View**: A fallback clean grid of certificate cards containing local image renders and overlay expand options with Lightbox modals.
4. **Animated Hero Section**: A high-performance WebGL particle background rendering 250 interactive drifting particles. Typewriter-effect role cycler for key specializations.
5. **Projects Showcase**: Interactive cards featuring custom metrics, tech stacks, details, repository links, and simulated interactive console previews (e.g. Azure Data Factory Spark pipeline monitor logs, Data Warehouse dimensional schema validator logs).
6. **Unified Experience / Resume View**: A clean digital resume matching the monochrome aesthetic, printable, containing full project details, education timelines, skill directories, and a direct link to download the compiled PDF resume.
7. **Contact Form**: Powered by Web3Forms API to send form submissions directly to the developer's inbox, with custom notification state overlays (idle, sending, success, error) and styled toast messages.

### Active Certificates (Updated July 2026)
The following 9 certificates are configured in the portfolio data and displayed in both the 3D Sphere and Grid/Resume views:
1. **Microsoft Certified: Fabric Data Engineer Associate**
   * File: [microsoft-fabric-data-engineer.jpg](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/microsoft-fabric-data-engineer.jpg)
   * Issuer: Microsoft
2. **Introduction to Generative AI**
   * File: [google-generative-ai.png](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/google-generative-ai.png)
   * Issuer: Google Cloud
3. **Create a Secure Data Lake on Cloud Storage**
   * File: [google-secure-data-lake.png](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/google-secure-data-lake.png)
   * Issuer: Google Cloud
4. **Store, Process, and Manage Data on Google Cloud - Console**
   * File: [google-cloud-storage-console.png](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/google-cloud-storage-console.png)
   * Issuer: Google Cloud
5. **The Basics of Google Cloud Compute**
   * File: [google-cloud-compute.png](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/google-cloud-compute.png)
   * Issuer: Google Cloud
6. **Smart India Hackathon (SIH) 2025**
   * File: [sih-2025.jpg](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/sih-2025.jpg)
   * Issuer: MoE Innovation Cell / NHCE
7. **GHCI 2025 - Hackathon Participation Certificate**
   * File: [ghci-2025-hackathon.png](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/ghci-2025-hackathon.png)
   * Issuer: GHCI 2025
8. **Claude Code in Action**
   * File: [claude-code-in-action.jpg](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/claude-code-in-action.jpg)
   * Issuer: Anthropic / Coming Soon
9. **Scaler DBMS**
   * File: [scaler-dbms.png](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates/scaler-dbms.png)
   * Issuer: Scaler

### 🐙 GitHub Configuration & Repositories
The portfolio references the following profile and repository paths:
*   **GitHub Profile**: [https://github.com/vikshithkumar](https://github.com/vikshithkumar)
*   **Azure Data Factory – Cloud Data Pipeline Repository**: [https://github.com/vikshithkumar/Azure_data_factory_Project](https://github.com/vikshithkumar/Azure_data_factory_Project)
*   **Data Warehouse and Analytics Pipeline Repository**: [https://github.com/vikshithkumar/Sql_Data_Warehouse_Projrct](https://github.com/vikshithkumar/Sql_Data_Warehouse_Projrct)
*   **Personal Finance Analysis and Budget Optimisation System**: Uses the main GitHub profile [https://github.com/vikshithkumar](https://github.com/vikshithkumar)

---

## 🛠️ Tech Stack & Dependencies

### Core Framework & Build Tools
*   **React 19** (`react` & `react-dom` `^19.2.0`): Uses modern React hooks (no class components).
*   **Vite 7** (`vite` `^7.2.4`): Next-generation frontend tooling for fast development and asset compilation.
*   **PostCSS & Autoprefixer**: Handles cross-browser CSS styling support.

### 3D Render & WebGL Physics Libraries
*   **Three.js** (`three` `^0.166.0`): The base low-level WebGL 3D graphics rendering engine.
*   **React Three Fiber (R3F)** (`@react-three/fiber` `^9.0.0`): React wrapper declaring Three.js elements declaratively as React components.
*   **Drei** (`@react-three/drei` `^9.121.0`): Standard collection of helpers, loaders, and controls for React Three Fiber (e.g. `OrbitControls`, `Html`).
*   **OGL** (`ogl` `^0.0.116`): Minimalist WebGL engine used for high-performance particle background simulation in `Particles.jsx`.
*   **MeshLine** (`meshline` `^3.3.1`): Used for drawing thick, smooth lines in 3D WebGL scenes.
*   **Rapier Physics** (`@react-three/rapier` `^2.2.0`): R3F physics wrapper (installed but not active in production files).

### Animations & Gestures
*   **React Use Gesture** (`@use-gesture/react` `^10.3.0`): Gesture bindings (used in the deprecated `DomeGallery.jsx` component).
*   **CSS Keyframes**: Core animations (drifts, glows, typewriters, fading) are written in raw CSS for performance.

### Styling & UI Utilities
*   **Tailwind CSS** (`tailwindcss` `^3.4.17`): Utilized for utility-first layout construction (flexbox, grid, sizing, spacing).
*   **Vanilla CSS**: Used for custom theme design tokens, animations, scrollbars, and customized properties in `index.css`.
*   **React Hot Toast** (`react-hot-toast` `^2.6.0`): Compact, responsive toast notifications.

### Integrations
*   **Web3Forms API**: Backend-less form submission service that relays contact details directly to the developer's email inbox.
*   **Google Fonts**: `Outfit` (sans-serif body/headings font) and `JetBrains Mono` (monospace styling for labels and stats).

---

## 📁 Folder & File Structure

```
d:/Portfolio/Vikshith Kumar-portfolio/
├── .git/                      # Git repository tracking
├── .github/                   # GitHub integration configuration
│   └── workflows/
│       └── main.yml           # CI/CD deployment pipeline (GitHub Actions)
├── public/                    # Static assets copied directly to build output
│   └── resume.pdf             # Printable resume document
├── src/                       # Source code directory
│   ├── assets/                # Asset imports managed by Vite
│   │   └── certificates/      # Local certificate PNG/JPG image assets
│   ├── components/            # Reusable React components
│   │   ├── Lanyard/           # Deprecated: 3D interactive lanyard folder
│   │   │   ├── Lanyard.css
│   │   │   └── Lanyard.jsx
│   │   ├── About.jsx          # Bio section, skills list, and education timeline
│   │   ├── Certificates.jsx   # Credentials section managing Grid/3D toggles and modals
│   │   ├── Contact.jsx        # Contact form with Web3Forms integration
│   │   ├── CustomCursor.jsx   # Optional: Smooth custom circular pointer (Unmounted)
│   │   ├── DesignLab.jsx      # Deprecated: Color utility drawer (Safely unmounted)
│   │   ├── DomeGallery.css    # Optional: CSS for 3D Dome Gallery (Unmounted)
│   │   ├── DomeGallery.jsx    # Optional: Custom 3D picture dome wall (Unmounted)
│   │   ├── Footer.jsx         # Bottom footer with copyright and social links
│   │   ├── Header.jsx         # Navbar with mobile menu and sliding theme toggle
│   │   ├── Hero.jsx           # Intro screen with typewriter, stats, and particles
│   │   ├── HolographicSphere.css  # CSS styling for Holographic sphere and detail views
│   │   ├── HolographicSphere.jsx  # Three.js 3D sphere certificate showcase
│   │   ├── Particles.css      # CSS for particle WebGL canvas
│   │   ├── Particles.jsx      # WebGL particle system using OGL and custom GLSL
│   │   ├── Projects.jsx       # Grid of project cards, overlay previews, & simulator
│   │   ├── ResumePage.jsx     # Full digital CV layout with PDF download handler
│   │   └── ResumeSection.jsx  # Optional: Resume CTA banner (Unmounted)
│   ├── App.css                # Component-specific styles
│   ├── App.jsx                # Core root component managing routing, theme, and toast
│   ├── index.css              # Main stylesheet containing global CSS variable tokens
│   ├── main.jsx               # App entry point (StrictMode render)
│   └── siteData.js            # Central static data module for projects, certs, and stats
├── .gitignore                 # Files excluded from git
├── .npmrc                     # Node registry parameters
├── CNAME                      # Custom Domain mapping (optional)
├── eslint.config.js           # ESLint configuration
├── index.html                 # Main index template and metadata headers
├── package-lock.json          # Node dependency lock file
├── package.json               # Project manifest, scripts, and dependencies
├── postcss.config.js          # PostCSS utility configurations
├── tailwind.config.js         # Tailwind customization rules
└── vite.config.js             # Vite compiler configurations
```

---

## 🏛️ System Architecture

The application is architected as a serverless, client-side Single-Page Application (SPA) powered by React and Vite. It is hosted on GitHub Pages with an automated deployment workflow.

```
       +-----------------------------------------------------------+
       |                        Web Browser                        |
       |                                                           |
       |  +--------------------+           +--------------------+  |
       |  |     App.jsx        |           |     Header.jsx     |  |
       |  |  (Theme & Page     |---------->|   (Theme Switcher, |  |
       |  |   States Manager)  |           |    Page Selectors) |  |
       |  +--------------------+           +--------------------+  |
       |            |                                |             |
       |            v                                v             |
       |  +-----------------------------------------------------+  |
       |  |                   Current View                      |  |
       |  |                                                     |  |
       |  |  [Page === 'home']         [Page === 'resume']      |  |
       |  |   ├─ Hero.jsx               └─ ResumePage.jsx       |  |
       |  |   │   └─ Particles.jsx                                 |  |
       |  |   ├─ About.jsx                                         |  |
       |  |   ├─ Projects.jsx                                      |  |
       |  |   │   └─ Modals & Scanner                              |  |
       |  |   ├─ Certificates.jsx                                  |  |
       |  |   │   ├─ HolographicSphere.jsx                         |  |
       |  |   │   │   └─ Canvas / R3F                              |  |
       |  |   │   └─ Lightbox Modal                                |  |
       |  |   └─ Contact.jsx                                       |  |
       |  +-----------------------------------------------------+  |
       +-----------------------------------------------------------+
             |                                             |
             | Web3Forms submit API (POST)                 | Native download
             v                                             v
     +---------------+                              +---------------+
     |  Web3Forms    |                              |  resume.pdf   |
     |  Mail Servers |                              | (Public Root) |
     +---------------+                              +---------------+
```

### Architectural Key Concepts
1. **Monochrome Design Engine**: Design guidelines are hardcoded in `index.css` under the custom variables `--surface` (background), `--surface-raised` (card backdrops), and `--text-primary` / `--text-secondary`. Light and dark styles use pure CSS class modifications via matching property changes on the root element `:root[data-theme]`.
2. **Interactive 3D Canvas**: The `HolographicSphere` renders a Three.js environment directly over a dedicated DOM node using `@react-three/fiber` canvas, containing nested components for:
   *   `GlowCore`: Animating center point scale.
   *   `GlowRing`: Orbits rotating dynamically at fixed Euler angles (`rotX`, `rotZ`).
   *   `RotatingSphere`: Subtly rendered wireframes.
   *   `SphereDots`: Decorative dots plotted via Fibonacci sphere calculations.
   *   `Html`: Standard interactive React DOM tags positioned in 3D coordinate space on the sphere surface.
3. **Typewriter Machine**: Written in functional, raw JavaScript inside `Hero.jsx` using React refs, recursive scheduling via `setTimeout`, and clean state trackers to type, hold, delete, and iterate through roles.
4. **WebGL Custom Particle Background**: `Particles.jsx` initializes a custom OGL renderer mapping point meshes directly in WebGL. Vertex and Fragment shaders are coded in inline GLSL blocks in the JavaScript file to manage particle positioning, scale, and color gradient drifts.

---

## 🔀 Application & Data Flow

### View Switching (Routing)
No React Router package is installed. Page transitions are handled dynamically using React states:
1. `currentPage` state (`'home'` or `'resume'`) resides in `App.jsx`.
2. Nav links in `Header.jsx` update this state via the `setCurrentPage` callback.
3. Conditionally rendered views in `App.jsx` toggle visibility based on `currentPage`.

### Data Distribution
Configuration details, project details, timeline events, and credential records are decoupled from markup in `siteData.js`. 
*   Data is exported as static arrays (`certificates`, `projects`, `timeline`).
*   Imported by components (`Hero`, `About`, `Projects`, `Certificates`, `ResumePage`) to iterate and build the respective views.
*   `siteStats` inside `siteData.js` is automatically computed based on the arrays' lengths to ensure stats in the hero section update automatically when lists change.

### Theme Flow
*   `theme` state (`'dark'` or `'light'`) is declared in `App.jsx`.
*   Initializes via an IIFE matching `localStorage.getItem('portfolio-theme') || 'light'`.
*   `useEffect` hooks apply the attribute `data-theme` directly onto `document.documentElement` whenever the state changes.
*   Theme changes trigger color updates across components due to CSS variables mapping in `index.css`.
*   Sliding toggle button in `Header.jsx` calls `toggleTheme()` to flip the state.

---

## 🌐 API Endpoints & Integrations

### Web3Forms API Integration
Used for processing contact forms.
*   **Endpoint**: `POST https://api.web3forms.com/submit`
*   **Method**: `POST`
*   **Headers**: `Content-Type: application/json`
*   **Body Schema**:
    ```json
    {
      "access_key": "a7b19e8f-f266-40a0-ba0e-2b718ab80e97",
      "name": "User Name",
      "email": "user@example.com",
      "message": "Hello...",
      "subject": "Portfolio Contact Form - User Name",
      "from_name": "Vikshith Kumar Portfolio"
    }
    ```
*   **Implementation Location**: [Contact.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Contact.jsx#L64-L98)

---

## 📦 Key Component Breakdown

| Component File | Location | Active | Purpose |
| :--- | :--- | :--- | :--- |
| `App.jsx` | [/src/App.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/App.jsx) | Yes | State holder (Theme, Page context), toast setups, structure assembly. |
| `Header.jsx` | [/src/components/Header.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Header.jsx) | Yes | Responsive navbar, custom sliding theme pill toggle, overlay mobile menu. |
| `Hero.jsx` | [/src/components/Hero.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Hero.jsx) | Yes | Title, typewriter role cycles, statistics badges, WebGL particle integration. |
| `About.jsx` | [/src/components/About.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/About.jsx) | Yes | Bio paragraphs, mapping skills directory, interactive timeline path. |
| `Projects.jsx` | [/src/components/Projects.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Projects.jsx) | Yes | Project showcase grid, overlay detail panel, iframe embeds, terminal simulation. |
| `Certificates.jsx` | [/src/components/Certificates.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Certificates.jsx) | Yes | Mode selector (Grid/3D), Lightbox portal renderer, cert detail triggers. |
| `HolographicSphere.jsx` | [/src/components/HolographicSphere.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/HolographicSphere.jsx) | Yes | WebGL Drei Canvas, 3D orbits and sphere dots rendering, certificate HTML node placements. |
| `Particles.jsx` | [/src/components/Particles.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Particles.jsx) | Yes | WebGL particle grid utilizing raw shaders, hover mouse modifiers, resizing. |
| `Contact.jsx` | [/src/components/Contact.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Contact.jsx) | Yes | Contact layout form inputs, Web3Forms integration, success/error views. |
| `ResumePage.jsx` | [/src/components/ResumePage.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/ResumePage.jsx) | Yes | Digital resume grid matching monochrome styles, direct printable formatting. |
| `CustomCursor.jsx` | [/src/components/CustomCursor.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/CustomCursor.jsx) | No | Optional circular tracking pointer (currently unmounted). |
| `ResumeSection.jsx` | [/src/components/ResumeSection.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/ResumeSection.jsx) | No | Optional CTA banner prompting to download the resume PDF (currently unmounted). |
| `DomeGallery.jsx` | [/src/components/DomeGallery.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/DomeGallery.jsx) | No | Optional 3D custom grid dome carousel (currently unmounted). |
| `DesignLab.jsx` | [/src/components/DesignLab.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/DesignLab.jsx) | No | Deprecated component placeholder. Safely unmounted. |

---

## 🎨 Global Styles & Custom Variables

All UI styling parameters are defined as CSS variables in `src/index.css` under global and themed selectors:

### Base Color Properties (`:root` & `[data-theme="dark"]`)
*   `--surface`: `#000000` (Pure Black Background)
*   `--surface-raised`: `#121212` (Cards/Backdrop Background)
*   `--surface-border`: `#27272A` (Borders/Dividers)
*   `--text-primary`: `#FAFAFA` (Zinc Primary Text)
*   `--text-secondary`: `#A1A1AA` (Zinc Secondary Text)
*   `--text-muted`: `#52525B` (Zinc Muted Text)
*   `--accent`: `hsl(0, 0%, 100%)` (White accent)
*   `--accent-glow`: `hsla(0, 0%, 100%, 0.15)`
*   `--text-on-accent`: `#000000`

### Light Theme Adjustments (`[data-theme="light"]`)
*   `--surface`: `#FFFFFF` (Pure White Background)
*   `--surface-raised`: `#F4F4F5` (Gray Light Cards)
*   `--surface-border`: `#E4E4E7` (Gray Light Borders)
*   `--text-primary`: `#09090B` (Zinc Dark Text)
*   `--text-secondary`: `#52525B` (Zinc Medium Text)
*   `--text-muted`: `#71717A` (Zinc Muted Text)
*   `--accent`: `hsl(0, 0%, 0%)` (Black accent)
*   `--accent-glow`: `hsla(0, 0%, 0%, 0.10)`
*   `--text-on-accent`: `#FFFFFF`

---

## 🚀 Build & Deployment Pipeline

Deployment to production is handled using GitHub Pages, orchestrated via GitHub Actions:

### Build Environment
*   **Operating System**: Linux (Ubuntu Runner)
*   **Node.js Version**: `20`
*   **Package Manager**: `npm`
*   **CI Script Location**: [.github/workflows/main.yml](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/.github/workflows/main.yml)

### Deployment Steps
1. Checkout repository to Ubuntu runner.
2. Install npm cache dependencies using `npm ci`.
3. Compile static distribution assets using `npm run build` (outputs compilation bundle inside `./dist` directory).
4. Upload build directory using `actions/upload-pages-artifact@v3`.
5. Deploy pages package to GitHub Pages using `actions/deploy-pages@v4`.
6. Apply custom CNAME binding if configured.

---

## ⚠️ Known Limitations & Technical Debt

1.  **Unused Files in Workspace**:
    *   `DesignLab.jsx` and `Lanyard/` contain deprecated code comments but still exist in the filesystem.
    *   `DomeGallery.jsx`, `CustomCursor.jsx`, and `ResumeSection.jsx` are not imported or mounted anywhere in `App.jsx`, cluttering the project structure.
2.  **Hardcoded Form Token**: The Web3Forms access key is hardcoded directly in `Contact.jsx` rather than being extracted into a `.env` environment variable.
3.  **Missing Local Dependency Install**: The dependencies are defined in `package.json` but need to be built locally (`npm install` required before debugging).
4.  **Static Site Content**: Portfolio data (such as project links, descriptions, and certificate properties) is hardcoded in `siteData.js`. Future enhancements could benefit from dynamic fetching or headless CMS configuration.

---

## 📍 Change Implementation Map

When making updates, use this guide to identify the correct files:

*   **Styling, Palette, or Theme Tokens**: Modify [index.css](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/index.css).
*   **Updating Certificates, Timeline, Projects, or Stats**: Modify [siteData.js](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/siteData.js).
*   **Updating Certificate Images**: Put images in [certificates/](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/assets/certificates) and import in `siteData.js`.
*   **Fixing Form Handlers, Validation, or Submit Logic**: Modify [Contact.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Contact.jsx).
*   **Adding/Updating Layout Sections (e.g. Header, Footer)**: Edit [Header.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Header.jsx) or [Footer.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Footer.jsx).
*   **Adding Global Page Routings or Layout Modifiers**: Edit [App.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/App.jsx).
*   **Adjusting 3D Cert Globe Orbits or Speeds**: Edit [HolographicSphere.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/HolographicSphere.jsx).
*   **Modifying WebGL Particle Shaders, Speed, or Colors**: Edit [Particles.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/Particles.jsx).
*   **Updating Print Layout / Digital Resume Details**: Edit [ResumePage.jsx](file:///d:/Portfolio/Vikshith%20Kumar-portfolio/src/components/ResumePage.jsx).
*   **Replacing Default Resume PDF**: Replace `resume.pdf` in the `public` directory.
