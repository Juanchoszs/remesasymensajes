import ServiciosContent from "@/components/servicios-content"
import Background from './Background';

export const metadata = {
  title: "Remesas y Mensajes LTDA | Servicios",
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Background />
      <div className="relative z-10">
        <ServiciosContent />
      </div>
    </div>
  )
}
