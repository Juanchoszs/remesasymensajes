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
  const [activeMainContent, setActiveMainContent] = useState<MainContent | null>(null);
  const [activeSubContent, setActiveSubContent] = useState<SubContent | null>(null);

  const showMainContent = (id: MainContent, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveMainContent(activeMainContent === id ? null : id);
    setActiveSubContent(null);
  };

  const showSubContent = (id: SubContent, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveSubContent(activeSubContent === id ? null : id);
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
    padding: "1.6rem",
    background: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.6))",
    borderRadius: "14px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
    color: "#f6f6f6",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "1.6rem",
    marginBottom: "0.75rem",
    textAlign: "center" as const,
    fontWeight: 700,
  };

  const ulStyle: React.CSSProperties = {
    listStyle: "none",
    paddingLeft: 0,
    lineHeight: 1.7,
    fontSize: "1rem",
    margin: 0,
  };

  const liStyle: React.CSSProperties = {
    marginBottom: "0.5rem",
    paddingLeft: "0.6rem",
    position: "relative" as const,
  };

  const bulletStyle: React.CSSProperties = {
    position: "absolute" as const,
    left: 0,
    top: 3,
    color: "#8fd3c7",
    fontWeight: 700,
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — Almacenamiento</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — Transporte</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — Distribución</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — Paqueteo</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — Semimasivo</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — Masivo</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — 2-PL</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — 3-PL</h4>
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
                  <h4 style={{ marginBottom: "0.6rem", fontWeight: 700 }}>Características — 4-PL</h4>
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
