import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BlogGrid } from '@/components/BlogGrid';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb, schemaWebPage } from '@/lib/schema';
import { getAllPosts } from '@/lib/blog';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Blog — Conseils et récits de voyages en Égypte',
    description:
      "Conseils pratiques, récits de voyages et anecdotes d'égyptologue : tout savoir pour préparer votre voyage en Égypte avec un guide francophone.",
    path: '/blog',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaWebPage({
          name: 'Blog — Voyages en Égypte par Hisham',
          description:
            'Conseils pratiques, récits et guides par destination pour préparer votre séjour en Égypte avec un guide égyptologue francophone.',
          path: '/blog',
        })}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'Blog', path: '/blog' }])} />

      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section aria-labelledby="blog-title" className="pt-16 pb-16 bg-parchment-gradient">
          <div className="container-luxury">
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex gap-2 text-caption list-none p-0">
                <li><Link href="/" className="hover:text-gold transition-colors">Accueil</Link></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-gold">Blog</li>
              </ol>
            </nav>
            <span className="text-eyebrow">Le blog</span>
            <h1 id="blog-title" className="text-display-xl mt-3 text-balance">
              Conseils et récits de voyages en Égypte
            </h1>
            <p className="text-text-muted mt-4 max-w-2xl text-lg">
              Hisham partage son savoir d&apos;égyptologue : guides de visite, conseils pratiques,
              anecdotes historiques et récits d&apos;expéditions pour vous aider à préparer votre
              voyage de rêve.
            </p>
          </div>
        </section>

        {/* ── Articles avec filtres ─────────────────────────────── */}
        <section aria-labelledby="articles-title" className="section-y">
          <div className="container-luxury">
            <h2 id="articles-title" className="sr-only">
              Articles du blog
            </h2>
            <BlogGrid posts={posts} />
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section aria-labelledby="cta-blog" className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 id="cta-blog" className="text-display-md text-white">
              Prêt à vivre votre aventure égyptienne ?
            </h2>
            <p className="text-gold-muted mt-4">
              Hisham organise votre voyage sur mesure — de l&apos;aéroport à l&apos;hôtel, de
              Louxor au Caire.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mt-8">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <Link href="/excursions" className="btn btn-outline-white">
                Voir les excursions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
