import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import PageLayout from '../components/layouts/PageLayout';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [rgpd, setRgpd] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/landing/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all';

  return (
    <PageLayout>
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block border border-primary text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Accès bêta
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demandez votre accès
          </h1>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Rejoignez les premiers utilisateurs de Pockety et aidez-nous à
            construire l'application qui vous correspond.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Nom / Prénom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jean"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Dupont"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean.dupont@email.com"
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Pourquoi souhaitez-vous rejoindre la bêta ?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez brièvement votre intérêt pour Pockety..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* RGPD */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  checked={rgpd}
                  onChange={(e) => setRgpd(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary accent-primary focus:ring-primary/20"
                />
                <label htmlFor="rgpd" className="text-sm text-gray-600">
                  J'accepte que mes données soient traitées conformément à la{' '}
                  <a
                    href="/confidentialite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary-dark"
                  >
                    politique de confidentialité
                  </a>
                  . *
                </label>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !rgpd}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:bg-primary-dark active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={18} />
                {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, type: 'spring' }}
              >
                <CheckCircle size={64} className="text-primary mx-auto mb-6" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Demande envoyée !
              </h2>
              <p className="text-gray-500 text-lg max-w-sm mx-auto">
                Merci {form.firstName} ! Nous reviendrons vers vous très
                rapidement avec votre accès à la bêta.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
};

export default Contact;
