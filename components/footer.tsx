'use client';

import { FaWhatsapp, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer relative">
      <div className="footer-left">
        <p>&copy; {currentYear} Remesas y Mensajes. Todos los derechos reservados</p>
      </div>
      <div className="footer-icons" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="https://x.com/remesasyms" className="icon-t" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <FaXTwitter style={{ fontSize: '1.5rem' }} />
        </a>
        <a 
          href="https://wa.me/573106994902" 
          target="_blank" 
          className="icon-t" 
          id="whatsapp-button" 
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <FaWhatsapp style={{ fontSize: '1.5rem', color: '#25D366' }} />
        </a>
        <a 
          href="https://www.linkedin.com/company/remesas-y-mensajes-ltd/" 
          className="icon-t"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <FaLinkedin style={{ fontSize: '1.5rem' }} />
        </a>
      </div>
    </footer>
  );
}
