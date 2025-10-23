"use client";

import React, { useState } from "react";

type MainContent = "contenido1" | "contenido2" | "contenido3";
type SubContent =
  | "subcontenido1"
  | "subcontenido2"
  | "subcontenido3"
  | "subcontenido4"
  | "subcontenido5"
  | "subcontenido6"
  | "subcontenido7"
  | "subcontenido8"
  | "subcontenido9";

export default function ServiciosContent() {
  const [activeMainContent, setActiveMainContent] = useState<MainContent | null>('contenido1');
  const [activeSubContent, setActiveSubContent] = useState<SubContent | null>('subcontenido1'); // Por defecto: Almacenamiento

  const showMainContent = (id: MainContent, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // Si ya está activo, no hacer nada para mantenerlo abierto
    if (activeMainContent === id) return;
    
    // Establecer el subcontenido por defecto según la sección principal
    let defaultSubContent: SubContent | null = null;
    switch(id) {
      case 'contenido1': // Métodos
        defaultSubContent = 'subcontenido1'; // Almacenamiento
        break;
      case 'contenido2': // Cantidades
        defaultSubContent = 'subcontenido4'; // Paqueteo
        break;
      case 'contenido3': // PL's
        defaultSubContent = 'subcontenido7'; // 2-PL
        break;
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
    minHeight: "calc(100vh - 150px)",
    padding: "2rem 1rem 4rem 1rem",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
    '@media (max-width: 620px)': {
      padding: "1.5rem 0.5rem 3rem 0.5rem"
    }
  };

  const innerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    boxSizing: "border-box",
    '@media (max-width: 620px)': {
      padding: "0 0.75rem"
    }
  };

  const opcionesMainStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
    padding: "0 0.5rem",
    '@media (max-width: 620px)': {
      gap: "0.5rem",
      marginBottom: "1rem"
    }
  };

  const buttonMainStyle: React.CSSProperties = {
    padding: "0.8rem 1.2rem",
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(0, 0, 0, 0.6)",
    color: "white",
    cursor: "pointer",
    textAlign: "center" as const,
    transition: "all 0.2s ease",
    backdropFilter: "blur(5px)",
    minWidth: "140px",
    '@media (max-width: 620px)': {
      padding: "0.6rem 0.8rem",
      fontSize: "0.9rem",
      minWidth: "120px"
    }
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

  // Contenidos textuales
  const almacenText = [
    "Centros de Distribución a la medida",
    "Unidades almacenables: Pallets, Cajas, Items sueltos, Motos",
    "Sistemas de Picking: Automático, Semiautomático, Manual",
    "Sistema de cross docking flexible y dinámico",
    "Profundidad de almacenamiento simple, doble o múltiple",
    "Sistemas de información integrables",
    "Recepción, consolidación, alistamiento y despacho",
    "Soluciones de servicio en nuestro stage o In-house",
    "Servicio basado en B.P.M + Q.P.M a partir de KPL´s",
    "Gestión del riesgo y pólizas 360º (cumplimiento y todo riesgo)",
    "Soluciones ajustadas a su presupuesto",
  ];

  const transporteText = [
    "Transporte y distribución puerta a puerta",
    "Consulta virtual en tiempo real",
    "Gestión en logística inversa",
    "Distribución en ruta sin recargo para semimasivos y masivos",
    "Tiempos de 24/48/72 hrs según el destino",
    "Vehículos dedicados y configurados a la medida",
    "Gestión del riesgo y monitoreo operativo 7-24",
    "Servicio basado en B.P.M + Q.P.M",
    "Entregas críticas - Express -",
    "Gestión del riesgo y pólizas 360º (cumplimiento y todo riesgo)",
    "Consolidación controlada, reduciendo riesgo por contaminación",
  ];

  const distribucionText = [
    "Centro de distribución temporal (recepción y crossdocking)",
    "Distribución puerta a puerta urbana y rural (según el destino)",
    "Procesos adicionales de redistribución sin costo (*)",
    "Solución de última milla configurada a la medida",
    "Gestión y monitoreo operativo 7-24",
    "Servicio basado en B.P.M + Q.P.M",
    "Aplican condiciones y limitaciones",
  ];

  const paqueteoText = [
    "Servicio puerta a puerta",
    "Consulta virtual en tiempo real",
    "Pago contado, al destino y crédito",
    "Redistribución adicional",
    "Tiempos de 24/48/72 hrs s/ destino",
    "Gestión del riesgo 7-24",
    "Monitoreo del servicio 7-24",
    "Servicio basado en B.P.M + Q.P.M",
    "Transporte aéreo y terrestre",
    "Soluciones de última milla",
    "Entregas críticas - Express -",
  ];

  const semimasivoText = [
    "Servicio puerta a puerta",
    "Consulta virtual en tiempo real",
    "Pago contado, al destino y crédito",
    "Distribución en ruta sin recargo",
    "Tiempos de 24/48/72 hrs s/ destino",
    "Gestión del riesgo + Contingencias",
    "Monitoreo del servicio certiplus",
    "Servicio basado en B.P.M + Q.P.M",
    "Transporte aéreo y terrestre",
    "Consolidación controlada",
  ];

  const masivoText = [
    "Servicio puerta a puerta",
    "Consulta virtual en tiempo real",
    "Gestión del riesgo a la medida",
    "Distribución en ruta sin recargo",
    "Vehículo dedicado/configurado a la medida",
    "Servicio ajustado a la medida",
    "Monitoreo del servicio certiplus",
    "Servicio basado en B.P.M + Q.P.M",
    "Aplican condiciones",
  ];

  // Helpers para background (coherente con ContactosContent)
  const getBg = (isActive: boolean) => (isActive ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.1)");
  const hoverBg = "rgba(255, 255, 255, 0.15)";

  return (
    <div className="caja-s" onClick={closeContent} style={containerStyle}>
      <div style={innerStyle}>
        {/* Botones principales */}
        <div style={opcionesMainStyle}>
          {[
            { id: "contenido1" as MainContent, label: "Métodos" },
            { id: "contenido2" as MainContent, label: "Cantidades" },
            { id: "contenido3" as MainContent, label: "PL's" },
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

        {/* METODOS */}
        {activeMainContent === "contenido1" && (
          <section style={cardStyle} aria-labelledby="metodos-title">
            <h3 id="metodos-title" style={headingStyle}>
              Métodos
            </h3>

            <div style={opcionesSubStyle}>
              {[
                { id: "subcontenido1" as SubContent, label: "Almacenamiento" },
                { id: "subcontenido2" as SubContent, label: "Transporte" },
                { id: "subcontenido3" as SubContent, label: "Distribución" },
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
              {activeSubContent === "subcontenido1" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — Almacenamiento</h4>
                  <ul style={ulStyle}>
                    {almacenText.map((t, i) => (
                      <li key={i} style={liStyle}>
                        <span style={bulletStyle}>°</span>
                        <span style={{ marginLeft: 18 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {activeSubContent === "subcontenido2" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — Transporte</h4>
                  <ul style={ulStyle}>
                    {transporteText.map((t, i) => (
                      <li key={i} style={liStyle}>
                        <span style={bulletStyle}>°</span>
                        <span style={{ marginLeft: 18 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {activeSubContent === "subcontenido3" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — Distribución</h4>
                  <ul style={ulStyle}>
                    {distribucionText.map((t, i) => (
                      <li key={i} style={liStyle}>
                        <span style={bulletStyle}>°</span>
                        <span style={{ marginLeft: 18 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {!activeSubContent && (
                <div style={{ marginTop: "0.4rem", color: "#e6f7f1", opacity: 0.95 }}>
                  <p style={{ textAlign: "center", padding: "0.6rem 0" }}>
                    Selecciona una opción para ver las características. <strong>Almacenamiento</strong>, <strong>Transporte</strong> o <strong>Distribución</strong>.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CANTIDADES */}
        {activeMainContent === "contenido2" && (
          <section style={cardStyle} aria-labelledby="cantidades-title">
            <h3 id="cantidades-title" style={headingStyle}>
              Cantidades
            </h3>

            <div style={opcionesSubStyle}>
              {[
                { id: "subcontenido4" as SubContent, label: "Paqueteo" },
                { id: "subcontenido5" as SubContent, label: "Semimasivo" },
                { id: "subcontenido6" as SubContent, label: "Masivo" },
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
              {activeSubContent === "subcontenido4" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — Paqueteo</h4>
                  <ul style={ulStyle}>
                    {paqueteoText.map((t, i) => (
                      <li key={i} style={liStyle}>
                        <span style={bulletStyle}>°</span>
                        <span style={{ marginLeft: 18 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {activeSubContent === "subcontenido5" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — Semimasivo</h4>
                  <ul style={ulStyle}>
                    {semimasivoText.map((t, i) => (
                      <li key={i} style={liStyle}>
                        <span style={bulletStyle}>°</span>
                        <span style={{ marginLeft: 18 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {activeSubContent === "subcontenido6" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — Masivo</h4>
                  <ul style={ulStyle}>
                    {masivoText.map((t, i) => (
                      <li key={i} style={liStyle}>
                        <span style={bulletStyle}>°</span>
                        <span style={{ marginLeft: 18 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {!activeSubContent && (
                <div style={{ marginTop: "0.4rem", color: "#e6f7f1", opacity: 0.95 }}>
                  <p style={{ textAlign: "center", padding: "0.6rem 0" }}>
                    Selecciona Paqueteo, Semimasivo o Masivo para ver sus características.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* PL's */}
        {activeMainContent === "contenido3" && (
          <section style={cardStyle}>
            <h3 style={headingStyle}>PL's</h3>

            <div style={opcionesSubStyle}>
              {[
                { id: "subcontenido7" as SubContent, label: "2-PL" },
                { id: "subcontenido8" as SubContent, label: "3-PL" },
                { id: "subcontenido9" as SubContent, label: "4-PL" },
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
              {activeSubContent === "subcontenido7" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — 2-PL</h4>
                  <ul style={ulStyle}>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Transporte de mercancías</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Operación exclusiva o consolidada</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Plataforma terrestre y aérea</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Planeación y gestión de recursos</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Diseño operativo a la medida</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Soporte de servicio a la medida</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Gestión de indicadores de servicio</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Monitoreo operativo 7-24</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Soluciones de última milla</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Entregas críticas - Express -</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Sistema de información integrable</span></li>
                  </ul>
                </article>
              )}

              {activeSubContent === "subcontenido8" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — 3-PL</h4>
                  <ul style={ulStyle}>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Gestión en almacenaje de mercancías</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Operación exclusiva o compartida</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Instalaciones y equipos a la medida</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Planificación y monitoreo técnico</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Gestión de Kpli´s y flujo</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Gestión en logística inversa</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Sistema de información integrable</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Servicio basado en B.P.M + Q.P.M</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Aplican condiciones</span></li>
                  </ul>
                </article>
              )}

              {activeSubContent === "subcontenido9" && (
                <article style={{ marginTop: "0.4rem" }}>
                  <h4 style={sectionTitleStyle}>Características — 4-PL</h4>
                  <ul style={ulStyle}>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Almacén y distribución integrados</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Operación exclusiva o compartida</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Servicio de torre de control</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Diseño y gestión de red a la medida</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Instalaciones y equipos a la medida</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Sistema de información integrable</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Servicio basado en B.P.M + Q.P.M</span></li>
                    <li style={liStyle}><span style={bulletStyle}>°</span><span style={{ marginLeft: 18 }}>Aplican condiciones</span></li>
                  </ul>
                </article>
              )}

              {!activeSubContent && (
                <div style={{ marginTop: "0.4rem", color: "#e6f7f1", opacity: 0.95 }}>
                  <p style={{ textAlign: "center", padding: "0.6rem 0" }}>Selecciona una sub-opción para ver las características.</p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
