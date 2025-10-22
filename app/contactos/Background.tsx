'use client';

export default function Background() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url(/creciente.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
      }}
    />
  );
}
