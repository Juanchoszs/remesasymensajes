export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/573106994902" target="_blank" className="whatsapp-button" rel="noreferrer">
      {/* IMAGE: Ícono normal de WhatsApp - static/img/iconos/whatsapp-normal.webp */}
      <img src="/whatsapp-icon-green-white.jpg" alt="Ícono de WhatsApp" className="whatsapp-icon normal" />
      {/* IMAGE: Ícono hover de WhatsApp - static/img/iconos/whatsapp-hover.webp */}
      <img src="/whatsapp-icon-green-silver.jpg" alt="Ícono de WhatsApp plateado" className="whatsapp-icon hover" />
    </a>
  )
}
