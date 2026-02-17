import { motion } from 'framer-motion';
import type { AccessToBeta } from '../types/acces-to-beta';

type AccessToBetaCardProps = {
  item: AccessToBeta;
  index: number;
};
const AccessToBetaCard: React.FC<AccessToBetaCardProps> = (props) => {
  const { item, index } = props;
  const { icon: Icon, title, description } = item;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-6 p-8 rounded-[20px] border border-[#E0E0E0]"
    >
      <Icon size={50} className="text-[#5EA500]" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="font-light text-base text-[#666666]">{description}</p>
    </motion.div>
  );
};
export default AccessToBetaCard;
