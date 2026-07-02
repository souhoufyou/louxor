'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de l&apos;envoi');

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle size={48} className="text-gold" />
        <p className="text-white text-lg font-display">Email envoyé avec succès !</p>
        <p className="text-white/60 text-sm">Hisham vous répondra dans les plus brefs délais à l'adresse indiquée.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
          className="btn btn-outline-white mt-2 text-xs"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-white/70 mb-2">
            Votre nom *
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Marie Dupont"
            className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded text-white placeholder-white/30 focus:outline-none focus:border-gold focus:bg-white/12 text-sm transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-white/70 mb-2">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="marie@exemple.com"
            className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded text-white placeholder-white/30 focus:outline-none focus:border-gold focus:bg-white/12 text-sm transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-white/70 mb-2">
          Votre projet *
        </label>
        <textarea
          id="cf-message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Dates souhaitées, nombre de personnes, destinations, questions…"
          className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded text-white placeholder-white/30 focus:outline-none focus:border-gold focus:bg-white/12 text-sm transition-colors resize-none"
        />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        <Send size={15} />
        {loading ? 'Envoi en cours...' : 'Envoyer par email'}
      </button>
      <p className="text-white/35 text-xs text-center">
        Réponse garantie sous 24 h · Aucun engagement
      </p>
    </form>
  );
}
