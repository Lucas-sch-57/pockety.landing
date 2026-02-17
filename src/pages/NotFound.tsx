import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import PageLayout from '../components/layouts/PageLayout';

const NotFound = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center">
        {/* 404 animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <span className="text-[10rem] md:text-[14rem] font-black leading-none text-gray-100 select-none">
            404
          </span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">
              Oups !
            </span>
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3"
        >
          Page introuvable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-500 text-lg max-w-md mb-10"
        >
          La page que vous cherchez n'existe pas ou a été déplacée.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:bg-primary-dark active:scale-[0.98]"
          >
            <Home size={18} />
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
