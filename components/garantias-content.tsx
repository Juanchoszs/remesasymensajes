"use client"

import type React from "react"
import { useState } from "react"

type MainContent = "contenido-g1" | "contenido-g2"
type SubContent =
  | "subcontenido-g1"
  | "subcontenido-g2"
  | "subcontenido-g3"
  | "subcontenido-g4"
  | "subcontenido-g5"
  | "subcontenido-g6"

export default function GarantiasContent() {
  const [activeMainContent, setActiveMainContent] = useState<MainContent | null>(null)
  const [activeSubContent, setActiveSubContent] = useState<SubContent | null>(null)

  const showMainContent = (id: MainContent, event: React.MouseEvent) => {
    event.stopPropagation()
    setActiveMainContent(activeMainContent === id ? null : id)
    setActiveSubContent(null)
  }

  const showSubContent = (id: SubContent, event: React.MouseEvent) => {
    event.stopPropagation()
    setActiveSubContent(activeSubContent === id ? null : id)
  }

  const closeContent = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.classList.contains("caja-g")) {
      setActiveMainContent(null)
      setActiveSubContent(null)
    }
  }

  return (
    <div className="caja-g" onClick={closeContent}>
      <div className="opciones-g">
        <button
          className={`opcion-g ${activeMainContent === "contenido-g1" ? "activo" : ""}`}
          onClick={(e) => showMainContent("contenido-g1", e)}
        >
          Nuestro Compromiso
        </button>
        <button
          className={`opcion-g ${activeMainContent === "contenido-g2" ? "activo" : ""}`}
          onClick={(e) => showMainContent("contenido-g2", e)}
        >
          Gestión de Riesgo
        </button>
      </div>

      {activeMainContent === "contenido-g1" && (
        <div className="contenido-g" id="contenido-g1" style={{ display: "block" }}>
          <button
            className={`opcion-g ${activeSubContent === "subcontenido-g1" ? "activo-sub" : ""}`}
            onClick={(e) => showSubContent("subcontenido-g1", e)}
          >
            Compromiso por la Calidad
          </button>
          <button
            className={`opcion-g ${activeSubContent === "subcontenido-g2" ? "activo-sub" : ""}`}
            onClick={(e) => showSubContent("subcontenido-g2", e)}
          >
            Comprometido por la Satisfacción
          </button>
          <button
            className={`opcion-g ${activeSubContent === "subcontenido-g3" ? "activo-sub" : ""}`}
            onClick={(e) => showSubContent("subcontenido-g3", e)}
          >
            Comprometidos con la Transparencia
          </button>
          <button
            className={`opcion-g ${activeSubContent === "subcontenido-g4" ? "activo-sub" : ""}`}
            onClick={(e) => showSubContent("subcontenido-g4", e)}
          >
            Comprometidos con el medio ambiente
          </button>
          <button
            className={`opcion-g ${activeSubContent === "subcontenido-g5" ? "activo-sub" : ""}`}
            onClick={(e) => showSubContent("subcontenido-g5", e)}
          >
            Protección de datos
          </button>

          {activeSubContent === "subcontenido-g1" && (
            <div className="subcontenido-g" id="subcontenido-g1" style={{ display: "block" }}>
              <h2>Compromiso por la Calidad del Servicio</h2>
              <br />
              <p>
                Consideramos que la calidad de nuestro servicio es la piedra angular de nuestra operación, y en tal
                sentido nos esforzamos por implementar soluciones de servicio de primera categoría con un equipo
                operativo y humano idóneo que cumpla efectivamente los requerimientos de las necesidades de nuestros
                clientes y de los mercados; por lo tanto, continuamente nos capacitamos, investigamos y adoptamos las
                mejores prácticas en todas las áreas, complementando su ejecución con nuestro sistema de gestión de
                calidad por procesos BPM garantizándole a nuestros clientes la ejecución de una operación adecuada en el
                momento indicado y ejecutada de forma correcta, cumpliendo con la normativa de ley para cada caso, con
                sus expectativas operativas, las de sus clientes y dando cumplimiento a nuestra promesa de servicio de
                forma idónea en el momento justo.
              </p>
            </div>
          )}

          {activeSubContent === "subcontenido-g2" && (
            <div className="subcontenido-g" id="subcontenido-g2" style={{ display: "block" }}>
              <h2>Compromiso por la Satisfacción del Cliente</h2>
              <br />
              <p>
                En Remesas & Mensajes somos conscientes que el éxito de su negocio garantiza el nuestro, por lo tanto,
                en nuestras operaciones priorizamos la certeza sobre la percepción; ya que estar totalmente seguros de
                que cumplimos cuantitativa y cualitativamente sus expectativas y nuestra promesa de servicio es el único
                medio valido para alcanzar nuestro principal objetivo. Consecuentes con este pensamiento, estamos
                convencidos que lo que no se mide no es susceptible de mejora; por lo tanto, constantemente medimos
                nuestra operación con el fin de evaluarnos a partir de los objetivos trazados en nuestro sistema de
                gestión de calidad por procesos BPM, robusteciendo, ajustando o estableciendo programas de mejora
                continua que nos permitan alcanzar la excelencia y nuestro principal objetivo, "su confianza".
              </p>
            </div>
          )}

          {activeSubContent === "subcontenido-g3" && (
            <div className="subcontenido-g" id="subcontenido-g3" style={{ display: "block" }}>
              <h2>Compromiso por los Valores Éticos y Legales</h2>
              <br />
              <p>
                Velamos por la integridad de la operación de nuestros clientes y de nuestros funcionarios durante el
                ejercicio de nuestras labores, velando continuamente por que se ejecuten en un entorno de rectitud y
                honestidad. Nuestra operación a nivel nacional se ejecuta y cumple con la normatividad vigente para el
                sector al que pertenecemos, de igual forma velamos por ejercerla atendiendo nuestros valores
                corporativos de manera ética y de acuerdo con las buenas prácticas legales ajustadas a la ley y
                constitución nacional.
              </p>
            </div>
          )}

          {activeSubContent === "subcontenido-g4" && (
            <div className="subcontenido-g" id="subcontenido-g4" style={{ display: "block" }}>
              <h2>Compromiso por Preservar el Medio Ambiente</h2>
              <br />
              <p>
                Somos conscientes de nuestro impacto en el medio ambiente por lo tanto estamos comprometidos con
                disminuir nuestros índices de contaminación en el menor tiempo posible y para esto permanecemos atentos
                de nuevas tecnologías que nos permitan alcanzar estos objetivos, así como del diseño de programas
                preventivos que involucren a nuestro capital humano ya que consideramos el mismo parte fundamental para
                la concientización ambiental.
              </p>
            </div>
          )}

          {activeSubContent === "subcontenido-g5" && (
            <div className="subcontenido-g" id="subcontenido-g5" style={{ display: "block" }}>
              <h2>Compromiso por la Protección de tus Datos</h2>
              <br />
              <p>
                Nos encontramos altamente comprometidos con proteger los datos e información que nos confían nuestros
                clientes, en tal sentido nos esforzamos en implementar procesos que cumplan dicho fin así como de
                empoderar a nuestro equipo para que se concientice y vele por proteger dicha información, esto incluye
                datos técnicos, financieros, operativos y comercial, nuestros funcionarios y la compañía nos
                comprometemos a respetar la privacidad de los mismos y las leyes y regulaciones tanto propias como
                gubernamentales expedidas al respecto
              </p>
            </div>
          )}
        </div>
      )}

      {activeMainContent === "contenido-g2" && (
        <div className="contenido-g" id="contenido-g2" style={{ display: "block" }}>
          <button
            className={`opcion-g ${activeSubContent === "subcontenido-g6" ? "activo-sub" : ""}`}
            onClick={(e) => showSubContent("subcontenido-g6", e)}
          >
            Evitar riesgos no es una opción...
          </button>

          {activeSubContent === "subcontenido-g6" && (
            <div className="subcontenido-g" id="subcontenido-g6" style={{ display: "block" }}>
              <h2>Gestión del Riesgo</h2>
              <br />
              <p>
                Nuestra gestión del riesgo trata de identificar y cuantificar las potenciales perturbaciones para
                reducir su impacto en nuestra operación, y en tal sentido en Remesas & Mensajes nos esforzamos en poder
                gestionar el riesgo diseñando planes de contingencia que mitiguen en mayor o menor medida los
                potenciales riesgos a los que nos podamos enfrentar y nos permitan garantizar la continuidad de la
                operación. Para enfrentar y estar competentemente preparados ante una situación de riesgo hemos
                establecido las siguientes fases a partir del tipo de operación atendida ya sea en términos de gestión
                de almacén o transporte y distribución:
              </p>
              <br />
              <li>Identificar los potenciales riesgos que pueden suceder</li>
              <br />
              <li>Valorar y clasificar el riesgo</li>
              <br />
              <li>Desarrollar un plan de respuesta adecuado</li>
              <br />
              <li>Ejecutar el plan de respuesta si fuese necesario</li>
              <br />
              <br />
              <p>
                Procedemos y asignamos un índice de riesgo a cada proceso a partir de su probabilidad y su impacto,
                identificando cuantitativamente su impacto y estableciendo las correspondientes acciones preventivas y
                correctivas. Nuestras acciones preventivas son nuestra respuesta proactiva ante riesgos con un alto
                índice de riesgo ya que nos enfocamos por enfrentarlos y no esperar a recurrir a respuestas urgentes.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
