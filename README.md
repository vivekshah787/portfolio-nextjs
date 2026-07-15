# vmshah-portfolio — Next.js 14

A full Next.js 14 (App Router) portfolio site for Vivek Shah with a **dynamic contact form** that delivers enquiries directly to **vivekshah061993@gmail.com**.

---

## 🚀 Quick Start

### Requirements
- **Node.js ≥ 18.20.8** (tested on 18.x and 22.x)
- npm ≥ 9

### 1. Install dependencies
```bash
npm install
```

### 2. Configure email (required for contact form)
```bash
cp .env.local .env.local
```
Open `.env.local` and fill in:
```
SMTP_USER=vivekshah061993@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx     ← 16-char Gmail App Password
CONTACT_TO=vivekshah061993@gmail.com
```

#### Getting a Gmail App Password
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Search "App passwords" → select **Mail** + **Other** → Generate
4. Copy the 16-character code into `SMTP_PASS`

### 3. Run locally
```bash
npm run dev
```
Visit → [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
vmshah-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + theme init
│   │   ├── page.tsx            # Main page (all sections)
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # POST /api/contact → sends email
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Portfolio.tsx       # New row-list design + hover preview
│   │   ├── Contact.tsx         # Dynamic form → API
│   │   ├── Footer.tsx
│   │   ├── CustomCursor.tsx
│   │   └── ScrollReveal.tsx
│   └── styles/
│       └── globals.css         # All design tokens + component styles
├── .env.local
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🔌 Contact Form Flow

```
User fills form → POST /api/contact
  → Validates name, email, message
  → Sends enquiry email to vivekshah061993@gmail.com  (HTML, branded)
  → Sends auto-reply to the sender
  → Returns { success: true }
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy

### Vercel (recommended — free)
```bash
npm i -g vercel
vercel
```
Add env vars in Vercel Dashboard → Settings → Environment Variables.

### Any Node.js host
```bash
npm run build
npm start          # port 3000
```

---

## ✨ Features
- Light / Dark theme (persisted to localStorage)
- Custom animated cursor
- Scroll-reveal animations
- Typing animation in Hero
- Portfolio row-list with floating image preview
- Filter by category
- Fully responsive + mobile drawer menu
- Contact form → Nodemailer → Gmail SMTP
- Auto-reply to enquirer
- Node 18+ compatible
