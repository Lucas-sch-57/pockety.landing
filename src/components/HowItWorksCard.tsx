import { motion } from 'framer-motion';
import type { HowItWorksItem } from '../types/how-it-works';

type HowItWorksCardProps = {
  item: HowItWorksItem;
  index: number;
};
const HowItWorksCard: React.FC<HowItWorksCardProps> = (props) => {
  const { item, index } = props;
  const { icon: Icon, title, description, number } = item;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center gap-6 p-8 rounded-[20px] border border-[#E0E0E0] text-center"
    >
      <span className="rounded-full font-bold text-xl w-8 h-8 bg-primary text-white flex items-center justify-center">
        {number}
      </span>
      <Icon size={36} className="text-[#5EA500]" />
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="font-light text-base text-[#666666]">{description}</p>
      </div>
    </motion.div>
  );
};
export default HowItWorksCard;
