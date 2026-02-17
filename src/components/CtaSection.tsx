import { motion } from 'framer-motion';
import Button from './Button';
import Section from './layouts/Section';

const CtaSection = () => {
  return (
    <Section id="cta">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="border border-gray-200 bg-white py-20 rounded-3xl w-full"
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
            Prêt à reprendre le contrôle de vos finances ?
          </h2>
          <Button link="/contact" className="mx-auto">Demander mon accès</Button>
          <p className="mt-4 text-sm text-gray-500">
            Gratuit pendant la bêta • Sans engagement
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default CtaSection;
