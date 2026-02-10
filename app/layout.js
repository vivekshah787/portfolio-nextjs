import { Inter, Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {  
  title: 'Vivek Shah - UI/UX Designer Portfolio',
  description: 'Senior UI/UX Designer with over 8 years of experience in crafting intuitive, user-centric designs.',
  keywords: ['UI/UX Designer', 'Web Designer', 'Frontend Developer', 'Portfolio', 'Vivek Shah'],
  authors: [{ name: 'Vivek Shah' }],
  creator: 'Vivek Shah',
  openGraph: {
    title: 'Vivek Shah - UI/UX Designer Portfolio',
    description: 'Senior UI/UX Designer with over 8 years of experience',
    url: 'https://vivekshah.online',
    siteName: 'Vivek Shah Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Shah - UI/UX Designer Portfolio',
    description: 'Senior UI/UX Designer with over 8 years of experience',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
  icon: [
    { url: '/images/favicon.ico' },
    { url: '/images/favicon-16x16.png', sizes: '16x16' },
    { url: '/images/favicon-32x32.png', sizes: '32x32' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180' },
  ],
  // ... Android icons
},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
