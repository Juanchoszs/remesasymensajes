import Background from './Background';
import NosotrosContent from "@/components/nosotros-content";

export const metadata = {
  title: "Remesas y Mensajes LTDA | Servicios",
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Background />
      <div className="relative z-10">
        <NosotrosContent />
      </div>
    </div>
  )
}
