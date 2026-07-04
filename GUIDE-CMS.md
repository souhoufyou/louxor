# Guide CMS — Administration du contenu du site

Le site dispose d'une interface d'administration (**Decap CMS**) permettant de modifier
les textes, photos, articles de blog et avis **sans toucher au code**.

---

## 1. Tester dès maintenant en local (sans GitHub)

Dans deux terminaux séparés, à la racine du projet :

```bash
npm run dev    # terminal 1 — le site  (http://localhost:3000)
npm run cms    # terminal 2 — le serveur local du CMS
```

Puis ouvrir **http://localhost:3000/admin** et cliquer sur « Se connecter »
(aucun mot de passe en mode local). Les modifications sont enregistrées
directement dans les fichiers du projet.

---

## 2. Mise en production (à faire une seule fois)

Pour que le CMS fonctionne sur le site en ligne (`/admin`), il faut relier le
projet à GitHub et Vercel. Étapes :

### Étape A — Créer un compte et un dépôt GitHub

1. Créer un compte gratuit sur https://github.com/signup
2. Créer un **dépôt privé** (bouton « New repository »), par ex. `site-louxor`
3. Pousser le code du projet :

```bash
git remote add origin https://github.com/VOTRE-COMPTE/site-louxor.git
git push -u origin master
```

### Étape B — Connecter Vercel au dépôt

1. Sur https://vercel.com → ouvrir le projet du site
2. `Settings → Git → Connect Git Repository` → choisir le dépôt créé
3. Désormais, **chaque modification publiée dans le CMS redéploie
   automatiquement le site** (1 à 2 minutes).

### Étape C — Créer l'application OAuth GitHub (connexion sécurisée au CMS)

1. GitHub → `Settings → Developer settings → OAuth Apps → New OAuth App`
2. Remplir :
   - **Application name** : `CMS Guide Francophone Louxor`
   - **Homepage URL** : `https://www.guidefrancophonelouxor.com`
   - **Authorization callback URL** : `https://www.guidefrancophonelouxor.com/api/callback`
3. Copier le **Client ID**, puis générer et copier le **Client Secret**

### Étape D — Déclarer les clés dans Vercel

Vercel → projet → `Settings → Environment Variables`, ajouter :

| Nom | Valeur |
|---|---|
| `OAUTH_GITHUB_CLIENT_ID` | le Client ID de l'étape C |
| `OAUTH_GITHUB_CLIENT_SECRET` | le Client Secret de l'étape C |

### Étape E — Renseigner le dépôt dans la config du CMS

Dans [public/admin/config.yml](public/admin/config.yml), remplacer :

```yaml
repo: VOTRE-COMPTE/VOTRE-DEPOT
```

par le vrai dépôt (ex. `hisham-louxor/site-louxor`), puis pousser le changement.

### Étape F — Donner l'accès à un éditeur (ex. Hisham)

L'éditeur doit avoir un compte GitHub **invité comme collaborateur** du dépôt :
GitHub → dépôt → `Settings → Collaborators → Add people`.
Il pourra alors se connecter sur `https://www.guidefrancophonelouxor.com/admin`
avec son compte GitHub.

---

## 3. Ce qui est modifiable dans le CMS

| Collection | Contenu |
|---|---|
| **Articles de blog** | Créer/modifier les articles (titre, texte, image, SEO) |
| **Pages destinations** | Louxor, Le Caire, Assouan, Hurghada : textes, FAQ, galeries |
| **Pages excursions** | Programmes, prix, inclus/non inclus, FAQ |
| **Avis clients** | Ajouter ou corriger les avis du livre d'or |
| **Paramètres du site** | Bio du guide, téléphone, email, réseaux sociaux, menu |
| **Media** | Téléverser des photos (enregistrées dans `public/images/uploads`) |

## Conseils d'utilisation

- **Photos** : privilégier le format paysage, moins de 500 Ko si possible
  (les grosses photos ralentissent le site).
- **Titres Google** : rester sous ~60 caractères.
- **Descriptions Google** : viser 150–160 caractères.
- Après « Publier », le site en ligne se met à jour en 1 à 2 minutes.
