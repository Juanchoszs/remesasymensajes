'use client';

import { useEffect } from 'react';

export default function Background() {
  useEffect(() => {
    document.body.classList.add('contact-page');
    return () => {
      document.body.classList.remove('contact-page');
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{
        backgroundImage: 'url(/atardecer.webp)'
      }}
    />
  );
}
