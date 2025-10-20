import GarantiasContent from "@/components/garantias-content"
import Background from '@/app/servicios/Background';

export const metadata = {
  title: "Remesas y Mensajes LTDA | Servicios",
}

export default function GarantiasPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Background />
      <div className="relative z-10">
        <GarantiasContent />
      </div>
    </div>
  )
}

