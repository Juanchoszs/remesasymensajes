import ContactosContent from "@/components/contactos-content"
import Footer from "@/components/footer"
import Background from './Background';

export const metadata = {
  title: "Remesas y Mensajes LTDA | Contactos",
}

export default function ContactosPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Fondo con z-index más bajo */}
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex-grow pt-[5vh] pb-[25vh] md:pb-[15vh] lg:pb-[10vh]">
        <ContactosContent />
      </div>
      
      </div>
  )
}
