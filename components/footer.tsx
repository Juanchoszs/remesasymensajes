export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-left">
        <p>&copy; 2025 Remesas y Mensajes. Todos los derechos reservados</p>
      </div>
      <div className="footer-icons">
        <a href="https://x.com/remesasyms" className="icon-t">
          <i className="fa-brands fa-x-twitter">𝕏</i>
        </a>
        <a href="https://wa.me/573106994902" target="_blank" className="icon-t" id="whatsapp-button" rel="noreferrer">
          <i className="fa-brands fa-whatsapp">📱</i>
        </a>
        <a href="https://www.linkedin.com/company/remesas-y-mensajes-ltd/" className="icon-t">
          <i className="fa-brands fa-linkedin">in</i>
        </a>
      </div>
    </footer>
  )
}
