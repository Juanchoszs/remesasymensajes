"use client";

import React, { useState } from "react";

type MainContent = "compromiso" | "gestion-riesgo";
type SubContent =
  | "calidad"
  | "satisfaccion"
  | "transparencia"
  | "medio-ambiente"
  | "proteccion-datos";

export default function GarantiasContent() {
  const [activeMainContent, setActiveMainContent] = useState<MainContent | null>('compromiso');
  const [activeSubContent, setActiveSubContent] = useState<SubContent | null>('calidad');

  const showMainContent = (id: MainContent, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // Si ya está activo, no hacer nada para mantenerlo abierto
    if (activeMainContent === id) return;
    
    // Establecer el subcontenido por defecto según la sección principal
    let defaultSubContent: SubContent | null = 'calidad';
    if (id === 'gestion-riesgo') {
      defaultSubContent = null;
    }
    
    setActiveMainContent(id);
    setActiveSubContent(defaultSubContent);
  };

  const showSubContent = (id: SubContent, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // Si ya está activo, no hacer nada para mantenerlo abierto
    if (activeSubContent === id) return;
    setActiveSubContent(id);
  };

  const closeContent = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("caja-s")) {
      setActiveMainContent(null);
      setActiveSubContent(null);
    }
  };

  // Estilos reutilizables (sin fondo inline)
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    padding: "3rem 1rem",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    boxSizing: "border-box",
    /* NOTA: no backgroundImage aquí — usa globals.css (.caja-s) */
  };

  const innerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const opcionesMainStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  };

  const buttonMainStyle: React.CSSProperties = {
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: 600,
    borderRadius: "8px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    cursor: "pointer",
    textAlign: "center" as const,
    transition: "all 0.3s ease",
    backdropFilter: "blur(5px)",
    minWidth: "180px",
  };

  const opcionesSubStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.9rem",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "1rem 0 1.25rem 0",
  };

  const buttonSubStyle: React.CSSProperties = {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: "8px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    cursor: "pointer",
    textAlign: "center" as const,
    transition: "all 0.3s ease",
    backdropFilter: "blur(5px)",
    minWidth: "220px",
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem",
    background: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.65))",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 12px 35px rgba(0,0,0,0.5)",
    color: "#f8f9fa",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textAlign: "center" as const,
    fontWeight: 800,
    color: "#ffffff",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "0.5px",
  };

  const ulStyle: React.CSSProperties = {
    listStyle: "none",
    paddingLeft: "1rem",
    lineHeight: 1.8,
    fontSize: "1.1rem",
    margin: "1.5rem 0",
  };

  const liStyle: React.CSSProperties = {
    marginBottom: "0.8rem",
    paddingLeft: "1.8rem",
    position: "relative" as const,
    transition: "all 0.2s ease",
  };

  const bulletStyle: React.CSSProperties = {
    position: "absolute" as const,
    left: 0,
    top: 5,
    color: "#8fd3c7",
    fontWeight: 800,
    fontSize: "1.4rem",
  };

  const sectionTitleStyle: React.CSSProperties = {
    margin: "1.5rem 0",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "#e9ecef",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
    textShadow: "0 1px 2px rgba(0,0,0,0.2)"
  };

  // Contenidos de Nuestro Compromiso
  const calidadText = "Consideramos que la calidad de nuestro servicio es la piedra angular de nuestra operación, y en tal sentido nos esforzamos por implementar soluciones de servicio de primera categoría con un equipo operativo y humano idóneo que cumpla efectivamente los requerimientos de las necesidades de nuestros clientes y de los mercados; por lo tanto, continuamente nos capacitamos, investigamos y adoptamos las mejores prácticas en todas las áreas, complementando su ejecución con nuestro sistema de gestión de calidad por procesos BPM garantizándole a nuestros clientes la ejecución de una operación adecuada en el momento indicado y ejecutada de forma correcta, cumpliendo con la normativa de ley para cada caso, con sus expectativas operativas, las de sus clientes y dando cumplimiento a nuestra promesa de servicio de forma idónea en el momento justo.";

  const satisfaccionText = "En Remesas & Mensajes somos conscientes que el éxito de su negocio garantiza el nuestro, por lo tanto, en nuestras operaciones priorizamos la certeza sobre la percepción; ya que estar totalmente seguros de que cumplimos cuantitativa y cualitativamente sus expectativas y nuestra promesa de servicio es el único medio valido para alcanzar nuestro principal objetivo. Consecuentes con este pensamiento, estamos convencidos que lo que no se mide no es susceptible de mejora; por lo tanto, constantemente medimos nuestra operación con el fin de evaluarnos a partir de los objetivos trazados en nuestro sistema de gestión de calidad por procesos BPM, robusteciendo, ajustando o estableciendo programas de mejora continua que nos permitan alcanzar la excelencia y nuestro principal objetivo, 'su confianza'.";

  const transparenciaText = "Velamos por la integridad de la operación de nuestros clientes y de nuestros funcionarios durante el ejercicio de nuestras labores, velando continuamente por que se ejecuten en un entorno de rectitud y honestidad. Nuestra operación a nivel nacional se ejecuta y cumple con la normatividad vigente para el sector al que pertenecemos, de igual forma velamos por ejercerla atendiendo nuestros valores corporativos de manera ética y de acuerdo con las buenas prácticas legales ajustadas a la ley y constitución nacional.";

  const medioAmbienteText = "Somos conscientes de nuestro impacto en el medio ambiente por lo tanto estamos comprometidos con disminuir nuestros índices de contaminación en el menor tiempo posible y para esto permanecemos atentos de nuevas tecnologías que nos permitan alcanzar estos objetivos, así como del diseño de programas preventivos que involucren a nuestro capital humano ya que consideramos el mismo parte fundamental para la concientización ambiental.";

  const proteccionDatosText = "Nos encontramos altamente comprometidos con proteger los datos e información que nos confían nuestros clientes, en tal sentido nos esforzamos en implementar procesos que cumplan dicho fin así como de empoderar a nuestro equipo para que se concientice y vele por proteger dicha información, esto incluye datos técnicos, financieros, operativos y comercial, nuestros funcionarios y la compañía nos comprometemos a respetar la privacidad de los mismos y las leyes y regulaciones tanto propias como gubernamentales expedidas al respecto.";

  // Contenido de Gestión de Riesgo
  const gestionRiesgoText = "Nuestra gestión del riesgo trata de identificar y cuantificar las potenciales perturbaciones para reducir su impacto en nuestra operación, y en tal sentido en Remesas & Mensajes nos esforzamos en poder gestionar el riesgo diseñando planes de contingencia que mitiguen en mayor o menor medida los potenciales riesgos a los que nos podamos enfrentar y nos permitan garantizar la continuidad de la operación.";
  
  const fasesGestionRiesgo = [
    "Identificar los potenciales riesgos que pueden suceder",
    "Valorar y clasificar el riesgo",
    "Desarrollar un plan de respuesta adecuado",
    "Ejecutar el plan de respuesta si fuese necesario"
  ];
  
  const gestionRiesgoText2 = "Procedemos y asignamos un índice de riesgo a cada proceso a partir de su probabilidad y su impacto, identificando cuantitativamente su impacto y estableciendo las correspondientes acciones preventivas y correctivas. Nuestras acciones preventivas son nuestra respuesta proactiva ante riesgos con un alto índice de riesgo ya que nos enfocamos por enfrentarlos y no esperar a recurrir a respuestas urgentes.";

  // Helpers para background (coherente con ContactosContent)
  const getBg = (isActive: boolean) => (isActive ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.1)");
  const hoverBg = "rgba(255, 255, 255, 0.15)";

  return (
    <div className="caja-s" onClick={closeContent} style={containerStyle}>
      <div style={innerStyle}>
        {/* Botones principales */}
        <div style={opcionesMainStyle}>
          {[
            { id: "compromiso" as MainContent, label: "Nuestro Compromiso" },
            { id: "gestion-riesgo" as MainContent, label: "Gestión de Riesgo" },
          ].map(({ id, label }) => {
            const isActive = activeMainContent === id;
            return (
              <button
                key={id}
                className={`opcion-s ${isActive ? "activo" : ""}`}
                onClick={(e) => showMainContent(id, e)}
                aria-pressed={isActive}
                style={{
                  ...buttonMainStyle,
                  background: getBg(isActive),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = getBg(isActive);
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* NUESTRO COMPROMISO */}
        {activeMainContent === "compromiso" && (
          <section style={cardStyle} aria-labelledby="compromiso-title">
            <h3 id="compromiso-title" style={headingStyle}>
              Nuestro Compromiso
            </h3>

            <div style={opcionesSubStyle}>
              {[
                { id: "calidad" as SubContent, label: "Calidad" },
                { id: "satisfaccion" as SubContent, label: "Satisfacción" },
                { id: "transparencia" as SubContent, label: "Transparencia" },
                { id: "medio-ambiente" as SubContent, label: "Medio Ambiente" },
                { id: "proteccion-datos" as SubContent, label: "Protección de Datos" },
              ].map(({ id, label }) => {
                const isActive = activeSubContent === id;
                return (
                  <button
                    key={id}
                    className={`opcion-s ${isActive ? "activo-sub" : ""}`}
                    onClick={(e) => showSubContent(id, e)}
                    style={{
                      ...buttonSubStyle,
                      background: getBg(isActive),
                      transform: isActive ? "scale(1.03)" : undefined,
                      opacity: isActive ? 0.95 : 1,
                      whiteSpace: "nowrap",
                      padding: "0.6rem 1rem",
                      fontSize: "0.95rem"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = getBg(isActive);
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div>
              {activeSubContent === "calidad" && (
                <article style={{ marginTop: "1rem" }}>
                  <h4 style={sectionTitleStyle}>Compromiso por la Calidad</h4>
                  <p style={{
                    lineHeight: 1.8,
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    fontSize: "1.2rem"
                  }}>
                    {calidadText}
                  </p>
                </article>
              )}

              {activeSubContent === "satisfaccion" && (
                <article style={{ marginTop: "1rem" }}>
                  <h4 style={sectionTitleStyle}>Compromiso por la Satisfacción</h4>
                  <p style={{
                    lineHeight: 1.8,
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    fontSize: "1.2rem"
                  }}>
                    {satisfaccionText}
                  </p>
                </article>
              )}

              {activeSubContent === "transparencia" && (
                <article style={{ marginTop: "1rem" }}>
                  <h4 style={sectionTitleStyle}>Compromiso con la Transparencia</h4>
                  <p style={{
                    lineHeight: 1.8,
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    fontSize: "1.2rem"
                  }}>
                    {transparenciaText}
                  </p>
                </article>
              )}

              {activeSubContent === "medio-ambiente" && (
                <article style={{ marginTop: "1rem" }}>
                  <h4 style={sectionTitleStyle}>Compromiso con el Medio Ambiente</h4>
                  <p style={{
                    lineHeight: 1.8,
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    fontSize: "1.2rem"
                  }}>
                    {medioAmbienteText}
                  </p>
                </article>
              )}

              {activeSubContent === "proteccion-datos" && (
                <article style={{ marginTop: "1rem" }}>
                  <h4 style={sectionTitleStyle}>Compromiso con la Protección de Datos</h4>
                  <p style={{
                    lineHeight: 1.8,
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    fontSize: "1.2rem"
                  }}>
                    {proteccionDatosText}
                  </p>
                </article>
              )}

              {!activeSubContent && (
                <div style={{ marginTop: "1rem", color: "#e6f7f1", opacity: 0.95 }}>
                  <p style={{ textAlign: "center", padding: "1rem 0" }}>
                    Seleccione una categoría para ver nuestro compromiso en detalle.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* GESTIÓN DE RIESGO */}
        {activeMainContent === "gestion-riesgo" && (
          <section style={cardStyle} aria-labelledby="riesgo-title">
            <h3 id="riesgo-title" style={headingStyle}>
              Gestión de Riesgo
            </h3>
            
            <article style={{ marginTop: "1rem" }}>
              <h4 style={sectionTitleStyle}>Gestión del Riesgo</h4>
              <p style={{ 
                lineHeight: 1.8,
                textAlign: "justify",
                maxWidth: "900px",
                margin: "0 auto 1.5rem auto",
                padding: "0 1.5rem",
                fontSize: "1.2rem"
              }}>
                {gestionRiesgoText}
              </p>
              
              <p style={{
                lineHeight: 1.8,
                textAlign: "left",
                maxWidth: "900px",
                margin: "0 auto 1.5rem auto",
                padding: "0 1.5rem",
                fontSize: "1.2rem"
              }}>
                Para enfrentar y estar competentemente preparados ante una situación de riesgo hemos establecido las siguientes fases a partir del tipo de operación atendida ya sea en términos de gestión de almacén o transporte y distribución:
              </p>
              
              <div style={{
                maxWidth: "900px",
                margin: "0 auto 2rem auto",
                padding: "1.5rem 2rem"
              }}>
                {fasesGestionRiesgo.map((fase, index) => (
                  <div key={index} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.6
                  }}>
                    <span style={{
                      display: "inline-block",
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#4a90e2",
                      color: "white",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "24px",
                      marginRight: "12px",
                      flexShrink: 0,
                      fontSize: "0.9rem"
                    }}>
                      {index + 1}
                    </span>
                    <span>{fase}</span>
                  </div>
                ))}
              </div>
              
              <p style={{
                lineHeight: 1.8,
                textAlign: "justify",
                maxWidth: "900px",
                margin: "0 auto",
                padding: "0 1.5rem",
                fontSize: "1.2rem"
              }}>
                {gestionRiesgoText2}
              </p>
            </article>
          </section>
        )}
      </div>
    </div>
  );
}
