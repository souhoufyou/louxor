import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { ContactFormFull } from '@/components/ContactFormFull';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb, schemaWebPage, schemaContactPoint } from '@/lib/schema';
import { getSite } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Contact & Devis — Voyages sur mesure en Égypte',
    description:
      'Demandez un devis gratuit pour votre voyage en Égypte. Hisham, guide francophone égyptologue, répond sous 24h par email, téléphone ou WhatsApp.',
    path: '/contact',
  });
}

export default async function ContactPage() {
  const site = await getSite();

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaContactPoint()} />
      <JsonLd
        data={schemaWebPage({
          name: 'Contact & Devis — Guide Francophone Louxor',
          description: 'Demandez votre devis personnalisé pour un voyage en Égypte. Réponse sous 24h.',
          path: '/contact',
        })}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'Contact', path: '/contact' }])} />

      <main id="main-content">
        {/* ── En-tête ────────────────────────────────────────────── */}
        <section className="pt-16 pb-16 bg-parchment-gradient">
          <div className="container-luxury">
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex gap-2 text-caption list-none p-0">
                <li><Link href="/" className="hover:text-gold transition-colors">Accueil</Link></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-gold">Contact</li>
              </ol>
            </nav>
            <span className="text-eyebrow">Nous contacter</span>
            <h1 className="text-display-xl mt-3 text-balance">
              Demander un devis gratuit
            </h1>
            <p className="text-text-muted mt-4 max-w-2xl text-lg">
              Décrivez votre projet de voyage et Hisham vous répond sous{' '}
              <strong>24 heures</strong> avec un programme sur mesure et un devis personnalisé.
            </p>

            {/* Réponse 24h badge */}
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm font-medium text-gold-accessible">
              <Clock size={14} />
              Réponse garantie sous 24h · Aucun engagement
            </div>
          </div>
        </section>

        {/* ── Formulaire + Coordonnées ───────────────────────────── */}
        <section aria-labelledby="contact-section" className="section-y">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-[1fr_400px] gap-16">
              {/* ── Formulaire ──────────────────────────────────── */}
              <div>
                <h2 id="contact-section" className="text-display-md mb-8">
                  Formulaire de devis
                </h2>
                <ContactFormFull />
              </div>

              {/* ── Coordonnées ─────────────────────────────────── */}
              <aside aria-labelledby="coordonnees-title" className="space-y-6">
                <h2 id="coordonnees-title" className="text-display-md">
                  Contact direct
                </h2>

                {/* Téléphone — gros et visible */}
                <div className="surface p-6 border-gold-accent">
                  <p className="text-eyebrow mb-3">Téléphone & WhatsApp</p>
                  <a
                    href={`tel:${site.contact.phoneRaw}`}
                    className="font-display text-3xl hover:text-gold transition-colors flex items-center gap-3"
                    aria-label="Appeler Hisham"
                  >
                    <Phone size={24} className="text-gold shrink-0" />
                    {site.contact.phone}
                  </a>
                  <p className="text-caption mt-2">Disponible 7j/7 · 7h–21h heure égyptienne</p>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${site.contact.whatsapp}?text=Bonjour%20Hisham%2C%20je%20souhaite%20organiser%20un%20voyage%20en%20%C3%89gypte.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full gap-3 text-base py-4"
                >
                  <MessageCircle size={20} />
                  Écrire sur WhatsApp
                </a>

                {/* Email */}
                <div className="surface p-5">
                  <p className="text-eyebrow mb-2">Email</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    <Mail size={16} className="text-gold shrink-0" />
                    {site.contact.email}
                  </a>
                  <p className="text-caption mt-1">Réponse garantie sous 24 heures</p>
                </div>

                {/* Adresse */}
                <div className="surface p-5">
                  <p className="text-eyebrow mb-2">Adresse</p>
                  <address className="not-italic flex items-start gap-2 text-text-muted">
                    <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                    <span>{site.contact.address}</span>
                  </address>
                </div>

                {/* Horaires */}
                <div className="surface p-5">
                  <p className="text-eyebrow mb-3">Heures de disponibilité</p>
                  <ul className="space-y-1 text-sm list-none p-0">
                    <li className="flex justify-between">
                      <span>Lundi – Vendredi</span>
                      <span className="font-medium">7h – 21h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi – Dimanche</span>
                      <span className="font-medium">8h – 19h</span>
                    </li>
                  </ul>
                  <p className="text-caption mt-2">Heure locale égyptienne (UTC+3)</p>
                </div>

                {/* Langues */}
                <div className="surface p-5">
                  <p className="text-eyebrow mb-3">Langues parlées</p>
                  <ul className="flex gap-2 flex-wrap list-none p-0">
                    {site.languages.map((lang) => (
                      <li key={lang} className="badge badge-gold">
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100063480453745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gold"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  {site.social.facebookPageName}
                </a>

                {/* Carte Google Maps */}
                <div className="rounded-xl overflow-hidden border border-border aspect-video">
                  <iframe
                    title="Louxor, Égypte"
                    src="https://maps.google.com/maps?q=25.6872,32.6396&hl=fr&z=14&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0"
                  />
                </div>

                {/* Tarification */}
                <div className="surface p-6 border-gold-accent">
                  <h3 className="font-display text-lg">Tarification</h3>
                  <p className="text-text-muted mt-3 text-sm leading-relaxed">
                    {site.pricingNote}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
