import { motion } from 'framer-motion';
import { accessToBeta } from '../constants/access-to-beta';
import AccessToBetaCard from './AccessToBetaCard';
import Badge from './Badge';
import Section from './layouts/Section';

const AccessToBetaSection = () => {
  return (
    <Section id="access-to-beta" className="bg-[#FCFCFC]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <Badge text="Accès à la bêta" />
        <h2 className="text-4xl font-semibold">Rejoignez la bêta fermée</h2>
        <p className="font-light text-xl">
          Places limitées - Soyez parmi les premiers testeurs de Pockety
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full gap-6 mt-10">
        {accessToBeta.map((item, index) => (
          <AccessToBetaCard key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default AccessToBetaSection;
