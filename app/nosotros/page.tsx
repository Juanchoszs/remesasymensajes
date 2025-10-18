import NosotrosContent from "@/components/nosotros-content"

export const metadata = {
  title: "Remesas y Mensajes LTDA | Nosotros",
}

export default function NosotrosPage() {
  return (
    <div style={{ backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=atardecer llano colombiano)" }}>
      {/* BACKGROUND IMAGE: static/img/fondos/atardecer.webp */}
      <NosotrosContent />
    </div>
  )
}
