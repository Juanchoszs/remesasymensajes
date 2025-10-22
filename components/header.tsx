"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "./logo"
import MobileMenu from "./mobile-menu"
import DesktopSidebar from "./desktop-sidebar"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <div className="main-header">
        <Logo />
        <div className="menu-container">
          <div className="menú-1-contain">
            <ul className="menú-1">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <a href="http://www.sotcarga.com/remesasymensajes/" id="menú-icon-1">
                  Clientes
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="menu-toggle"
                  aria-label="Abrir menú"
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu desktop-sidebar"
                  onClick={toggleMenu}
                  style={{ background: "transparent", border: 0, cursor: "pointer" }}
                >
                  ☰
                </button>
              </li>
            </ul>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/contactos">Contactos</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <button
                  type="button"
                  className="menu-toggle"
                  aria-label="Abrir menú"
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu desktop-sidebar"
                  onClick={toggleMenu}
                  style={{ background: "transparent", border: 0, cursor: "pointer" }}
                >
                  ☰
                </button>
              </li>
            </ul>
          </nav>
          <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
          <DesktopSidebar isOpen={menuOpen} onClose={closeMenu} />
        </div>
      </div>
    </header>
  )
}