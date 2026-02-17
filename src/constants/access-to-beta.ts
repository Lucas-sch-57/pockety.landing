import { Gift, MessageSquare, Sparkles, Users } from 'lucide-react';
import type { AccessToBeta } from '../types/acces-to-beta';

export const accessToBeta: Array<AccessToBeta> = [
  {
    icon: Sparkles,
    title: 'Accès anticipé exclusif',
    description: 'Découvrez Pockety avant tout le monde avec un accès gratuit',
  },
  {
    icon: MessageSquare,
    title: 'Influencez le développement',
    description:
      "Vos retours façonnent directement l'évolution de l'application",
  },
  {
    icon: Users,
    title: 'Communauté de testeurs',
    description:
      "Échangez avec d'autres utilisateurs et l'équipe de développement",
  },
  {
    icon: Gift,
    title: 'Gratuit durant toute la bêta',
    description: 'Testez toutes les fonctionnalités sans aucun frais',
  },
];
