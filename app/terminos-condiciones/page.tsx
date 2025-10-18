import TerminosContent from "@/components/terminos-content"

export const metadata = {
  title: "Remesas y Mensajes LTDA | Términos y Condiciones",
}

export default function TerminosPage() {
  return (
    <div style={{ backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=rio creciente colombia)" }}>
      {/* BACKGROUND IMAGE: static/img/fondos/creciente.webp */}
      <TerminosContent />
    </div>
  )
}
