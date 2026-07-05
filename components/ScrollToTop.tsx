'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Remonter en haut de la page"
      className={`fixed bottom-28 right-7 z-40 w-10 h-10 rounded-full bg-nil-deep/90 backdrop-blur-sm border border-gold/30 text-gold hover:bg-nil hover:border-gold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[0_0_16px_rgba(201,169,97,0.4)] ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} strokeWidth={2} />
    </button>
  );
}
