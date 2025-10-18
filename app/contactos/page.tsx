import ContactosContent from "@/components/contactos-content"
import Background from './Background';

export const metadata = {
  title: "Remesas y Mensajes LTDA | Contactos",
}

export default function ContactosPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Background />
      <div className="relative z-10">
        <ContactosContent />
      </div>
    </div>
  )
}
