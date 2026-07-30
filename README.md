# 🏢 Amaze PMS — Next.js Property Management Solutions

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-green?style=flat-square&logo=greensock)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-purple?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=flat-square)](https://lenis.darkroom.engineering/)

Welcome to the modernized web platform for **AMAZE Property Management Solutions Pvt. Ltd (Action Group of Companies)**. This enterprise application delivers end-to-end Integrated Property Management Solutions across India, specializing in Facility Management, Housekeeping, MEP Engineering, Physical Security, Pest Control, Parking Logistics, and Swimming Pool Care.

---

## 🌟 Key Highlights & Design System

- **Clean Light Theme Design System**: Built with strict, harmonious HSL/HEX design tokens (`[var(--primary)]`, `[var(--secondary)]`, `[var(--white)]`, `[var(--black)]`).
- **Shadowless & Rounded Aesthetic**: Uses standardized `primary-rounded` border radii with crisp 1px borders for a modern, flat visual structure.
- **Architectural Background Pattern (`PropertyPattern`)**: Reusable blueprint and scaffolding visual pattern integrated seamlessly across all sub-pages.
- **Smooth Momentum Scrolling**: Powered by `@studio-freight/lenis` smooth scroll engine for fluid desktop and mobile interaction.
- **GSAP & ScrollTrigger Animations**: Staggered scroll animations for stats, service grids, recruitment strategy cards, and strength metrics.
- **Interactive UI Components**:
  - **Dynamic Sector Donut Chart**: Client portfolio breakdown with responsive multi-grid column layout.
  - **Workforce & Operations Gallery**: Tabbed filtering and interactive Lightbox modal image viewer.
  - **Interactive Contact & Map Grid**: Side-by-side contact inquiry form and live Google Maps location card.
  - **Search & Navigation Drawer**: Global search bar and animated Framer Motion side navigation drawer.
- **Custom 404 Page**: Modern, brand-aligned `not-found.tsx` with error recovery and quick navigation links.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) 15 (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | Tailwind CSS v4 & Vanilla CSS Variables (`globals.css`) |
| **Animation Engines** | GSAP, GSAP ScrollTrigger, Framer Motion, Lenis Smooth Scroll |
| **Icon System** | [Lucide React](https://lucide.dev/) |
| **Package Manager** | `pnpm` (or `npm` / `yarn`) |

---

## 📁 Repository Folder Structure

```
amazepms.com/
├── app/
│   ├── (home)/                      # Main App Router Group
│   │   ├── about/                   # Corporate Leadership & Legacy Page
│   │   ├── careers/                 # Recruitment & Training Strategy
│   │   ├── contact/                 # Contact Details, Inquiry Form & Google Map
│   │   ├── gallery/                 # Interactive Photo Gallery Grid & Lightbox
│   │   ├── our-clients/             # Esteemed Clientele & Sector Pie Chart
│   │   ├── our-strength/            # 15,000+ Workforce & Infrastructure Stats
│   │   ├── recruitments/            # Talent Strategy & Audits
│   │   ├── services/                # Comprehensive PMS, Security & MEP Services
│   │   ├── page.tsx                 # Enterprise Homepage
│   │   └── layout.tsx               # Base Home Layout (Navigation & Footer)
│   ├── Global/                      # Global Reusable Components
│   │   ├── Footer/                  # Corporate Footer & Contact CTA
│   │   ├── Navigation/              # Top Bar, Logo, Nav Links, Search & Side Drawer
│   │   └── Patterns/                # PropertyPattern (Blueprint & Construction Pattern)
│   ├── wrapper/                     # SmoothScroller (Lenis Scroll Provider)
│   ├── globals.css                  # Design Tokens & Root Custom Variables
│   ├── layout.tsx                   # Root HTML & Body Layout
│   └── not-found.tsx                # Custom 404 Error Page
├── public/                          # Brand Logos, Media Assets & Partner Images
├── package.json                     # Dependencies & Scripts
├── tsconfig.json                    # TypeScript Configuration
└── README.md                        # Documentation & Setup Guide
```

---

## 🚀 Getting Started & Setup Instructions

Follow these step-by-step instructions to clone, install, and run the project locally on your machine.

### 📋 Prerequisites

Ensure you have the following installed on your operating system:
- **Node.js**: `v18.17.0` or higher (Node v20+ recommended)
- **Package Manager**: `pnpm` (v8 or higher) or `npm` / `yarn`

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MISFOfficial/amazepms.com-redesign.git
cd amazepms.com
```

### 2️⃣ Install Dependencies

Using `pnpm` (recommended):
```bash
pnpm install
```

Or using `npm`:
```bash
npm install
```

Or using `yarn`:
```bash
yarn install
```

### 3️⃣ Start Development Server

Run the development server locally:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application live.

---

## 🧪 Build & Verification Commands

To test type-safety and ensure zero build errors before deploying:

### Type Check (TypeScript Verification)
```bash
pnpm exec tsc --noEmit
```

### Production Build
```bash
pnpm run build
```

### Production Preview Server
```bash
pnpm run start
```

---

## 📞 Corporate Contact & Operations

**AMAZE Property Management Solutions Pvt. Ltd**  
*Action Group of Companies*  
- **Headquarters**: 4th Floor, High Mark Chambers, Khajaguda X Road, Cyberabad, Hyderabad - 500008, Telangana, India.
- **24/7 Helpline**: `+91 9100694137`
- **Official Email**: `info@amazepms.com`
- **Website**: [amazepms.com](https://amazepms.com)

---

Developed with ❤️ for **AMAZE PMS Pvt. Ltd**. All Rights Reserved.
