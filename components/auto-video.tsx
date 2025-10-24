"use client"

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react"

export type AutoVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string
}

const AutoVideo = forwardRef<HTMLVideoElement, AutoVideoProps>(
  ({ src, className, style, muted = true, loop = true, preload = "auto", playsInline = true, ...rest }, ref) => {
    const localRef = useRef<HTMLVideoElement | null>(null)

    useImperativeHandle(ref, () => localRef.current as HTMLVideoElement)

    useEffect(() => {
      const video = localRef.current
      if (!video) return

      // Atributos críticos para autoplay móvil y primer frame visible
      video.muted = true
      video.preload = (preload as any) ?? "auto"

      let observer: IntersectionObserver | null = null

      const tryPlay = async () => {
        try {
          await video.play()
        } catch {
          // Silenciar errores de autoplay bloqueado (iOS/Android)
        }
      }

      const onCanPlay = () => {
        tryPlay()
      }

      video.addEventListener("canplay", onCanPlay)

      // Reproducir/pausar según visibilidad en viewport
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
              tryPlay()
            } else {
              video.pause()
            }
          })
        },
        { threshold: [0, 0.2, 0.5, 1] }
      )

      observer.observe(video)

      return () => {
        video.removeEventListener("canplay", onCanPlay)
        if (observer) observer.disconnect()
      }
    }, [preload])

    return (
      <video
        ref={localRef}
        src={src}
        className={className}
        muted={muted}
        loop={loop}
        preload={preload}
        playsInline={playsInline}
        aria-label="Video de la empresa"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          backgroundColor: "#000",
          ...style,
        }}
        {...rest}
      />
    )
  }
)

AutoVideo.displayName = "AutoVideo"

export default AutoVideo
