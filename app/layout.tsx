import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ujjval | Portfolio',
  description: 'Portfolio created by Ujjval Priyadarshi',
  icons: '/logo/white.png',
  openGraph: {
    type: 'website',
    siteName: 'Personal Portfolio',
    title: 'Portfolio',
    url: 'https://res.cloudinary.com/doql129vl/image/upload/v1694429574/kasol_obdhff.jpg',
    description: 'Personalised Portfolio created by Developer Ujjval Priyadarshi',
  },
  alternates: {
    canonical: 'https://ujjval.snapbit.in'
  },
  twitter: {
    creator: '@UjjvalP06',
    images: 'https://res.cloudinary.com/doql129vl/image/upload/v1694429574/kasol_obdhff.jpg',
    site: '@site',
    title: 'Ujjval | Portfolio',
    description: 'Personalised Portfolio created by Developer Ujjval Priyadarshi',
    card: 'summary_large_image',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
