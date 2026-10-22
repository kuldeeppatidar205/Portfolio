# 🚀 Kuldeep Patidar — Developer Portfolio

> A lightweight, responsive personal portfolio web application built with **React 19** and **Tailwind CSS v4** to showcase featured engineering projects, professional experience, and direct contact channels.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://kuldeep-patidar.vercel.app/)  
🔗 **Live URL:** [https://kuldeep-patidar.vercel.app/](https://kuldeep-patidar.vercel.app/) 
📂 **Source Code:** [https://github.com/kuldeeppatidar205/portfolio](https://github.com/kuldeeppatidar205/portfolio)

---

## 📸 Screenshots (Real Data Previews)

### 1. Hero & About Overview
Captures the initial landing fold featuring developer positioning, direct resume CTA, and quick section anchors.

![Hero and About Section](./public/Screenshot%20(258).png)
!(./public/Screenshot%20(259).png)

---


## 🛠️ Accurate Tech Stack

Audited directly against [`package.json`](./package.json) and root configurations:

| Category | Technology | Version | Purpose in Codebase |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `^19.2.8` | Core UI library & functional component architecture |
| **DOM Renderer** | [ReactDOM](https://react.dev/) | `^19.2.8` | Mounts component tree to `index.html` root |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) | `^8.2.0` | Ultra-fast HMR and ESM-based production bundling |
| **Vite React Plugin** | `@vitejs/plugin-react` | `^6.0.4` | Fast Refresh and JSX transformation support |
| **Styling Engine** | [Tailwind CSS](https://tailwindcss.com/) | `^4.3.3` | Utility-first styling with `@tailwindcss/vite` integration |
| **Static Assets** | Native PDF Serving | — | Host and stream `public/Kuldeep patidar resume.pdf` |
| **Linter & Code Style**| [ESLint](https://eslint.org/) | `^10.8.0` | React Hooks & Refresh linting (`eslint.config.js`) |
| **Type Definitions** | `@types/react`, `@types/react-dom` | `^19.2.x` | IDE autocompletion and JSX schema support |

---

## ⚡ Three Key User Actions

Users visiting the portfolio can perform the following primary interactive flows:

1. **📄 View & Download Resume**
   - Click the **"View Resume"** button in the Hero section.
   - Triggers direct access to the bundled PDF document ([`public/Kuldeep patidar resume.pdf`](./public/Kuldeep%20patidar%20resume.pdf)) in a new browser tab via `target="_blank"` and `rel="noopener noreferrer"`.
2. **🚀 Explore Verified Project Deployments**
   - Scroll to the **"Selected Projects"** section.
   - Click the **"View Project →"** link on any project card (e.g., Verisite housing ledger or AgriNode price tracker) to navigate to live deployed applications and view associated technical stacks.
3. **📬 Trigger Direct Contact & Social Networking**
   - In the Footer section, click the **"Email"** button to trigger a local email client pre-addressed to `patidarkuldeep1984@gmail.com` via `mailto:`.
   - Click outbound links to view the verified **GitHub** (`github.com/kuldeeppatidar205`) and **LinkedIn** profiles.

---

## 💻 Working Local Instructions

Follow these step-by-step instructions to clone, install, and run the project locally.

### Prerequisites
- **Node.js**: `v18.0.0` or higher (Recommended: `v20.x` or `v22.x`)
- **Package Manager**: `npm` (included with Node.js), `yarn`, or `pnpm`
- **Git** installed on your operating system

### 1. Clone the Repository
```bash
git clone https://github.com/kuldeeppatidar205/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The local development server will start at:
```text
http://localhost:5173/
```

### 4. Create Production Build
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```
Runs a local static web server serving the compiled `dist/` bundle to test performance before deploying.

### 6. Run Code Linter
```bash
npm run lint
```

---

## ⚠️ Honest Limitations

- **Client-Side `mailto:` Only**: The contact action relies entirely on the client machine having a configured default email handler; there is no backend API or serverless contact form submission (e.g., Nodemailer, Resend, Formspree).
- **Static In-Memory Data**: Content is loaded from a local JavaScript file (`portfolioData.js`). Updating content requires a code commit and redeployment rather than fetching from a Headless CMS or API.
- **Static Background Palette**: The root layout in `App.jsx` enforces a fixed `bg-gray-300` background and does not adapt dynamically to system color scheme preferences (`prefers-color-scheme`).
- **Single Page Anchor Navigation**: Page navigation uses internal hash links (`#about`, `#experience`, `#projects`, `#contact`) without dynamic history routing or multi-page management.

---

## 📁 Directory Structure

```text
portfolio/
├── public/
│   ├── favicon.svg                   # Browser favicon (placeholder)
│   ├── Kuldeep patidar resume.pdf    # Downloadable resume document
│   ├── Screenshot (258).png          # Hero & About overview screenshot
│   └── Screenshot (259).png          # Selected Projects & Experience screenshot
├── src/
│   ├── components/
│   │   ├── Experience.jsx            # Experience section wrapper
│   │   ├── ExperienceCard.jsx        # Individual work experience item card
│   │   ├── Footer.jsx                # Contact section & social profile links
│   │   ├── Hero.jsx                  # Hero bio statement & CTA buttons
│   │   ├── Navbar.jsx                # Brand title & section anchor links
│   │   ├── Projects.jsx              # Projects showcase grid wrapper
│   │   └── ProjectsCard.jsx          # Individual project showcase card
│   ├── data/
│   │   └── portfolioData.js          # Structured data for projects & history
│   ├── App.jsx                       # Root layout assembly
│   ├── index.css                     # Tailwind CSS v4 entry point
│   └── main.jsx                      # React 19 application mounting point
├── .gitignore                        # Git exclusion rules
├── eslint.config.js                  # ESLint configuration
├── index.html                        # HTML root template
├── package.json                      # Project dependencies and script runner
└── vite.config.js                    # Vite configuration with Tailwind plugin
```

---

## 📄 License & Author

- **Author**: [Kuldeep Patidar](https://github.com/kuldeeppatidar205)
- **LinkedIn**: [Kuldeep Patidar](https://www.linkedin.com/in/kuldeep-patidar-4ab9a2367)
- **License**: Distributed under the [MIT License](https://opensource.org/licenses/MIT). Free to use and customize for personal portfolios.
