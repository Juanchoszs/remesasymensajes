"use client";

import React, { useState } from "react";

type MainContent = "contenido1" | "contenido2" | "contenido3";

export default function NosotrosContent() {
  const [activeContent, setActiveContent] = useState<MainContent>('contenido1');

  const showContent = (id: MainContent, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveContent(id);
  };

  const closeContent = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("caja-s")) {
      setActiveContent('contenido1');
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

  const quienesSomosText = "Somos un operador de nivel estratégico que genera valor en la cadena de suministro, estamos presentes en la industria cosmética, solar, banca, farmacéutica, ingeniería, agrícola, veterinaria, licores, confección, telecomunicaciones, automotriz y comercio; implementamos soluciones operativas a la medida para requerimientos logísticos de nivel 2PL, 3PL y 4PL. Diseñamos, integramos y directamente (no tercerizamos) prestamos soluciones en:";

  const quienesSomosList = [
    "Transporte de Mercancías",
    "Servicios Logísticos",
    "Distribución de última Milla",
    "Entregas Críticas"
  ];

  const sentimientoText = `Se dice que quien conoce el llano, de él se enamora y jamás lo deja...

Y aunque han transcurrido más de 20 años transitando por lo que anteriormente eran caminos con barro y hoy en su mayoría son vías de progreso en las que transportamos diariamente el esfuerzo y los sueños de sus comunidades, aún nos enorgullece poder ser testigos de su progreso, su crecimiento, sus logros, incluso sus dificultades, las cuales hemos aprendido juntos a enfrentar a la cara, a levantarnos y seguir adelante. 

Para nosotros cada día esta bella región nos entrega más de lo que le entregamos nosotros a ella y en tal sentido solo tenemos palabras de agradecimiento por la confianza depositada en nuestros servicios, y este amanecer que apreciamos todos los días así como otras bellas imágenes que usted podrá apreciar en algunas de nuestras páginas es nuestro homenaje a este llano que tanto apreciamos y al que no queremos dejar.`;

  const premisaText = `Somos un equipo multidisciplinario de profesionales enfocados en que primero está el cliente, en tal sentido estamos conscientes que en cada lugar donde llegamos lo representamos a usted y que si cumplimos bien con nuestra misión la suya estará cumplida.

Nos esforzamos no solo por cumplir nuestra promesa de servicio, nos esforzamos por continuamente superar sus expectativas, y para lograrlo diariamente monitoreamos nuestros indicadores pero aún vamos más allá, ya que colocamos todo nuestro empeño en entender los requerimientos específicos de cada empresa, de cada persona, pues al final del día lo único que importa es la experiencia de servicio que hemos entregado.`;

  const getBg = (isActive: boolean) => (isActive ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.1)");
  const hoverBg = "rgba(255, 255, 255, 0.15)";

  return (
    <div className="caja-s" onClick={closeContent} style={containerStyle}>
      <div style={innerStyle}>
        {/* Botones principales */}
        <div style={opcionesMainStyle}>
          {[
            { id: "contenido1" as MainContent, label: "¿Quienes Somos?" },
            { id: "contenido2" as MainContent, label: "Nuestro Sentimiento" },
            { id: "contenido3" as MainContent, label: "Nuestra Premisa" },
          ].map(({ id, label }) => {
            const isActive = activeContent === id;
            return (
              <button
                key={id}
                className={`opcion-s ${isActive ? "activo" : ""}`}
                onClick={(e) => showContent(id, e)}
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

        {/* Contenido Quienes Somos */}
        {activeContent === "contenido1" && (
          <section style={cardStyle}>
            <h3 style={headingStyle}>¿Quienes Somos?</h3>
            <div style={{ marginTop: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>{quienesSomosText}</p>
              <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem', fontSize: '1.1rem' }}>
                {quienesSomosList.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#8fd3c7' }}>°</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Contenido Nuestro Sentimiento */}
        {activeContent === "contenido2" && (
          <section style={cardStyle}>
            <h3 style={headingStyle}>Nuestro Sentimiento</h3>
            <div style={{ marginTop: '1.5rem', lineHeight: '1.8', whiteSpace: 'pre-line', fontSize: '1.2rem' }}>
              <p>{sentimientoText}</p>
            </div>
          </section>
        )}

        {/* Contenido Nuestra Premisa */}
        {activeContent === "contenido3" && (
          <section style={cardStyle}>
            <h3 style={headingStyle}>Nuestra Premisa</h3>
            <div style={{ marginTop: '1.5rem', lineHeight: '1.8', whiteSpace: 'pre-line', fontSize: '1.2rem' }}>
              <p>{premisaText}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
