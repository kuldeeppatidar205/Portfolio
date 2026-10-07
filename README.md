# 🚀 Kuldeep Patidar — Personal Portfolio

A minimal, fast, and modern developer portfolio built with **React** and **Tailwind CSS**. Designed with modular components, a clean typography hierarchy, and a responsive layout to showcase projects, experience, and contact links.

---

## ✨ Features

- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile displays.
- **🧩 Component-Driven Architecture**: Modular directory structure (`Navbar`, `Hero`, `Experience`, `Projects`, `Footer`).
- **💼 Data-Driven Layout**: Separated data arrays (`portfolioData.js`) for seamless updates to projects and work history.
- **📋 Interactive One-Click Clipboard**: Instant email address copy-to-clipboard with fallback support for email clients.
- **🎨 Tailwind Styling**: Utility-first CSS using slate color palettes and typography tokens.

---

## 🛠️ Tech Stack

- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Icons / Assets**: Lucide React
- **Deployment**: Vercel

---

## 📁 Directory Structure

```text
src/
├── data/
│   └── portfolioData.js     # Data source for projects & experience
├── components/
│   ├── Navbar.jsx           # Top navigation bar & dark mode toggle
│   ├── Hero.jsx             # Hero section with bio & resume CTA
│   ├── Experience.jsx       # Work history wrapper
│   ├── ExperienceCard.jsx   # Individual job card component
│   ├── Projects.jsx         # Portfolio projects wrapper
│   ├── ProjectCard.jsx      # Individual project card component
│   └── Footer.jsx           # Interactive contact & social links
├── App.jsx                  # Main root application assembly
├── main.jsx                 # React entry point
└── index.css                # Global styles & Tailwind imports

