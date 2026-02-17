import { motion } from 'framer-motion';
import { howItWorks } from '../constants/howItWorks';
import Badge from './Badge';
import HowItWorksCard from './HowItWorksCard';
import Section from './layouts/Section';

const HowItWorksSection = () => {
  return (
    <Section id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <Badge text="Fonctionnement" />
        <h2 className="text-center font-semibold text-4xl">
          Comment ça marche ?
        </h2>
        <p className="font-light text-xl">
          Commencez à gérer vos finances en 3 étapes simples
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
        {howItWorks.map((item, index) => (
          <HowItWorksCard key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
