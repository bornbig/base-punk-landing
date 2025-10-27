import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'BASEDSTR - NFT Dashboard',
  description: 'Turning Based Punks into a Perpetual Market Machine',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        
        {/* Google Font - Doto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Tailwind CSS CDN */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        
        {children}
      </body>
    </html>
  )
}
