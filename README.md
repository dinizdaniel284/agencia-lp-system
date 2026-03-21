# 🚀 Agencia IA Diniz — High-Conversion AI Lead System

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase">
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel" alt="Vercel">
</p>

<p align="center">
  <b>The ultimate "Machine of Conversion" for modern businesses.</b><br />
  Designed to bridge the gap between traffic and sales by eliminating lead drop-off.
</p>

---

## ⚡ The Quick Look
- **Live Demo:** [agencia-lp-system.vercel.app](https://agencia-lp-system.vercel.app/)
- **Developer:** Daniel Diniz (Diniz City Solutions)
- **Status:** Production Ready / MVP v2

---

## 🚨 The Silent Killer of Marketing ROI
Most businesses spend thousands on ads, only to send traffic to basic WhatsApp links. 
**The problem?** 60% of users drop off before sending the message. 
**The result?** Lost data, wasted money, and zero tracking.

## 💡 The "Diniz City" Engineering Solution
Our system acts as a **Smart Middleware**. It captures, validates, and stores lead data in a millisecond *before* triggering the WhatsApp intent. 

> **Zero Leakage Architecture:** Even if the user doesn't finish the WhatsApp message, you already own the data (Name + Phone).

---

## ✨ Premium Features

### 💎 High-End UI/UX
- **Glassmorphism Design:** Subtle blurs and borders for a premium software feel.
- **Micro-interactions:** Powered by `tailwindcss-animate` for smooth entry transitions.
- **Conversion-Focused Copy:** Engineered headlines to trigger psychological triggers of scarcity and gain.

### ⚙️ Technical Excellence
- **Next.js 15 (App Router):** Leveraging the latest React features for SEO and Speed.
- **Dynamic Config (SaaS Ready):** All content is driven by a single `config/site.ts` file. Deploying for a new client takes less than 3 minutes.
- **Performance Optimized:** Near-perfect Lighthouse scores. Speed = Conversion.

### 🌐 Scalability & Web3 Ready
- Designed to integrate with **n8n** for advanced AI workflows.
- Modular architecture prepared for **Web3/Blockchain** data authentication.

---

## 🧠 Logical Architecture



1. **Traffic Ingress:** Visitor lands on the optimized LP.
2. **Data Interception:** Lead fills the simulation/capture form.
3. **Async Persistence:** Data is sent to the Cloud (Supabase/PostgreSQL).
4. **Smart Redirect:** User is sent to WhatsApp with a pre-filled message.
5. **Business Intelligence:** The owner receives the contact AND has a backup in the DB.

---

## 🛠 Tech Stack & Tools

| Layer | Technology | Why? |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15** | Best-in-class performance and SSR. |
| **Styling** | **Tailwind CSS v4** | Rapid UI development with modern CSS features. |
| **Database** | **Supabase** | Real-time PostgreSQL for instant lead storage. |
| **Animations** | **Lucide + Tailwind Animate** | For that "Apple-like" smooth interface. |
| **Deployment** | **Vercel** | Global Edge Network for 100ms load times. |

---

## 🚀 Deployment & Setup

```bash
# Clone the repository
git clone [https://github.com/dinizdaniel284/agencia-lp-system.git](https://github.com/dinizdaniel284/agencia-lp-system.git)

# Install with high-speed (pnpm or npm)
npm install

# Set up your environment (Environment Variables)
cp .env.example .env.local

# Run development server
npm run dev