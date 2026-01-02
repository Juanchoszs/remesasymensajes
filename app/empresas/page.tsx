"use client"

import type React from "react"

import { useState } from "react"

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
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Usar siempre ruta relativa para evitar problemas de CORS/domains en producción
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(formData),
      })

      let result;
      const responseText = await response.text();
      
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error('Error parsing JSON response:', responseText);
        result = { message: `Error del servidor: ${response.status} ${response.statusText}` };
      }

      if (!response.ok) {
        console.error('Error response:', result);
        throw new Error(result.message || result.error || `Error al enviar el formulario (${response.status})`);
      }

      setSubmitStatus({
        success: true,
        message: '¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.'
      })
      
      // Reset form
      setFormData({
        nombreEmpresa: "",
        correo: "",
        objetoSocial: "",
        tipoMercancia: "",
        capacidadAlmacenamiento: "",
        frecuenciaEnvio: "",
        comentarios: "",
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Error al enviar el formulario. Por favor, inténtalo de nuevo.'
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
    <div className="page-container relative min-h-screen">
      {/* IMAGE: Fondo de amanecer en carretera - static/img/fondos/fondo-empresas.jpg */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url(/amanecer.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

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
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            
            {submitStatus && (
              <div className={`mt-4 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
