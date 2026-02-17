import { motion } from 'framer-motion';
import Button from './Button';

const HeroHeaderTitle = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 lg:pt-20 pb-8">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
        >
          Gérez vos finances
          <br />
          <span className="text-primary-dark">en toute simplicité</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          Suivez vos revenus, maîtrisez vos dépenses, atteignez vos objectifs
          financiers avec une application intuitive et puissante.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button link="/contact" className="px-6! py-3! text-base! font-semibold shadow-lg">
            Demander mon accès
          </Button>
          <Button
            link="#features"
            variant="light"
            className="px-6! py-3! text-base! font-semibold"
          >
            Découvrir les fonctionnalités
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent rounded-xl" />
          <img
            src="/pockety-desktop.png"
            alt="Pockety Dashboard"
            className="w-full rounded-xl shadow-2xl border border-white/20"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroHeaderTitle;
