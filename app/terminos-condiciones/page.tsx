import TerminosContent from "@/components/terminos-content"
import Background from '@/app/contactos/Background';
export const metadata = {
  title: "Remesas y Mensajes LTDA | Términos y Condiciones",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Background />
    <div className="relative z-10"></div>
      <TerminosContent />
    </div>
  )
}
  