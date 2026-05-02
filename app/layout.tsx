import type { Metadata } from 'next'
import { Noto_Serif, Manrope } from 'next/font/google'
import './globals.css'

// Font Configuration
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'Kabul Star Continental Wedding Hall',
    template: '%s | Kabul Star Continental',
  },
  description: 'Experience the grandeur of Afghan hospitality at Kabul Star Continental Wedding Hall — where every celebration becomes an unforgettable legacy.',
  keywords: [
    'wedding venue',
    'kabul',
    'afghanistan',
    'luxury wedding',
    'event hall',
    'crystal ballroom',
    'wedding planner',
    'premium venue',
  ],
  authors: [{ name: 'Kabul Star Continental' }],
  creator: 'Kabul Star Continental',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kabulstar.com',
    siteName: 'Kabul Star Continental',
    title: 'Kabul Star Continental Wedding Hall',
    description: 'Where Tradition Meets Elegance',
    images: [
      {
        url: '/images/hero-royal-hall.jpg',
        width: 1200,
        height: 800,
        alt: 'Royal Wedding Hall - Kabul Star Continental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kabul Star Continental Wedding Hall',
    description: 'Where Tradition Meets Elegance',
    images: ['/images/hero-royal-hall.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here
    // google: 'your-verification-code',
  },
}

// Viewport for mobile optimization
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0c1324',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${notoSerif.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
