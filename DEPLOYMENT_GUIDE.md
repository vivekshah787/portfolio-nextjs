# Next.js Portfolio Deployment Guide

## 📋 System Requirements

- **Node.js:** v18.20.8 or higher
- **npm:** v10.8.2 or higher
- **Operating System:** Windows, macOS, or Linux

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Verify Node.js & npm

```bash
# Check versions
node --version
# Should show: v18.20.8 or higher

npm --version
# Should show: 10.8.2 or higher
```

**If versions don't match:**
- Download Node.js v18.20.8 LTS from: https://nodejs.org/
- Or use nvm (Node Version Manager):
  ```bash
  nvm install 18.20.8
  nvm use 18.20.8
  ```

### Step 2: Install Dependencies

```bash
cd portfolio-nextjs
npm install
```

### Step 3: Run Development Server

```bash
npm run dev
```

Opens at: `http://localhost:3000`

### Step 4: Build for Production

```bash
npm run build
```

---

## 🌐 Deployment Options

| Platform | Difficulty | Time | Cost | Best For |
|----------|-----------|------|------|----------|
| **Vercel** | ⭐ Easy | 2 min | Free | Next.js native, auto-deploy |
| **Netlify** | ⭐⭐ Easy | 3 min | Free | Static export |
| **GitHub Pages** | ⭐⭐ Medium | 5 min | Free | Static hosting |
| **AWS Amplify** | ⭐⭐⭐ Medium | 10 min | Free tier | Scalability |
| **Railway** | ⭐⭐ Easy | 5 min | Free tier | Full-stack apps |

---

## 🚢 Method 1: Vercel (RECOMMENDED)

Vercel is made by the Next.js team - easiest deployment!

### Option A: Deploy via GitHub (Best)

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Click "Deploy" (automatic configuration!)
6. ✅ Done! Site is live in 2 minutes

**Your URL:** `https://your-project.vercel.app`

**Benefits:**
- Auto-deploy on every GitHub push
- Free SSL certificate
- Edge network (fast globally)
- Zero configuration needed

---

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd portfolio-nextjs
vercel

# Deploy to production
vercel --prod
```

---

## 🌍 Method 2: Netlify

### Step 1: Build Static Export

Add to `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 2: Build Project
```bash
npm run build
```

This creates an `out` folder.

### Step 3: Deploy to Netlify

**Option A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign up
3. Drag `out` folder to deploy zone
4. ✅ Live!

**Option B: GitHub Integration**
1. Push code to GitHub
2. Connect Netlify to GitHub
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy

**Your URL:** `https://random-name.netlify.app`

---

## 📄 Method 3: GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
```

### Step 3: Update next.config.js

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
}
```

### Step 4: Deploy

```bash
npm run deploy
```

**Your URL:** `https://YOUR_USERNAME.github.io/portfolio`

---

## 🔧 Environment Variables

### Local Development

Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (Vercel)

1. Project Settings → Environment Variables
2. Add variables:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `your_production_api`
3. Save and redeploy

### Production (Netlify)

1. Site Settings → Build & Deploy → Environment
2. Add variables
3. Redeploy

---

## 🌐 Custom Domain Setup

### For Vercel

1. **Buy Domain** (GoDaddy, Namecheap, etc.)

2. **Add Domain in Vercel:**
   - Project Settings → Domains
   - Add your domain: `yourname.com`

3. **Configure DNS:**
   Vercel provides nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
   
   Or use A/CNAME records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait 24-48 hours** for DNS propagation

5. **SSL automatically enabled!**

---

### For Netlify

1. **Add Domain:**
   - Domain Settings → Add custom domain

2. **Configure DNS:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

3. **Enable HTTPS** (automatic after DNS propagation)

---

## ⚡ Performance Optimization

### Image Optimization

```javascript
// For static export (Netlify/GitHub Pages)
// Use unoptimized images in next.config.js
images: {
  unoptimized: true,
}

// For Vercel deployment (automatic optimization)
// Remove unoptimized flag
```

### Bundle Size Analysis

```bash
npm run build
# Check output for bundle sizes
```

### Lighthouse Audit

1. Open site in Chrome
2. F12 → Lighthouse
3. Generate report
4. Aim for 90+ in all categories

---

## 🔄 Continuous Deployment Workflow

### Automatic Deployment

Once connected to GitHub + Vercel/Netlify:

```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push

# Automatically deploys in 1-2 minutes!
```

### Preview Deployments

Every pull request gets a preview URL:
- Test changes before merging
- Share with clients/team
- No impact on production

---

## 📊 Monitoring & Analytics

### Add Google Analytics

**File:** `app/layout.js`

```javascript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Vercel Analytics

Enable in project settings - free built-in analytics!

---

## 🐛 Troubleshooting

### Issue 1: Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Issue 2: Images Not Loading

Make sure images are in `public/` folder:
```
public/
└── images/
    ├── profile.jpg
    └── portfolio/
        └── project1.jpg
```

Use in components:
```javascript
<Image src="/images/profile.jpg" alt="Profile" width={500} height={500} />
```

### Issue 3: 404 on Page Refresh (Static Export)

Add `trailingSlash: true` to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}
```

### Issue 4: Node Version Mismatch

```bash
# Use exact version
nvm install 18.20.8
nvm use 18.20.8

# Verify
node --version  # Should show v18.20.8
```

---

## ✅ Pre-Deployment Checklist

### Content
- [ ] Personal information updated
- [ ] Profile images added
- [ ] Portfolio projects added
- [ ] Contact details correct
- [ ] Social media links working
- [ ] CV/Resume link updated

### Technical
- [ ] `npm run build` succeeds
- [ ] No console errors
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive

### SEO
- [ ] Meta tags updated
- [ ] Page title correct
- [ ] Description added
- [ ] Keywords set
- [ ] Open Graph tags
- [ ] Favicon added

### Performance
- [ ] Lighthouse score 90+
- [ ] Images optimized
- [ ] Bundle size acceptable
- [ ] Load time < 3 seconds

---

## 📝 Available Scripts

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run export    # Export static site (if configured)
```

---

## 🎯 Next Steps After Deployment

1. **Share Your Portfolio:**
   - Add to LinkedIn profile
   - Update resume
   - Share on social media
   - Add to email signature

2. **Set Up Analytics:**
   - Google Analytics
   - Vercel Analytics
   - Monitor traffic

3. **Regular Updates:**
   - Add new projects
   - Update skills
   - Keep content fresh
   - Maintain blog (if added)

4. **SEO Optimization:**
   - Submit sitemap to Google
   - Create robots.txt
   - Optimize meta descriptions
   - Build backlinks

---

## 📞 Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages:** https://pages.github.com
- **Stack Overflow:** https://stackoverflow.com/questions/tagged/next.js

---

## 🎉 Congratulations!

Your Next.js portfolio is ready for the world!

**Key Advantages of Next.js:**
- ⚡ Lightning fast performance
- 🔍 SEO optimized
- 📱 Mobile responsive
- 🚀 Easy deployment
- 🔒 Secure by default
- 📈 Scalable architecture

**Good luck with your portfolio! 🚀**
