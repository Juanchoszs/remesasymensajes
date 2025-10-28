import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SuperTransporteIcon from "@/components/super-transporte-icon"
import { Toaster } from "sonner"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.remesasymensajes.com'),
  title: {
    default: 'Remesas y Mensajes LTDA. | Servicios de Logística y Transporte',
    template: '%s | Remesas y Mensajes LTDA.'
  },
  description: 'Ofrecemos servicios de mensajería, logística y transporte seguro de documentos y mercancías a nivel nacional e internacional.',
  keywords: ['mensajería', 'logística', 'transporte', 'envíos nacionales', 'envíos internacionales', 'paquetería', 'carga'],
  authors: [{ name: 'Remesas y Mensajes LTDA.' }],
  creator: 'Remesas y Mensajes LTDA.',
  publisher: 'Remesas y Mensajes LTDA.',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
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
  openGraph: {
    title: 'Remesas y Mensajes LTDA. | Servicios de Logística y Transporte',
    description: 'Servicios confiables de mensajería, logística y transporte a nivel nacional e internacional.',
    url: 'https://www.remesasymensajes.com',
    siteName: 'Remesas y Mensajes LTDA.',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: 'https://www.remesasymensajes.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Remesas y Mensajes LTDA.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remesas y Mensajes LTDA.',
    description: 'Servicios confiables de mensajería, logística y transporte.',
    images: ['https://www.remesasymensajes.com/og-image.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
    other: {
      me: ['info@remesasymensajes.com', 'https://www.linkedin.com/company/remesas-y-mensajes'],
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.remesasymensajes.com',
    languages: {
      'es-CO': 'https://www.remesasymensajes.com',
    },
  },
  category: 'logistics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" as="video" href="/video-empresa-logistica-1.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/video-empresa-logistica-2.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/video-empresa-logistica-3.mp4" type="video/mp4" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Favicon and App Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Remesas y Mensajes LTDA.",
            "url": "https://www.remesasymensajes.com",
            "logo": "https://www.remesasymensajes.com/logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+57-1234567890",
              "contactType": "customer service",
              "availableLanguage": ["Spanish", "English"]
            }],
            "sameAs": [
              "https://www.facebook.com/remesasymensajes",
              "https://www.instagram.com/remesasymensajes",
              "https://www.linkedin.com/company/remesas-y-mensajes"
            ]
          })}
        </script>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_TRACKING_ID');
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <div className="footer-wrapper w-full mt-auto">
          <SuperTransporteIcon />
          <Footer />
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
