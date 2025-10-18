import GarantiasContent from "@/components/garantias-content"

export const metadata = {
  title: "Remesas y Mensajes LTDA | Garantías del Servicio",
}

export default function GarantiasPage() {
  return (
    <div style={{ backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=carretera colombia paisaje)" }}>
      {/* BACKGROUND IMAGE: static/img/fondos/Carretera.webp */}
      <GarantiasContent />
    </div>
  )
}
