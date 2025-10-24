"use client";

import React, { useState } from "react";

type MainContent = "terminos" | "proteccion" | "autorizacion";

export default function TerminosContent() {
  const [activeContent, setActiveContent] = useState<MainContent>('terminos');

  const showContent = (id: MainContent, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveContent(id);
  };

  const closeContent = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("caja-s")) {
      setActiveContent('terminos');
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
    maxHeight: "none",
    height: "auto",
    overflow: "visible"
  };

  const innerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    height: "auto",
    overflow: "visible"
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
    height: "auto",
    maxHeight: "none",
    overflow: "visible",
    boxSizing: "border-box"
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

  const terminosText = `
    Al ingresar a este sitio, usted acepta nuestras condiciones y políticas de uso.

    Respecto del contenido
    R&M no se hace responsables del uso, entendimiento e interpretación que el usuario haga del contenido presentado en nuestro web site www.remesasymensajes.com y sus micro sites. El contenido de estos sitios es desarrollado por R&M, y/o un tercero autorizado, por lo tanto, nos reservamos la facultad de modificar su contenido, su configuración y/o sus servicios sin notificación previa.

    Límite de responsabilidad
    R&M no asumen responsabilidad alguna por los daños y perjuicios que puedan derivarse de la utilización de los servicios y de los contenidos, o por la falta de veracidad y/o autenticidad de la información que el usuario proporcione acerca de sí mismo; por lo tanto como consecuencia del incumplimiento de cualquiera de las obligaciones derivadas de las condiciones de uso y de las que la ley establece con relación a la utilización de este web site el usuario responderá por los daños y perjuicios de toda naturaleza que R&M pueda sufrir, directa o indirectamente.
    Todo usuario asume y acepta que ni R&M y ningún tercero es responsable por los perjuicios que se deriven directa o indirectamente de la existencia, imposibilidad de uso o de acceso a este web site o a cualquiera de sus vínculos. En tal sentido, acepta que R&M no ofrece garantía sobre la exactitud e integridad del software, los servicios e información presentados en este web site. En tal sentido acepta que él, es el único responsable por las decisiones que adopte con base en la información o contenido de esta página o de sus vínculos o enlaces...
    Así mismo, los daños que puedan ocurrir por la presencia de virus y otros en los servicios prestados por terceros o cualquier consecuencia que pueda causar la prestación de dichos servicios, tampoco son responsabilidad de R&M y en particular, aunque no exclusivamente, R&M tampoco se hace responsable por daños y perjuicios que pueda provocar la suplantación de un tercero, efectuada por un usuario en cualquier clase de información.

    Derecho de propiedad
    Todo usuario acepta y reconoce que el contenido de este web site, está protegido por derechos de autor y en general, por las diferentes formas del derecho de propiedad y no podrá modificar, transmitir o distribuir el contenido incluido el código fuente y el software, lo anterior so pena de incurrir en responsabilidad civil y responsabilidad penal, según las normas vigentes.
  `;

  const proteccionDatosText = `
    En cumplimiento de la Ley 1581 de 2012, Decreto 1377 de 2013 y demás normas que traten y regulen sobre esta materia por la cual se dictan disposiciones para la protección de datos personales en Remesas y Mensajes Ltda en su calidad de responsable del tratamiento de datos.
    
    Remesas y Mensajes Ltda. Identificada con Nit 800.167.994-5, designa como responsable del tratamiento de la base de datos personales al funcionario de Sistema de Gestión y Cumplimiento, con sede principal en Bogotá, terminal terrestre de carga Bodega 45 Modulo 7 autopista Medellín vía Siberia kilómetro 3.5, Email informenos@remesaymensajes.com celular: 3106994902 fijo 8759184.

    Derechos de los titulares de la información
    Los siguientes son los derechos que como responsables del tratamiento de los datos personales garantizaremos en el tratamiento de nuestras bases de datos:

    ° Acceder, conocer, actualizar y rectificar sus datos personales como responsables del tratamiento; a este derecho se podrá ejercer, entre otros, frente a los datos parciales, anexados, incompletos, fraccionados, que induzcan a error, o aquellos cuyo tratamiento este expresamente prohibido o no haya sido autorizado.

    ° Solicitar autorización otorgada para el tratamiento de datos, mediante cualquier medio valido, salvo en los casos en que no es necesaria la autorización.

    ° Ser informado respecto del uso que se le ha dado a sus datos personales.
    ° Presentar ante la superintendencia de industria y Comercio, o la entidad que hiciere sus veces, quejas por infracciones a lo dispuesto en la ley 1581 de 2012 y las demás normas que la modifiquen, adicionen o complementen previo tramite de consulta o requerimiento.

    ° Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.

    ° Acceso gratuito a sus datos personales al menos una vez cada mes calendario, y cada vez que existan modificaciones sustanciales de la presente política que motiven nuevas consultas.

    Estos derechos podrán ser ejercidos por:

    ° El titular, quien deberá acreditar su identidad en forma suficiente.

    ° Los causahabientes del titular, quienes deberán acreditar tal capacidad.

    ° El representante y/o apoderado del titular, previa acreditación.

    ° Otro a favor o para el cual el titular hubiere estipulado.

    R&M como responsable y encargado del tratamiento de los datos personales reconoce la titu
  `;

  const autorizacionDatosText = `
    Por medio del presente documento, otorgo mi consentimiento previo, expreso e informado, a R&M para la recolección, almacenamiento, uso, circulación, transferencia o supresión de la información suministrada y toda aquella información adicional a la cual llegare a tener acceso en desarrollo de la relación bien sea comercial, laboral, contractual o legal. Declaro que, en cumplimiento en la normatividad de protección de datos personales, fui informado de las finalidades, y usos que tendrán mis datos personales, derechos y los canales de comunicación para:

    ° Efectuar gestiones pertinentes para el desarrollo de las distintas etapas contractuales con R&M y terceros que contraten con él, en desarrollo de los servicios ofrecidos y/o en desarrollo de cualquier relación comercial que tengan.

    ° Para fines comerciales, de servicio al cliente, acreditación y actualización; es decir, para todas aquellas actividades asociadas a la relación comercial o vinculo existente con R&M o terceros que contraten.

    ° Gestionar consultas, solicitudes, quejas y reclamos a través de nuestro canal web site http://www.remesasymensajes.com/contactenos para la atención al público o en el Email nvalencia@remesaymensajes.com

    ° Suministrar información y reporte de todas aquellas novedades o eventualidades que sucedan durante los servicios contratados.

    ° Dar a conocer y/o transmitir mis datos personales dentro del país a cualquier empresa o tercero como consecuencia de contrato o vínculo que lo requiera para el cumplimiento de sus finalidades.

    ° Crear bases de datos para los fines descritos en la política de tratamiento de datos.

    Así mismo, declaro que R&M me dio a conocer las finalidades para las cuales serán tratados mis datos personales, dando claridad y mayor énfasis en mi libertad de suministrar o no mi información y por lo tanto autorizar en aquellos casos en los que mis datos revisten la calidad de datos sensibles, R&M, adoptará medidas adicionales para:

    ° Reforzar el cumplimiento de los principios que regulan el tratamiento de la información personal.

    ° Ninguna actividad se condicione al suministro de datos personales sensibles

    ° Obtener autorización expresa de los titulares, antes de la ejecución de las actividades.

    Por lo tanto, autorizo bajo mi consentimiento tratar mi información personal de acuerdo con la política de tratamiento de datos personales de R&M.
  `;

  const getBg = (isActive: boolean) => (isActive ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.1)");
  const hoverBg = "rgba(255, 255, 255, 0.15)";

  return (
    <div className="caja-s" onClick={closeContent} style={containerStyle}>
      <div style={innerStyle}>
        {/* Botones principales */}
        <div style={opcionesMainStyle}>
          {[
            { id: "terminos" as MainContent, label: "Términos Legales" },
            { id: "proteccion" as MainContent, label: "Política de Protección de Datos" },
            { id: "autorizacion" as MainContent, label: "Autorización para el uso de Datos" },
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

        {/* Contenido Términos Legales */}
        {activeContent === "terminos" && (
          <section style={cardStyle}>
            <h3 style={headingStyle}>Términos Legales</h3>
            <div style={{
              whiteSpace: 'pre-line',
              marginTop: '1.5rem',
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}>
              <div style={{ padding: '0.5rem' }}>
                {terminosText}
              </div>
            </div>
          </section>
        )}

        {/* Contenido Política de Protección de Datos */}
        {activeContent === "proteccion" && (
          <section style={cardStyle}>
            <h3 style={headingStyle}>Política de Protección de Datos</h3>
            <div style={{
              whiteSpace: 'pre-line',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{ padding: '0.5rem' }}>
                {proteccionDatosText}
              </div>
            </div>
          </section>
        )}

        {/* Contenido Autorización para el Uso de Datos */}
        {activeContent === "autorizacion" && (
          <section style={cardStyle}>
            <h3 style={headingStyle}>Autorización para el Uso de Datos</h3>
            <div style={{
              whiteSpace: 'pre-line',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ padding: '0.5rem' }}>
                {autorizacionDatosText}
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <a 
                href="/TyC Remesas y Mensajes.pdf" 
                download
                style={{
                  ...buttonMainStyle,
                  display: 'inline-block',
                  padding: '0.8rem 1.5rem',
                  textDecoration: 'none',
                  color: 'white',
                  minWidth: '200px',
                  margin: '0 auto'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = getBg(activeContent === 'autorizacion');
                }}
              >
                Descargar PDF
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
