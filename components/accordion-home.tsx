"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"

interface AccordionSection {
  id: string
  title: string
  videoSrc: string
  options: { label: string; href: string; external?: boolean }[]
  isFinal?: boolean
}

const sections: AccordionSection[] = [
  {
    id: "acordeon-inicio",
    title: "Servicios",
    videoSrc: "/video-empresa-logistica-1.jpg", // VIDEO: static/img/fondos/video2.mp4
    options: [
      { label: "Contáctanos", href: "/contactos" },
      { label: "Servicios", href: "/servicios" },
      { label: "Garantías de Servicios", href: "/garantias" },
    ],
  },
  {
    id: "acordeon-medio",
    title: "Empresas",
    videoSrc: "/video-empresa-logistica-2.jpg", // VIDEO: static/img/fondos/video1.mp4
    options: [
      { label: "Cliente Corporativo", href: "http://www.sotcarga.com/remesasymensajes/", external: true },
      { label: "¿Quieres Enviar con Nosotros?", href: "/empresas" },
    ],
  },
  {
    id: "acordeon-final",
    title: "Saber Más...",
    videoSrc: "/video-empresa-logistica-3.jpg", // VIDEO: static/img/fondos/video3.mp4
    options: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Términos y Condiciones", href: "/terminos-condiciones" },
    ],
    isFinal: true,
  },
]

export default function AccordionHome() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 620)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseEnter = (id: string) => {
    if (!isMobile) {
      setActiveAccordion(id)
      const video = videoRefs.current[id]
      if (video) {
        video.play().catch((error) => console.error("Error al intentar reproducir el video:", error))
      }
    }
  }

  const handleMouseLeave = (id: string) => {
    if (!isMobile) {
      const video = videoRefs.current[id]
      if (video) {
        video.pause()
        video.currentTime = 0
      }
      setActiveAccordion(null)
    }
  }

  const toggleAccordion = (id: string) => {
    if (isMobile) {
      setActiveAccordion(activeAccordion === id ? null : id)
    }
  }

  return (
    <div className="acordeon-container mostrar" id="acordeon-1">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`acordeon ${isMobile && activeAccordion === section.id ? "mobile-expanded" : ""}`}
          id={section.id}
          onMouseEnter={() => handleMouseEnter(section.id)}
          onMouseLeave={() => handleMouseLeave(section.id)}
          onClick={() => isMobile && toggleAccordion(section.id)}
        >
          <video
            ref={(el) => {
              videoRefs.current[section.id] = el
            }}
            src={section.videoSrc}
            className="video-fondo"
            muted
            loop
            preload="auto"
            aria-label="Video de la empresa"
          />
          <div className={section.isFinal ? "caja-acordeon-final" : "caja-acordeon"}>
            <div className="acordeon-caja">
              <button
                className="titulo-caja"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAccordion(section.id)
                }}
              >
                {section.title}
                {isMobile && <span className="mobile-indicator">{activeAccordion === section.id ? "−" : "+"}</span>}
              </button>
              <div className={`opciones ${isMobile && activeAccordion !== section.id ? "mobile-hidden" : ""}`}>
                {section.options.map((option, index) => (
                  <div key={index}>
                    {option.external ? (
                      <a href={option.href} className="opcion">
                        {option.label} <span>›</span>
                      </a>
                    ) : (
                      <Link href={option.href} className="opcion">
                        {option.label} <span>›</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
