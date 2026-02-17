import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { faqItem } from '../types/faq';

type FaqItemProps = {
  item: faqItem;
  index: number;
};
const FaqItem: React.FC<FaqItemProps> = (props) => {
  const { item, index } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-200 hover:bg-gray-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex cursor-pointer items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
        <ChevronRight
          className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 pl-8 text-gray-600 overflow-hidden"
          >
            {item.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default FaqItem;
