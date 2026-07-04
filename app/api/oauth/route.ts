import { NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * Point d'entrée OAuth pour Decap CMS (backend GitHub).
 * Redirige l'éditeur vers la page d'autorisation GitHub.
 *
 * Variables d'environnement requises (Vercel → Settings → Environment Variables) :
 *  - OAUTH_GITHUB_CLIENT_ID
 *  - OAUTH_GITHUB_CLIENT_SECRET
 */
export async function GET(request: Request) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return new NextResponse('Configuration manquante : OAUTH_GITHUB_CLIENT_ID', { status: 500 });
  }

  const origin = new URL(request.url).origin;
  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', clientId);
  authorizeUrl.searchParams.set('redirect_uri', `${origin}/api/callback`);
  authorizeUrl.searchParams.set('scope', 'repo,user');
  authorizeUrl.searchParams.set('state', crypto.randomBytes(16).toString('hex'));

  return NextResponse.redirect(authorizeUrl.toString());
}
