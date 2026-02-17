import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Button from './Button';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: 'full' | 'simple';
  className?: string;
  cta: boolean;
  index: number;
};
const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { title, description, icon: Icon, variant, className, cta, index } =
    props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-3xl flex flex-col gap-4 grid-cols-1 grid-rows-1 ${variant === 'full' ? 'bg-primary text-white' : 'bg-[#F1F8EC]'} ${className || ''}`}
    >
      <Icon size={35} />
      <h3 className="text-xl">{title}</h3>
      <p>{description}</p>
      {cta && (
        <Button variant="light" className="w-fit" link="#access-to-beta">
          Commencer maintenant
        </Button>
      )}
    </motion.div>
  );
};

export default FeatureCard;
