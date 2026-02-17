import { motion } from 'framer-motion';
import { features } from '../constants/features';
import Badge from './Badge';
import FeatureCard from './FeatureCard';
import Section from './layouts/Section';

const FeaturesSection = () => {
  return (
    <Section id="features" className="bg-[#FCFCFC]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <Badge text="Fonctionnalités" />
        <h2 className="text-center font-semibold text-4xl">
          Gestion de vos finances et de votre budget
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 mt-10">
        {features.map((feature, index) => {
          const getClassName = () => {
            if (index === 2) return 'lg:row-span-2';
            if (index === 3) return 'lg:col-span-2';
            return '';
          };

          const getVariant = () => {
            if (index === 2) {
              return 'full';
            } else {
              return 'simple';
            }
          };
          const getHasCta = () => {
            return index === 2;
          };
          return (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              variant={getVariant()}
              className={getClassName()}
              cta={getHasCta()}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default FeaturesSection;
