import { CreditCard, Home, User } from 'lucide-react';
import type { HowItWorksItem } from '../types/how-it-works';

export const howItWorks: Array<HowItWorksItem> = [
  {
    title: 'Créez votre compte en quelques secondes',
    description:
      "Inscription rapide en quelques secondes. Aucune carte bancaire requise, c'est gratuit.",
    icon: User,
    number: 1,
  },
  {
    title: 'Ajoutez vos revenus et vos dépenses',
    description:
      'Enregistrez vos transactions en quelques clics. Simple et intuitif dès le premier jour.',
    icon: CreditCard,
    number: 2,
  },
  {
    title: 'Consultez votre tableau de bord',
    description:
      'Visualisez votre situation financière en temps réel. Tout est clair, tout est simple.',
    icon: Home,
    number: 3,
  },
];
