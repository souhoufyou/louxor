/**
 * Callback OAuth pour Decap CMS (backend GitHub).
 * Échange le code d'autorisation contre un jeton d'accès, puis le transmet
 * à la fenêtre du CMS via postMessage (protocole attendu par Decap).
 */
export async function GET(request: Request) {
  const code = new URL(request.url).searchParams.get('code');
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  let payload: string;

  if (!code || !clientId || !clientSecret) {
    payload = `authorization:github:error:${JSON.stringify({
      error: 'Code OAuth ou configuration serveur manquants',
    })}`;
  } else {
    try {
      const res = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
      });
      const data = (await res.json()) as { access_token?: string; error?: string };
      payload = data.access_token
        ? `authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}`
        : `authorization:github:error:${JSON.stringify(data)}`;
    } catch (err) {
      payload = `authorization:github:error:${JSON.stringify({ error: String(err) })}`;
    }
  }

  const html = `<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><title>Connexion…</title></head>
<body>
<p>Connexion en cours… Vous pouvez fermer cette fenêtre si elle ne se ferme pas seule.</p>
<script>
  (function () {
    var payload = ${JSON.stringify(payload)};
    // Poignée de main Decap : on annonce l'autorisation, la fenêtre du CMS
    // répond, puis on lui transmet le jeton.
    window.addEventListener('message', function (e) {
      window.opener.postMessage(payload, e.origin);
    }, { once: true });
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body>
</html>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
