'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Écoute globale des clics de conversion (WhatsApp, téléphone, e-mail).
 * Un seul listener couvre tout le site — inutile d'instrumenter chaque lien.
 */
export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.('a');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      const label = link.textContent?.trim().slice(0, 80) || '(sans texte)';
      const from = window.location.pathname;

      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackEvent('whatsapp_click', { link_label: label, page_path: from });
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_label: label, page_path: from });
      } else if (href.startsWith('mailto:')) {
        trackEvent('email_click', { link_label: label, page_path: from });
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
