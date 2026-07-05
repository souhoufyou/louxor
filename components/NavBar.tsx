'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone, Menu, X, MessageCircle, ChevronDown } from 'lucide-react';

type NavItem =
  | { label: string; path: string; children?: undefined }
  | { label: string; path: string; children: { label: string; path: string }[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Louxor',
    path: '/louxor',
    children: [
      { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
      { label: "Temple d'Hatchepsout", path: '/louxor/temple-hatchepsout' },
      { label: 'Colosses de Memnon', path: '/louxor/colosses-de-memnon' },
      { label: 'Temple de Karnak', path: '/louxor/temple-de-karnak' },
      { label: 'Temple de Louxor', path: '/louxor/temple-de-louxor' },
      { label: 'Vallée des Reines', path: '/louxor/vallee-des-reines' },
      { label: 'Rive Ouest', path: '/louxor/rive-ouest' },
      { label: 'Rive Est', path: '/louxor/rive-est' },
      { label: 'Montgolfière', path: '/louxor/montgolfiere' },
      { label: 'Louxor en 1 jour', path: '/louxor/itineraire-1-jour' },
      { label: 'Louxor en 2 jours', path: '/louxor/itineraire-2-jours' },
      { label: 'Louxor en 3 jours', path: '/louxor/itineraire-3-jours' },
    ],
  },
  {
    label: 'Mer Rouge',
    path: '/mer-rouge',
    children: [
      { label: "Vue d'ensemble", path: '/mer-rouge' },
      { label: 'Hurghada', path: '/mer-rouge/hurghada' },
      { label: 'Makadi Bay', path: '/mer-rouge/makadi' },
      { label: 'Safaga', path: '/mer-rouge/safaga' },
      { label: 'Soma Bay', path: '/mer-rouge/soma-bay' },
      { label: 'Marsa Alam', path: '/mer-rouge/marsa-alam' },
    ],
  },
  {
    label: 'Excursions',
    path: '/excursions',
    children: [
      { label: 'Toutes les excursions', path: '/excursions' },
      { label: 'Hurghada → Louxor', path: '/excursions/depuis-hurghada-vers-louxor' },
      { label: 'Hurghada → Le Caire', path: '/excursions/depuis-hurghada-vers-le-caire' },
      { label: 'Makadi → Louxor', path: '/excursions/depuis-makadi-vers-louxor' },
      { label: 'Safaga → Louxor', path: '/excursions/depuis-safaga-vers-louxor' },
      { label: 'Soma Bay → Louxor', path: '/excursions/depuis-soma-bay-vers-louxor' },
      { label: 'Marsa Alam → Louxor', path: '/excursions/depuis-marsa-alam-vers-louxor' },
    ],
  },
  { label: 'Croisières', path: '/croisieres-en-egypte-sur-le-nil' },
  { label: 'Blog', path: '/blog' },
  { label: 'À propos', path: '/a-propos' },
];

function DropdownMenu({ item, closeAll }: { item: NavItem & { children: { label: string; path: string }[] }; closeAll: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <Link
        href={item.path}
        className="flex items-center gap-1 text-white/80 hover:text-gold text-[0.8125rem] font-medium tracking-wide transition-colors duration-200 link-underline py-1 whitespace-nowrap"
        onClick={closeAll}
      >
        {item.label}
        <ChevronDown
          size={12}
          strokeWidth={2.5}
          className={`transition-transform duration-200 opacity-70 ${open ? 'rotate-180' : ''}`}
        />
      </Link>

      {open && (
        <div
          className="absolute left-0 top-full mt-1 min-w-[220px] bg-nil-deep/98 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 z-50"
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          {item.children.map((child) => (
            <Link
              key={child.path}
              href={child.path}
              onClick={closeAll}
              className="block px-4 py-2.5 text-[0.8125rem] text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

function MobileAccordion({
  item,
  closeDrawer,
}: {
  item: NavItem & { children: { label: string; path: string }[] };
  closeDrawer: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-white/8">
      <div className="flex items-center justify-between">
        <Link
          href={item.path}
          onClick={closeDrawer}
          className="flex-1 py-4 text-white/90 hover:text-gold text-lg font-light font-display transition-colors"
        >
          {item.label}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="p-4 text-white/60 hover:text-gold transition-colors"
          aria-label={`${open ? 'Fermer' : 'Ouvrir'} le sous-menu ${item.label}`}
        >
          <ChevronDown
            size={16}
            strokeWidth={2}
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {open && (
        <ul className="pb-2 list-none p-0 m-0">
          {item.children.map((child) => (
            <li key={child.path}>
              <Link
                href={child.path}
                onClick={closeDrawer}
                className="block py-2.5 pl-6 pr-4 text-sm text-white/60 hover:text-gold transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  // Pages sans hero sombre → navbar opaque dès le rendu serveur (évite le flash transparent)
  const [scrolled, setScrolled] = useState(!isHome);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeAll = () => setDrawerOpen(false);

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    const handle = () => setScrolled(window.scrollY > 60);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-nil-deep/96 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-luxury flex items-center justify-between py-4"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 flex-shrink-0"
          aria-label="Accueil — Guide Francophone Louxor"
        >
          <svg
            viewBox="-36 -36 72 68"
            width="38"
            height="36"
            aria-hidden="true"
            className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          >
            <path d="M0,0 Q15,-2 32,-6"   stroke="#C9A961" strokeWidth="2.0" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q13,-9 28,-18"  stroke="#C9A961" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q9,-15 19,-28"  stroke="#C9A961" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q4,-17 9,-32"   stroke="#C9A961" strokeWidth="1.0" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q-15,-2 -32,-6"  stroke="#C9A961" strokeWidth="2.0" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q-13,-9 -28,-18" stroke="#C9A961" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q-9,-15 -19,-28" stroke="#C9A961" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q-4,-17 -9,-32"  stroke="#C9A961" strokeWidth="1.0" fill="none" strokeLinecap="round"/>
            <path d="M0,0 Q-4,16 0,30 Q4,16 0,0" stroke="#C9A961" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <circle r="2.5" fill="#C9A961"/>
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-light text-white group-hover:text-gold transition-colors duration-300">
              Guide Francophone
            </span>
            <span className="text-gold text-[0.65rem] font-body tracking-[0.2em] uppercase mt-0.5">
              Louxor · Égypte
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-5 list-none p-0 m-0 flex-nowrap">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DropdownMenu key={item.path} item={item as NavItem & { children: { label: string; path: string }[] }} closeAll={closeAll} />
            ) : (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-white/80 hover:text-gold text-[0.8125rem] font-medium tracking-wide transition-colors duration-200 link-underline whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop actions */}
        <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:+201002086724"
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
            aria-label="Appeler Hisham"
          >
            <Phone size={13} strokeWidth={2} />
            <span className="hidden xl:inline">+20 100 208 6724</span>
          </a>
          <a
            href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20un%20devis%20pour%20l%27%C3%89gypte."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white hover:text-white/90 text-sm transition-colors bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full px-3 py-1.5"
            aria-label="WhatsApp"
          >
            <MessageCircle size={14} strokeWidth={2} className="text-[#25D366]" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
          <Link href="/contact" className="btn btn-primary py-2 px-5 text-xs shadow-md">
            Devis gratuit
          </Link>
        </div>

        {/* Mobile hamburger — z-index supérieur au drawer */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="xl:hidden text-white p-2 -mr-2 relative z-[60]"
          aria-label={drawerOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-menu"
        >
          <Menu size={24} className={`transition-all duration-200 ${drawerOpen ? 'opacity-0 scale-75 absolute' : 'opacity-100 scale-100'}`} />
          <X size={24} className={`transition-all duration-200 ${drawerOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'}`} />
        </button>
      </nav>
    </header>

      {/* Mobile drawer — hors du <header> pour éviter que le backdrop-blur du header
          (qui crée un containing block CSS) ne casse le "fixed inset-0" du drawer */}
      <div
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`xl:hidden fixed inset-0 top-[64px] z-50 bg-nil-deep/98 backdrop-blur-lg transition-all duration-300 overflow-y-auto ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-luxury pt-4 pb-24">
          <ul className="flex flex-col list-none p-0 m-0">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <MobileAccordion
                  key={item.path}
                  item={item as NavItem & { children: { label: string; path: string }[] }}
                  closeDrawer={closeAll}
                />
              ) : (
                <li key={item.path} className="border-b border-white/8">
                  <Link
                    href={item.path}
                    onClick={closeAll}
                    className="block py-4 text-white/90 hover:text-gold text-lg font-light font-display transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* WhatsApp pinned */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20un%20devis."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-xl py-4 text-base font-semibold"
              onClick={closeAll}
            >
              <MessageCircle size={20} />
              Contacter sur WhatsApp
            </a>
            <a
              href="tel:+201002086724"
              className="flex items-center gap-3 text-white/80 text-base py-2"
            >
              <Phone size={18} className="text-gold" />
              +20 100 208 6724
            </a>
            <Link
              href="/contact"
              onClick={closeAll}
              className="btn btn-primary mt-2 w-full text-center"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
