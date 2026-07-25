import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import JsonLd from "@/components/json-ld"
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmadpiracha.vercel.app'),
  title: 'Ahmad Piracha - Frontend & Product Engineer',
  description:
    'Frontend/Product Engineer building SaaS tools, developer utilities, Chrome extensions, and polished web apps with React, Next.js, and TypeScript.',
  openGraph: {
    title: 'Ahmad Piracha - Frontend & Product Engineer',
    description:
      'I build polished SaaS tools, developer utilities, and launch-ready web apps using React, Next.js, TypeScript, and modern UI systems.',
    url: 'https://ahmadpiracha.vercel.app',
    siteName: 'Ahmad Piracha',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ahmad Piracha Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Piracha - Frontend & Product Engineer',
    description:
      'Frontend/Product Engineer building SaaS tools, developer utilities, and polished web apps.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/images/logo.svg',
  },
  alternates: {
    canonical: "https://ahmadpiracha.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>
        <JsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
