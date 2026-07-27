import type { ReactNode } from 'react';

/**
 * Bouton "Voir sur Google" — logo Google officiel (couleurs).
 * URL centralisée ici, à mettre à jour à un seul endroit si le lien change.
 */
const GOOGLE_REVIEWS_URL = 'https://share.google/APD5FPIs3qZWHRu2P';

type Variant = 'primary' | 'outline-white' | 'link';

interface Props {
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}

const VARIANTS: Record<Variant, string> = {
  // Bouton clair pour fonds sombres — inspire confiance avec les couleurs Google
  primary:
    'inline-flex items-center gap-2.5 bg-white text-[#1F1F1F] hover:bg-gray-50 rounded-full px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all',
  // Bouton fantôme sur fond sombre
  'outline-white':
    'inline-flex items-center gap-2.5 border border-white/30 hover:border-white text-white hover:bg-white/10 rounded-full px-6 py-3 text-sm font-medium transition-all',
  // Simple lien texte, pour les zones où un bouton serait de trop
  link:
    'inline-flex items-center gap-2 text-sm text-gold-accessible hover:text-gold underline underline-offset-4 decoration-gold/30 hover:decoration-gold transition-colors',
};

/** Logo Google officiel — SVG optimisé, couleurs de la marque. */
function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

export function GoogleReviewsButton({
  variant = 'primary',
  children = 'Voir nos avis sur Google',
  className = '',
}: Props) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${VARIANTS[variant]} ${className}`}
      aria-label="Consulter les avis Google de Guide Francophone Louxor (ouvre dans un nouvel onglet)"
    >
      <GoogleG size={variant === 'link' ? 14 : 18} />
      <span>{children}</span>
    </a>
  );
}

/** Petit lien discret pour inviter à laisser un avis (bas de la page /avis). */
export function LeaveGoogleReviewLink() {
  return (
    <GoogleReviewsButton variant="link">
      Vous avez voyagé avec moi ? Laissez un avis
    </GoogleReviewsButton>
  );
}
