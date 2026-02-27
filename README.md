# 📂 Mirya -- Next.js 16 Multilingual Platform

Mirya is a modern, scalable, and multilingual web platform built with
Next.js 16 (App Router), React 19, TypeScript, TailwindCSS v4, and
i18next.

------------------------------------------------------------------------

## 🚀 Tech Stack

### Core Framework

-   Next.js 16
-   React 19
-   TypeScript 5

### UI & Styling

-   Tailwind CSS v4
-   PostCSS
-   Autoprefixer
-   MUI (Material UI v7)
-   MUI X Date Pickers
-   Emotion (React + Styled)
-   Headless UI
-   Heroicons
-   Lucide React

### Animations

-   Framer Motion
-   Motion
-   GSAP

### Internationalization

-   i18next
-   react-i18next
-   i18next-browser-languagedetector

Supported Languages: - English - German - Turkish

### API & Utilities

-   Axios
-   @google/generative-ai
-   js-cookie
-   dayjs
-   react-hot-toast

### Development & Linting

-   ESLint 9
-   eslint-config-next
-   TypeScript
-   TailwindCSS PostCSS Plugin

------------------------------------------------------------------------

## 📦 Installation

### 1. Clone the Repository

git clone `<your-repository-url>`{=html} cd mirya

### 2. Install Dependencies

npm install \# or yarn install \# or pnpm install

------------------------------------------------------------------------

## 🏃 Running the Project

### Development Mode

npm run dev

Open http://localhost:3000 in your browser.

### Production Build

npm run build npm start

------------------------------------------------------------------------

## 📁 Project Structure

Mirya │ ├── app/ \# App Router main directory │ ├── (pages)/ \#
Route-based pages │ ├── Layout/ \# Header, Footer, CTA │ ├── api/ \# API
route handlers │ ├── components/ \# Reusable UI components │ ├── hooks/
\# Custom hooks │ ├── i18n/ \# i18n configuration │ ├── data/ \# Static
data files │ ├── ui/ \# Shared UI components │ ├── layout.tsx \# Root
layout │ └── page.tsx \# Entry page │ ├── lib/ \# Utility libraries ├──
messages/ \# Locale message files ├── public/ \# Static assets ├──
next.config.ts \# Next.js configuration ├── tsconfig.json \# TypeScript
configuration └── package.json

------------------------------------------------------------------------

## 🌍 Internationalization

Mirya uses i18next with: - Namespace-based translation files -
Page-specific translation folders - Global locale messages - Browser
language detection

Language switch handled via LanguageSwitcher component.

------------------------------------------------------------------------

## 📜 Available Scripts

"dev": "next dev" "build": "next build" "start": "next start" "lint":
"eslint"

------------------------------------------------------------------------

## 🚀 Deployment

Recommended: - Vercel - Any Node.js hosting

Build command: npm run build

Start command: npm start

------------------------------------------------------------------------

## 👨‍💻 Author

Built with scalable architecture using Next.js 16 and TypeScript.
