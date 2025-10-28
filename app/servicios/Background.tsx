'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Background() {
  useEffect(() => {
    document.body.classList.add('contact-page');
    return () => {
      document.body.classList.remove('contact-page');
    };
  }, []);

  return (
    <div className="contact-bg" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: -1,
      overflow: 'hidden'
    }}>
      <Image
        src="/Carretera.webp"
        alt="Fondo de servicios"
        fill
        sizes="100vw"
        style={{ 
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        priority
        quality={75}
      />
    </div>
  );
}
