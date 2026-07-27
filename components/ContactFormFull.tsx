'use client';

import { useState, useCallback } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface FormState {
  nom: string;
  email: string;
  telephone: string;
  dates: string;
  personnes: string;
  typeVoyage: string;
  message: string;
}

type FieldErrors = Partial<Record<'nom' | 'email' | 'message', string>>;

const EMPTY: FormState = {
  nom: '',
  email: '',
  telephone: '',
  dates: '',
  personnes: '',
  typeVoyage: '',
  message: '',
};

const TYPES_VOYAGE = [
  'Excursion journée',
  'Voyage culturel multi-sites',
  'Croisière sur le Nil',
  'Montgolfière à Louxor',
  'Circuit complet (10+ jours)',
  'Transfert aéroport',
  'Autre / Sur mesure',
];

function validate(form: FormState): FieldErrors {
  const e: FieldErrors = {};
  if (!form.nom.trim()) e.nom = 'Veuillez indiquer votre nom.';
  if (!form.email.trim()) e.email = 'Veuillez indiquer votre email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Format email invalide.';
  if (!form.message.trim()) e.message = 'Décrivez votre projet de voyage.';
  return e;
}

export function ContactFormFull() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const set = useCallback(
    (field: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const val = e.target.value;
        setForm((f) => {
          const next = { ...f, [field]: val };
          if (touched[field]) setErrors(validate(next));
          return next;
        });
      },
    [touched],
  );

  const blur = useCallback(
    (field: keyof FormState) => () => {
      setTouched((t) => ({ ...t, [field]: true }));
      setErrors((prev) => ({ ...prev, ...validate(form) }));
    },
    [form],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nom: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? 'Une erreur est survenue.');
        setStatus('error');
      } else {
        trackEvent('form_submit', {
          form_name: 'devis_complet',
          type_voyage: form.typeVoyage || '(non precise)',
        });
        setStatus('success');
      }
    } catch {
      setServerError('Impossible de joindre le serveur. Contactez-nous par WhatsApp.');
      setStatus('error');
    }
  };

  const ic = (field?: 'nom' | 'email' | 'message') =>
    `w-full border rounded-md px-4 py-3 bg-surface focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
      field && errors[field] ? 'border-red-400 focus:ring-red-300' : 'border-border'
    }`;

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-5 py-14 text-center">
        <CheckCircle size={56} className="text-gold" />
        <h2 className="text-display-md">Demande envoyée !</h2>
        <p className="text-text-muted max-w-sm leading-relaxed">
          Hisham a bien reçu votre message et vous répondra dans les{' '}
          <strong>24 heures</strong> par email ou téléphone.
        </p>
        <a
          href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20viens%20d'envoyer%20une%20demande%20de%20devis."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary mt-2"
        >
          Également joignable sur WhatsApp
        </a>
        <button
          onClick={() => {
            setStatus('idle');
            setForm(EMPTY);
            setTouched({});
            setErrors({});
          }}
          className="text-sm text-text-muted underline underline-offset-2"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-label="Formulaire de demande de devis"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium mb-1">
            Nom complet <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            autoComplete="name"
            value={form.nom}
            onChange={set('nom')}
            onBlur={blur('nom')}
            placeholder="Marie Dupont"
            className={ic('nom')}
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? 'err-nom' : undefined}
          />
          {errors.nom && (
            <p id="err-nom" role="alert" className="text-xs text-red-500 mt-1">
              {errors.nom}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={set('email')}
            onBlur={blur('email')}
            placeholder="marie@exemple.com"
            className={ic('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
          />
          {errors.email && (
            <p id="err-email" role="alert" className="text-xs text-red-500 mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium mb-1">
            Téléphone / WhatsApp{' '}
            <span className="text-text-muted text-xs font-normal">(optionnel)</span>
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            autoComplete="tel"
            value={form.telephone}
            onChange={set('telephone')}
            placeholder="+33 6 XX XX XX XX"
            className={ic()}
          />
        </div>
        <div>
          <label htmlFor="personnes" className="block text-sm font-medium mb-1">
            Nombre de personnes
          </label>
          <input
            type="number"
            id="personnes"
            name="personnes"
            min="1"
            max="50"
            value={form.personnes}
            onChange={set('personnes')}
            placeholder="2"
            className={ic()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="dates" className="block text-sm font-medium mb-1">
          Dates de voyage prévues
        </label>
        <input
          type="text"
          id="dates"
          name="dates"
          value={form.dates}
          onChange={set('dates')}
          placeholder="ex : du 15 au 25 octobre 2025"
          className={ic()}
        />
      </div>

      <div>
        <label htmlFor="typeVoyage" className="block text-sm font-medium mb-1">
          Type de voyage
        </label>
        <select
          id="typeVoyage"
          name="typeVoyage"
          value={form.typeVoyage}
          onChange={set('typeVoyage')}
          className={ic()}
        >
          <option value="">Sélectionnez un type...</option>
          {TYPES_VOYAGE.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Votre message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={set('message')}
          onBlur={blur('message')}
          placeholder="Décrivez votre projet de voyage, vos attentes, vos questions..."
          className={`${ic('message')} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && (
          <p id="err-message" role="alert" className="text-xs text-red-500 mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary w-full sm:w-auto gap-2 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send size={15} />
            Envoyer ma demande de devis
          </>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté concernant votre voyage.
        Réponse garantie sous 24h · Aucun engagement.
      </p>
    </form>
  );
}
