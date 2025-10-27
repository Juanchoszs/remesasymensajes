import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SuperTransporteIcon from "@/components/super-transporte-icon"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Remesas y Mensajes LTDA.",
  description: "Remesas y Mensajes - Servicios de logística y transporte",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        <link rel="preload" as="video" href="/video-empresa-logistica-1.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/video-empresa-logistica-2.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/video-empresa-logistica-3.mp4" type="video/mp4" />
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
