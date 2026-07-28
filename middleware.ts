import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Strip ?mobile=true des anciennes URLs Jimdo — Google les traite comme du
// contenu duplique (rapport Search Console : "Exploree, actuellement non indexee").
// Un redirect declaratif dans next.config n'est pas possible : Next.js preserve
// les query params vers la destination meme si la key est dans `has`, ce qui
// cree une boucle infinie.
export function middleware(req: NextRequest) {
  const { searchParams, pathname } = req.nextUrl;
  if (searchParams.has('mobile')) {
    const url = req.nextUrl.clone();
    url.searchParams.delete('mobile');
    url.pathname = pathname;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Skip Next internals, static files, and API routes.
  matcher: '/((?!_next/|api/|images/|icons/|favicon.ico|robots.txt|sitemap.*|manifest.json).*)',
};
