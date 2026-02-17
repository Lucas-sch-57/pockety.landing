import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Logo + Tagline */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo-pockety.svg"
              alt="Pockety logo"
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-gray-900">Pockety</span>
          </Link>
          <p className="text-sm text-gray-600">
            Gérez vos finances en toute simplicité
          </p>
        </div>

        {/* Liens */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
          <Link to="/confidentialite" className="hover:text-primary">
            Politique de confidentialité
          </Link>
          <span>-</span>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
          <span>-</span>
          <a href="mailto:contact@pockety.fr" className="hover:text-primary">
            contact@pockety.fr
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500">
          © 2026 Pockety. Tous droits réservés.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
