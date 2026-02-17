import { motion } from 'framer-motion';
import { faq } from '../constants/faq';
import Badge from './Badge';
import FaqItem from './FaqItem';
import Section from './layouts/Section';

const FaqSection = () => {
  return (
    <Section id="faq" className="bg-[#FCFCFC]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <Badge text="FAQ" />
        <h2 className="text-center font-semibold text-4xl">
          Foire aux questions
        </h2>
        <p className="font-light text-xl">On réponds à vos questions</p>
      </motion.div>
      <div className="flex flex-col gap-3 w-full">
        {faq.map((item, index) => (
          <FaqItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;
