"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        const toggle = (event.target as HTMLElement).closest(".menu-toggle")
        if (!toggle && isOpen) {
          onClose()
        }
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  return (
    <nav ref={menuRef} className={`mobile-menu ${isOpen ? "active" : ""}`} id="mobile-menu">
      <button className="mobile-menu-close" onClick={onClose} aria-label="Cerrar menú">
        <X size={32} strokeWidth={3} />
      </button>

      <ul>
        <li className="submenu" id="submenu1">
          <ul className="submenu-items" id="inicio">
            <li>
              <Link href="/" onClick={onClose}>
                Inicio
              </Link>
            </li>
          </ul>
        </li>
        <li className="submenu" id="submenu2">
          <ul className="submenu-items">
            <li>
              <a href="http://www.sotcarga.com/remesasymensajes/">Cliente Corporativo</a>
            </li>
          </ul>
        </li>
        <li className="submenu" id="submenu4">
          <ul className="submenu-items">
            <li>
              <Link href="/contactos" onClick={onClose}>
                Contáctanos
              </Link>
            </li>
          </ul>
        </li>
        <li className="submenu" id="submenu5">
          <ul className="submenu-items">
            <li>
              <Link href="/servicios" onClick={onClose}>
                Servicios
              </Link>
            </li>
          </ul>
        </li>
        <li className="submenu" id="submenu5">
          <ul className="submenu-items">
            <li>
              <Link href="/garantias" onClick={onClose}>
                Garantías del Servicio
              </Link>
            </li>
          </ul>
        </li>
        <li className="submenu" id="submenu7">
          <ul className="submenu-items">
            <li>
              <Link href="/nosotros" onClick={onClose}>
                Nosotros
              </Link>
            </li>
          </ul>
        </li>
        <li className="submenu" id="submenu6">
          <ul className="submenu-items">
            <li>
              <Link href="/empresas" onClick={onClose}>
                ¿Quieres enviar con nosotros?
              </Link>
            </li>
          </ul>
        </li>
        <li className="submenu" id="submenu8">
          <ul className="submenu-items" id="tyc">
            <li>
              <Link href="/terminos-condiciones" onClick={onClose}>
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
