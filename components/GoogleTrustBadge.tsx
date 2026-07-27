/**
 * Badge de confiance Google — élégant, cliquable, discret.
 * Visible dès le hero pour un nouveau visiteur (social proof < 1 seconde).
 * URL centralisée dans GoogleReviewsButton pour ne rien maintenir en double.
 */
const GOOGLE_REVIEWS_URL = 'https://share.google/APD5FPIs3qZWHRu2P';

interface Props {
  rating: number;
  count: number;
  /** Palette : "light" (hero sombre, mobile) ou "dark" (fond clair) */
  theme?: 'light' | 'dark';
  className?: string;
}

function GoogleG({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="flex-shrink-0">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

export function GoogleTrustBadge({ rating, count, theme = 'light', className = '' }: Props) {
  const stars = Math.round(rating * 2) / 2; // arrondi au demi-étoile
  const rounded = rating.toFixed(1);

  const styles = theme === 'light'
    ? 'bg-white/10 hover:bg-white/15 border-white/25 hover:border-white/40 text-white backdrop-blur-md'
    : 'bg-white hover:bg-gray-50 border-black/10 hover:border-black/20 text-ink shadow-sm hover:shadow';

  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Note ${rounded} sur 5 basée sur ${count} avis Google — voir les avis (ouvre dans un nouvel onglet)`}
      className={`group inline-flex items-center gap-2.5 border rounded-full pl-3 pr-4 py-2 text-sm transition-all ${styles} ${className}`}
    >
      <GoogleG size={16} />
      <span className="flex items-center gap-1" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <svg
            key={n}
            width="12" height="12" viewBox="0 0 20 20"
            className={n <= stars ? 'fill-[#FBBC04]' : 'fill-current opacity-25'}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </span>
      <span className="font-semibold">{rounded}</span>
      <span className={theme === 'light' ? 'text-white/70' : 'text-warm-gray'}>
        · {count} avis Google
      </span>
    </a>
  );
}
