import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import SuperTransporteIcon from "@/components/super-transporte-icon"

export const metadata: Metadata = {
  title: "Remesas y Mensajes LTDA.",
  description: "Remesas y Mensajes - Servicios de logística y transporte",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow" style={{ marginTop: "40px" }}>
          {children}
        </main>
        <div className="footer-wrapper mt-auto">
          <WhatsAppButton />
          <SuperTransporteIcon />
          <Footer />
        </div>
      </body>
    </html>
  )
}
