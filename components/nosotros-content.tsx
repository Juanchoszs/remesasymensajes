"use client"

import type React from "react"
import { useState } from "react"

type ContentId = "contenido-w1" | "contenido-w2" | "contenido-w3"

export default function NosotrosContent() {
  const [activeContent, setActiveContent] = useState<ContentId | null>(null)

  const showContent = (id: ContentId, event: React.MouseEvent) => {
    event.stopPropagation()
    setActiveContent(activeContent === id ? null : id)
  }

  const closeContent = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.classList.contains("caja-w")) {
      setActiveContent(null)
    }
  }

  return (
    <div className="caja-w" onClick={closeContent}>
      <div className="opciones-w">
        <button
          className={`opcion-w ${activeContent === "contenido-w1" ? "activo" : ""}`}
          onClick={(e) => showContent("contenido-w1", e)}
        >
          ¿Quiénes Somos?
        </button>
        <button
          className={`opcion-w ${activeContent === "contenido-w2" ? "activo" : ""}`}
          onClick={(e) => showContent("contenido-w2", e)}
        >
          Nuestro Sentimiento
        </button>
        <button
          className={`opcion-w ${activeContent === "contenido-w3" ? "activo" : ""}`}
          onClick={(e) => showContent("contenido-w3", e)}
        >
          Nuestra Premisa
        </button>
      </div>

      {activeContent === "contenido-w1" && (
        <div className="contenido-w" id="contenido-w1" style={{ display: "block" }}>
          <p>
            Somos un operador de nivel estratégico que genera valor en la cadena de suministro, estamos presentes en la
            industria cosmética, solar, banca, farmacéutica, ingeniería, agrícola, veterinaria, licores, confección,
            telecomunicaciones, automotriz y comercio; implementamos soluciones operativas a la medida para
            requerimientos logísticos de nivel 2PL 3PL y 4PL. Diseñamos, integramos y directamente (no tercerizamos)
            prestamos soluciones en:
          </p>
          <br />
          <li>° Transporte de Mercancías</li>
          <br />
          <li>° Servicios Logísticos</li>
          <br />
          <li>° Distribución de última Milla</li>
          <br />
          <li>° Entregas Críticas</li>
          <br />
        </div>
      )}

      {activeContent === "contenido-w2" && (
        <div className="contenido-w" id="contenido-w2" style={{ display: "block" }}>
          <p>Se dice que quien conoce el llano, de él se enamora y jamás lo deja...</p>
          <br />
          <p>
            Y aunque han transcurrido más de 20 años transitando por lo que anteriormente eran caminos con barro y hoy
            en su mayoría son vías de progreso en las que transportamos diariamente el esfuerzo y los sueños de sus
            comunidades, aún nos enorgullece poder ser testigos de su progreso, su crecimiento, sus logros, incluso sus
            dificultades, las cuales hemos aprendido juntos a enfrentar a la cara, a levantarnos y seguir adelante. Para
            nosotros cada día esta bella región nos entrega más de lo que le entregamos nosotros a ella y en tal sentido
            solo tenemos palabras de agradecimiento por la confianza depositada en nuestros servicios, y este amanecer
            que apreciamos todos los días así como otras bellas imágenes que usted podrá apreciar en algunas de nuestras
            paginas es nuestro homenaje a este llano que tanto apreciamos y al que no queremos dejar.
          </p>
        </div>
      )}

      {activeContent === "contenido-w3" && (
        <div className="contenido-w" id="contenido-w3" style={{ display: "block" }}>
          <p>
            Somos un equipo multidisciplinario de profesionales enfocados en que primero está el cliente, en tal sentido
            estamos conscientes que en cada lugar donde llegamos lo representamos a usted y que si cumplimos bien con
            nuestra misión la suya estará cumplida.
          </p>
          <br />
          <p>
            Nos esforzamos no solo por cumplir nuestra promesa de servicio, nos esforzamos por continuamente superar sus
            expectativas, y para lograrlo diariamente monitoreamos nuestros indicadores pero aún vamos más allá, ya que
            colocamos todo nuestro empeño en entender los requerimientos específicos de cada empresa, de cada persona,
            pues al final del día lo único que importa es la experiencia de servicio que hemos entregado.
          </p>
        </div>
      )}
    </div>
  )
}
