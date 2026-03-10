# 🚀 Saurabh Dhumane | Senior MERN Stack Developer Portfolio

A highly interactive, premium developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed with a modern "glassmorphism" aesthetic, this single-page application showcases my professional journey, enterprise-grade projects, and technical arsenal.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-Black?style=for-the-badge&logo=framer&logoColor=blue)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 🔗 Live Demo
**[View the Live Portfolio Here](https://saurabhdhumane.com/)**

## ✨ Key Features

* **Dynamic Aurora Background:** Animated, blurred gradient orbs that pulse and shift behind a frosted glass layer.
* **Scroll Progress Indicator:** A custom neon gradient bar that tracks reading progress across the top of the viewport.
* **Asymmetric Experience Timeline:** A premium, dual-column layout for desktop that separates metadata (dates, tech stack) from descriptive bullet points for effortless reading.
* **Categorized Skills Grid:** Technical competencies organized cleanly into Frontend, Backend, and DevOps/Cloud.
* **Interactive Project Cards:** Glassmorphism cards with smooth hover states, revealing GitHub and Live Demo links.
* **Fully SEO Optimized:** Configured with Open Graph tags, Twitter Cards, semantic HTML, and a custom web manifest for mobile viewing.
* **100% Responsive:** Flawlessly adapts from ultra-wide monitors down to mobile devices.

## 🛠️ Tech Stack

* **Framework:** React 18 (via Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** GitHub Pages

## 📂 Project Architecture

The codebase is modularized for enterprise scalability:

```text
src/
├── components/       # Reusable UI building blocks (Navbar, ProjectCard, etc.)
├── data/             # Decoupled resume data (Experiences, Projects, Skills)
├── sections/         # Main page segments (Hero, Skills, Experience)
├── types/            # Global TypeScript interfaces
├── App.tsx           # Master layout assembler
├── index.css         # Tailwind directives and global styles
└── main.tsx          # Application entry point