"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"

interface DesktopSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function DesktopSidebar({ isOpen, onClose }: DesktopSidebarProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        const toggle = (event.target as HTMLElement).closest(".menu-toggle")
        if (!toggle && isOpen) onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  return (
    <>
      <div className={`ds-overlay ${isOpen ? "show" : ""}`} aria-hidden={!isOpen} />
      <aside ref={panelRef} className={`ds-panel ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <button className="ds-close" onClick={onClose} aria-label="Cerrar menú">
          <X size={28} strokeWidth={3} />
        </button>
        <nav className="ds-nav">
          <ul>
            <li>
              <Link href="/" onClick={onClose}>Inicio</Link>
            </li>
            <li>
              <a href="http://www.sotcarga.com/remesasymensajes/">Cliente Corporativo</a>
            </li>
            <li>
              <Link href="/contactos" onClick={onClose}>Contáctanos</Link>
            </li>
            <li>
              <Link href="/servicios" onClick={onClose}>Servicios</Link>
            </li>
            <li>
              <Link href="/garantias" onClick={onClose}>Garantías del Servicio</Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={onClose}>Nosotros</Link>
            </li>
            <li>
              <Link href="/empresas" onClick={onClose}>¿Quieres enviar con nosotros?</Link>
            </li>
            <li>
              <Link href="/terminos-condiciones" onClick={onClose}>Términos y Condiciones</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <style jsx>{`
        /* Ocultar en móviles/tablets, mostrar en escritorio */
        .ds-overlay, .ds-panel { display: none; }
        @media (min-width: 1024px) {
          .ds-overlay { 
            display: ${isOpen ? "block" : "none"};
            position: fixed; inset: 0; background: rgba(0,0,0,0.4); 
            transition: opacity 0.25s ease; z-index: 50; 
            opacity: ${isOpen ? 1 : 0};
          }
          .ds-panel { 
            display: block; position: fixed; top: 0; right: 0; height: 100vh; width: 360px; 
            background: #0f172a; color: #fff; z-index: 60; 
            transform: translateX(100%); transition: transform 0.3s ease;
            box-shadow: -8px 0 24px rgba(0,0,0,0.35);
          }
          .ds-panel.open { transform: translateX(0); }
          .ds-close { 
            position: absolute; top: 14px; right: 14px; 
            background: transparent; border: 0; color: #fff; cursor: pointer;
          }
          .ds-nav { padding: 64px 24px 24px; }
          .ds-nav ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
          .ds-nav a { 
            color: #e2e8f0; text-decoration: none; font-weight: 600; 
            display: block; padding: 12px 14px; border-radius: 10px;
            background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
            transition: all 0.2s ease;
          }
          .ds-nav a:hover { background: rgba(255,255,255,0.12); color: #fff; transform: translateX(-2px); }
        }
      `}</style>
    </>
  )
}
