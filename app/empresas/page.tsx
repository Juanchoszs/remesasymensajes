"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"

export default function EmpresasPage() {
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    correo: "",
    objetoSocial: "",
    tipoMercancia: "",
    capacidadAlmacenamiento: "",
    frecuenciaEnvio: "",
    comentarios: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prevenir múltiples envíos
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    // Mostrar toast de carga
    const loadingToast = toast.loading("Enviando tu solicitud...")
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Éxito
        toast.success("¡Solicitud enviada exitosamente!", {
          description: "Nos pondremos en contacto contigo pronto.",
          duration: 5000,
          id: loadingToast,
        })
        
        // Limpiar el formulario
        setFormData({
          nombreEmpresa: "",
          correo: "",
          objetoSocial: "",
          tipoMercancia: "",
          capacidadAlmacenamiento: "",
          frecuenciaEnvio: "",
          comentarios: "",
        })
      } else {
        // Error del servidor
        toast.error("Error al enviar la solicitud", {
          description: result.error || "Por favor intenta nuevamente.",
          duration: 5000,
          id: loadingToast,
        })
      }
    } catch (error) {
      // Error de conexión
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="page-container">
      {/* IMAGE: Fondo de amanecer en carretera - static/img/fondos/fondo-empresas.jpg */}
      <div
        className="page-background"
        style={{
          backgroundImage: "url(/amanecer.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="emp-form-wrapper">
        {/* Carrusel de logos de clientes - only visible on desktop */}
        <div className="cinta-imagenes">
          <div className="cinta-track">
            {/* IMAGE: Logo NATURA - static/img/logos/natura.png */}
            <img src="/natura-logo.png" alt="NATURA" />
            {/* IMAGE: Logo AUTECO - static/img/logos/auteco.png */}
            <img src="/auteco-motos-logo.jpg" alt="AUTECO motos" />
            {/* IMAGE: Logo YAMBAL - static/img/logos/yambal.png */}
            <img src="/yambal-logo.jpg" alt="YAMBAL" />
            {/* IMAGE: Logo AKT - static/img/logos/akt.png */}
            <img src="/akt-motos-logo.jpg" alt="AKT motos" />
            {/* Repetir logos para efecto continuo */}
            <img src="/natura-logo.png" alt="NATURA" />
            <img src="/auteco-motos-logo.jpg" alt="AUTECO motos" />
            <img src="/yambal-logo.jpg" alt="YAMBAL" />
            <img src="/akt-motos-logo.jpg" alt="AKT motos" />
          </div>
        </div>

        <div className="emp-form-container">
          <h2 className="emp-title">¿Quieres enviar grandes cantidades con nosotros?</h2>
          <p className="emp-subtitle">Por favor diligencia el siguiente formulario empresarial</p>

          <form onSubmit={handleSubmit} className="form-empresarial">
            <div className="form-group">
              <label htmlFor="nombreEmpresa">Nombre del cliente o empresa:</label>
              <input
                type="text"
                id="nombreEmpresa"
                name="nombreEmpresa"
                value={formData.nombreEmpresa}
                onChange={handleChange}
                required
                placeholder="Ingrese el nombre de su empresa"
              />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                placeholder="ejemplo@empresa.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="objetoSocial">Objeto Social:</label>
              <input
                type="text"
                id="objetoSocial"
                name="objetoSocial"
                value={formData.objetoSocial}
                onChange={handleChange}
                required
                placeholder="¿A qué se dedica la empresa?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipoMercancia">¿Qué vas a transportar?</label>
              <input
                type="text"
                id="tipoMercancia"
                name="tipoMercancia"
                value={formData.tipoMercancia}
                onChange={handleChange}
                required
                placeholder="Tipo de mercancía"
              />
            </div>

            <div className="form-group">
              <label htmlFor="capacidadAlmacenamiento">Capacidad de almacenamiento:</label>
              <select
                id="capacidadAlmacenamiento"
                name="capacidadAlmacenamiento"
                value={formData.capacidadAlmacenamiento}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona la capacidad de carga</option>
                <option value="semimasivo">Semimasivo (Camión pequeño)</option>
                <option value="masivo">Masivo (Camión grande)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="frecuenciaEnvio">Frecuencia de envío:</label>
              <select
                id="frecuenciaEnvio"
                name="frecuenciaEnvio"
                value={formData.frecuenciaEnvio}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona la frecuencia</option>
                <option value="poca">Poca frecuencia (ocasional)</option>
                <option value="regular">Frecuencia regular (mensual)</option>
                <option value="frecuente">Muy frecuente (semanal o más)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comentarios">Comentarios adicionales:</label>
              <textarea
                id="comentarios"
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                rows={5}
                placeholder="Ingrese cualquier información adicional que considere relevante..."
              />
            </div>

            <button 
              type="submit" 
              className="btn-submit-empresarial"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer"
              }}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
