"use client"

import Link from "next/link"

export default function Logo() {
  return (
    <div className="logo-container">
      <Link href="/">
        {/* IMAGE: Logo 3D de la empresa - static/img/iconos/logo_3d.png */}
        <img src="/logo-3d-remesas-y-mensajes.jpg" alt="Logo de la empresa" className="logo" />
      </Link>
    </div>
  )
}
