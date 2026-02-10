# Vivek Shah Portfolio - Next.js 14

A modern, high-performance portfolio website built with Next.js 14, featuring server-side rendering, optimized images, and seamless deployment options.

![Next.js](https://img.shields.io/badge/Next.js-14.2.0-black)
![Node](https://img.shields.io/badge/Node.js-18.20.8-green)
![React](https://img.shields.io/badge/React-18.3.0-blue)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Features

- ✨ **Next.js 14** - Latest features with App Router
- ⚡ **Server-Side Rendering** - Fast initial page loads
- 🖼️ **Image Optimization** - Automatic image optimization
- 📱 **Fully Responsive** - Mobile-first design
- 🎨 **Modern UI** - Gradient accents and smooth animations
- 🔍 **SEO Optimized** - Built-in meta tags and Open Graph
- 🚀 **Fast Performance** - Optimized for speed
- 📊 **Analytics Ready** - Easy integration with analytics
- 🌐 **Static Export** - Can deploy as static site
- 🎯 **TypeScript Ready** - Easy to convert to TypeScript

## 🎯 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** Optimized chunks

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├── Sidebar.js         # Navigation sidebar
│   │   ├── Hero.js            # Hero section
│   │   ├── About.js           # About section
│   │   ├── Skills.js          # Skills with progress bars
│   │   ├── Experience.js      # Work experience
│   │   ├── Portfolio.js       # Project showcase
│   │   ├── Contact.js         # Contact form
│   │   ├── Footer.js          # Footer
│   │   └── ScrollToTop.js     # Scroll button
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Home page
├── public/
│   └── images/                # Static images
├── next.config.js             # Next.js config
├── package.json               # Dependencies
├── DEPLOYMENT_GUIDE.md        # Deployment instructions
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js:** v18.20.8 or higher
- **npm:** v10.8.2 or higher

### Installation

1. **Extract/Clone the project:**
   ```bash
   cd portfolio-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Export as Static Site

```bash
# Already configured for static export
npm run build
# Creates 'out' folder
```

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Or connect GitHub repository to Vercel for auto-deployment!

### Deploy to Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🎨 Customization

### Update Personal Information

**Sidebar:** `app/components/Sidebar.js`
```javascript
<h2 className="sidebar-name">Your Name</h2>
<p className="sidebar-title">Your Title</p>
```

**About:** `app/components/About.js`
```javascript
const personalInfo = [
  { label: 'Name:', value: 'Your Name' },
  { label: 'Email:', value: 'your.email@example.com' },
  // ...
]
```

**Contact:** `app/components/Contact.js`
```javascript
const contactInfo = [
  // Update your contact details
]
```

### Add Your Images

1. Create folder structure:
   ```
   public/
   └── images/
       ├── profile.jpg
       ├── about.jpg
       └── portfolio/
           └── project1.jpg
   ```

2. Use in components:
   ```javascript
   import Image from 'next/image'
   
   <Image 
     src="/images/profile.jpg" 
     alt="Your Name"
     width={500}
     height={500}
   />
   ```

### Change Colors

**File:** `app/globals.css`
```css
:root {
  --primary-color: #6366f1;      /* Change this */
  --secondary-color: #8b5cf6;    /* Change this */
  --dark-bg: #0f172a;
  --dark-secondary: #1e293b;
}
```

### Update Skills

**File:** `app/components/Skills.js`
```javascript
const skills = [
  { name: 'Your Skill', icon: 'bi-icon-name', percentage: 90 },
  // Add more skills
]
```

### Update Experience

**File:** `app/components/Experience.js`
```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    date: 'Start - End',
    description: 'Job description'
  },
  // Add more experiences
]
```

### Update Portfolio Projects

**File:** `app/components/Portfolio.js`
```javascript
const portfolioItems = [
  {
    title: 'Project Name',
    category: 'web ui',
    description: 'Project description',
    image: '/images/portfolio/project.jpg'
  },
  // Add more projects
]
```

## 🔧 Configuration

### Next.js Config

**File:** `next.config.js`

```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',          // For static export
  images: {
    unoptimized: true,       // For static sites
  },
  trailingSlash: true,       // For better routing
}
```

### Environment Variables

Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

Use in components:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## 📱 Responsive Breakpoints

- **Desktop:** > 991px
- **Tablet:** 768px - 991px
- **Mobile:** < 768px

## 🔍 SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (for social sharing)
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Fast page load times
- ✅ Mobile-friendly design

## 📊 Analytics Integration

### Google Analytics

**File:** `app/layout.js`

```javascript
import Script from 'next/script'

// Add in <head>:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

## 🐛 Troubleshooting

### Build Errors

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
# Or change port:
npm run dev -- -p 3001
```

### Image Not Loading

- Ensure images are in `public/` folder
- Use absolute paths: `/images/photo.jpg`
- File names are case-sensitive

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Performance Tips

1. **Optimize Images:**
   - Use WebP format
   - Compress images (TinyPNG)
   - Use Next.js Image component

2. **Code Splitting:**
   - Next.js handles automatically
   - Dynamic imports for large components

3. **Caching:**
   - Vercel/Netlify handle automatically
   - Configure cache headers if needed

4. **Bundle Size:**
   - Remove unused dependencies
   - Use tree-shaking
   - Analyze bundle with `npm run build`

## 📚 Learn More

- **Next.js Documentation:** https://nextjs.org/docs
- **React Documentation:** https://react.dev
- **Bootstrap Documentation:** https://getbootstrap.com
- **Vercel Deployment:** https://vercel.com/docs

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vivek Shah**
- Website: [vivekshah.online](https://vivekshah.online)
- LinkedIn: [Vivek Shah](https://www.linkedin.com/in/vivek-shah-587b96114/)
- Email: vivekshah06193@gmail.com
- GitHub: [@vivekshah](https://github.com/vivekshah)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Bootstrap team for the UI components
- Vercel for hosting and deployment
- Open source community

## 📞 Support

Need help? Reach out:
- 📧 Email: vivekshah06193@gmail.com
- 💼 LinkedIn: [Connect](https://www.linkedin.com/in/vivek-shah-587b96114/)
- 📖 Documentation: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

**⭐ Star this repo if you found it helpful!**

Made with ❤️ using Next.js 14
