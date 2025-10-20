"use client"

import React, { useState, useEffect } from "react"

type ContentId =
  | "contenido-w4"
  | "contenido-w5"
  | "contenido-w6"
  | "contenido-w7"
  | "contenido-w8"
  | "contenido-w9"

export default function ContactosContent() {
  // 🔹 Estado inicial con Arauca abierto
  const [activeContent, setActiveContent] = useState<ContentId | null>("contenido-w4")

  const showContent = (id: ContentId, event: React.MouseEvent) => {
    event.stopPropagation()
    // Si ya está activo, no hacer nada para mantenerlo abierto
    if (activeContent === id) return
    setActiveContent(id)
  }

  const closeContent = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.classList.contains("caja-w")) {
      setActiveContent(null)
    }
  }

  const contentStyle: React.CSSProperties = {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "1.5rem",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    transform: "scale(0.9)",
    transformOrigin: "top center",
    marginTop: "-2,7rem",
    marginBottom: "-3rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#fff",
    textAlign: "center",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  }

  const textStyle: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "1.4rem",
    textAlign: "center",
    color: "#f0f0f0",
  }

  const mapStyle: React.CSSProperties = {
    display: "block",
    maxWidth: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
  }

  return (
    <div
      className="caja-w"
      onClick={closeContent}
      style={{
        backgroundImage: "url('/creciente.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "3rem 1rem",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* === BOTONES DE UBICACIONES === */}
      <div
        className="opciones-w"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2rem",
          maxWidth: "1200px",
          margin: "0 auto 2rem",
        }}
      >
        {[
          { id: "contenido-w4", label: "Arauca" },
          { id: "contenido-w5", label: "Bogotá" },
          { id: "contenido-w6", label: "Envigado" },
          { id: "contenido-w7", label: "Villavicencio" },
          { id: "contenido-w8", label: "Yopal" },
          { id: "contenido-w9", label: "PQR's" },
        ].map(({ id, label }) => (
          <button
            key={id}
            className={`opcion-w ${activeContent === id ? "activo" : ""}`}
            onClick={(e) => showContent(id as ContentId, e)}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.25rem",
              fontWeight: 600,
              borderRadius: "8px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              background:
                activeContent === id
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(255, 255, 255, 0.1)",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(5px)",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* === CONTENIDOS DE SEDES === */}
      {[
        {
          id: "contenido-w4",
          title: "Arauca",
          address: "Calle 16 # 18-25 barrio Cristo Rey",
          img: "/mapa-ubicacion-arauca-colombia.jpg",
          map:
            "https://www.google.com/maps?q=6.165447565751389,-75.60225784533067",
        },
        {
          id: "contenido-w5",
          title: "Bogotá",
          address:
            "Autopista Medellín Km 3.5 Vía Siberia-Cota Terminal Terrestre de Carga Módulo 7 Bodega 41",
          img: "/mapa-ubicacion-bogota-colombia.jpg",
          map:
            "https://www.google.com/maps?q=7.081877674926206,-70.755682412922",
          phone: "3102680869",
        },
        {
          id: "contenido-w6",
          title: "Envigado",
          address: "Carrera 49 A #48 SUR-60 Interior 104 Bodegas Univegas",
          img: "/mapa-ubicacion-envigado-colombia.jpg",
          map:
            "https://www.google.com/maps?q=6.165447565751389,-75.60225784533067",
        },
        {
          id: "contenido-w7",
          title: "Villavicencio",
          address: "Parque Comercial La Primavera, Carrera 22 #5B-114 Local A6",
          img: "/mapa-ubicacion-villavicencio-colombia.jpg",
          map:
            "https://www.google.com/maps?q=4.128337117890325,-73.62149655153866",
        },
        {
          id: "contenido-w8",
          title: "Yopal",
          address: "Carrera 5 #34-34 Local 2 Zona Industrial Bodegas de Serpet",
          img: "/mapa-ubicacion-yopal-colombia.jpg",
          map:
            "https://www.google.com/maps?q=5.319710532574351,-72.40521511940669",
        },
      ].map(
        ({ id, title, address, img, map, phone }) =>
          activeContent === id && (
            <div key={id} className="contenido-w" style={contentStyle}>
              <h2 style={titleStyle}>{title}</h2>
              <p style={textStyle}>{address}</p>
              {phone && (
                <p style={{ ...textStyle, fontWeight: 600 }}>
                  Celular: {phone}
                </p>
              )}
              <a
                href={map}
                style={mapStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={img}
                  alt={`Mapa de sede en ${title}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </a>
            </div>
          )
      )}

      {/* === FORMULARIO PQR's === */}
      {activeContent === "contenido-w9" && (
        <div
          className="contenido-w"
          style={{
            ...contentStyle,
            maxWidth: "850px",
            padding: "2rem",
          }}
        >
          <h2 style={{ ...titleStyle, fontSize: "2.3rem" }}>PQR's</h2>
          <form
            className="form-contacto"
            action="https://formsubmit.co/yorland1998@gmail.com"
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              fontSize: "1.1rem",
            }}
          >
            <label htmlFor="name" style={{ color: "#fff", fontWeight: 500 }}>
              Nombre:
            </label>
            <input
              type="text"
              name="Nombre"
              id="name"
              placeholder="Nombre completo"
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
              }}
            />

            <label htmlFor="email" style={{ color: "#fff", fontWeight: 500 }}>
              Correo Electrónico:
            </label>
            <input
              type="email"
              name="Correo Electrónico"
              id="email"
              placeholder="Correo Electrónico"
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
              }}
            />

            <label htmlFor="subject" style={{ color: "#fff", fontWeight: 500 }}>
              Asunto:
            </label>
            <input
              type="text"
              name="Asunto"
              id="subject"
              placeholder="(Petición, queja o reclamo)"
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
              }}
            />

            <label htmlFor="coments" style={{ color: "#fff", fontWeight: 500 }}>
              PQR:
            </label>
            <textarea
              name="PQR's"
              id="coments"
              cols={30}
              rows={8} // 🔹 más grande
              placeholder="Escribe tu Petición, queja o reclamo"
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
                resize: "none",
              }}
            ></textarea>

            <input
              className="btn"
              type="submit"
              value="ENVIAR"
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "none",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"
                e.currentTarget.style.opacity = "0.9"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.opacity = "1"
              }}
            />

            <input
              type="hidden"
              name="_next"
              value="https://yorland98.github.io/Remesas_Mensajes/"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      )}
    </div>
  )
}
