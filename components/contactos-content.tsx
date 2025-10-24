"use client"

import React, { useState, useEffect } from "react"
import { toast } from "sonner"

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
  
  // Estados para el formulario PQRS
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitPQRS = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    const loadingToast = toast.loading("Enviando tu PQRS...")
    
    try {
      const response = await fetch("/api/send-pqrs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success("¡PQRS enviada exitosamente!", {
          description: "Te responderemos en un plazo máximo de 15 días hábiles.",
          duration: 5000,
          id: loadingToast,
        })
        
        // Limpiar el formulario
        setFormData({
          nombre: "",
          correo: "",
          asunto: "",
          mensaje: ""
        })
      } else {
        toast.error("Error al enviar la PQRS", {
          description: result.error || "Por favor intenta nuevamente.",
          duration: 5000,
          id: loadingToast,
        })
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error de conexión", {
        description: "No se pudo conectar con el servidor. Verifica tu conexión a internet.",
        duration: 5000,
        id: loadingToast,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contentStyle: React.CSSProperties = {
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
    padding: "2rem",
    background: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.65))",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 12px 35px rgba(0,0,0,0.5)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxSizing: "border-box",
    height: "auto",
    maxHeight: "none",
    overflow: "visible"
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 800,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "0.5px"
  }

  const textStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#f8f9fa"
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
        padding: "3rem 1rem",
        minHeight: "100vh",
        color: "#fff",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        maxHeight: "none",
        height: "auto",
        overflow: "visible"
      }}
    >
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        height: "auto",
        overflow: "visible"
      }}>
      {/* === BOTONES DE UBICACIONES === */}
      <div
        className="opciones-w"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1.5rem"
        }}
      >
        {[
          { id: "contenido-w4", label: "Arauca" },
          { id: "contenido-w5", label: "Bogotá" },
          { id: "contenido-w6", label: "Envigado" },
          { id: "contenido-w7", label: "Villavicencio" },
          { id: "contenido-w8", label: "Yopal" },
          { id: "contenido-w9", label: "PQR's" },
        ].map(({ id, label }) => {
          const isActive = activeContent === id;
          return (
            <button
              key={id}
              className={`opcion-w ${isActive ? "activo" : ""}`}
              onClick={(e) => showContent(id as ContentId, e)}
              aria-pressed={isActive}
              style={{
                padding: "1rem 2rem",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: "8px",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                background: isActive
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(255, 255, 255, 0.1)",
                color: "white",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(5px)",
                minWidth: "180px",
                textAlign: "center"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isActive
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(255, 255, 255, 0.1)";
              }}
            >
              {label}
            </button>
          );
        })}
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
            <section key={id} style={contentStyle}>
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
            </section>
          )
      )}

      {/* === FORMULARIO PQR's === */}
      {activeContent === "contenido-w9" && (
        <section
          style={contentStyle}
        >
          <form 
            onSubmit={handleSubmitPQRS} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}
          >
            <h2 style={titleStyle}>PQR's</h2>
            <p style={textStyle}>Por favor completa el siguiente formulario</p>
            <label htmlFor="name" style={{ color: "#fff", fontWeight: 500 }}>
              Nombre:
            </label>
            <input
              type="text"
              name="nombre"
              id="name"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
                width: "100%",
                boxSizing: "border-box",
                WebkitAppearance: "none"
              }}
            />

            <label htmlFor="email" style={{ color: "#fff", fontWeight: 500 }}>
              Correo Electrónico:
            </label>
            <input
              type="email"
              name="correo"
              id="email"
              placeholder="Correo Electrónico"
              value={formData.correo}
              onChange={handleInputChange}
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
                width: "100%",
                boxSizing: "border-box",
                WebkitAppearance: "none"
              }}
            />

            <label htmlFor="subject" style={{ color: "#fff", fontWeight: 500 }}>
              Asunto:
            </label>
            <input
              type="text"
              name="asunto"
              id="subject"
              placeholder="(Petición, queja o reclamo)"
              value={formData.asunto}
              onChange={handleInputChange}
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
                width: "100%",
                boxSizing: "border-box",
                WebkitAppearance: "none"
              }}
            />

            <label htmlFor="coments" style={{ color: "#fff", fontWeight: 500 }}>
              PQR:
            </label>
            <textarea
              name="mensaje"
              id="coments"
              cols={30}
              rows={6}
              placeholder="Escribe tu Petición, queja o reclamo"
              value={formData.mensaje}
              onChange={handleInputChange}
              required
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1rem",
                resize: "vertical",
                width: "100%",
                boxSizing: "border-box",
                minHeight: "120px",
                maxHeight: "300px"
              }}
            ></textarea>

            <button
              className="btn"
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "1rem",
                borderRadius: "10px",
                border: "none",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.1rem",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.7 : 1,
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
              onMouseOver={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.opacity = "0.9"
                }
              }}
              onMouseOut={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.opacity = "1"
                }
              }}
            >
              {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
            </button>
          </form>
        </section>
      )}
      </div>
    </div>
  )
}
