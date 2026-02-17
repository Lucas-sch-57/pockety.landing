import { CreditCard, Home, PiggyBank } from 'lucide-react';
import type { FeaturesItemType } from '../types/menu';

export const features: Array<FeaturesItemType> = [
  {
    title: 'Gérez vos revenus',
    description:
      'Enregistrez facilement tous vos revenus : salaire mensuel, revenus secondaires, remboursements. Gardez une trace claire de chaque euro qui entre.',
    icon: PiggyBank,
  },
  {
    title: 'Gérez vos dépenses',
    description:
      'Suivez précisément où part votre argent. Catégorisez vos achats, identifiez vos habitudes et reprenez le contrôle de votre budget.',
    icon: CreditCard,
  },
  {
    title: "Suivez l'évolution",
    description:
      "Un dashboard qui affiche l'essentiel. Revenus du mois, dépenses totales, catégories principales : toute votre situation financière résumée simplement.",
    icon: Home,
  },
  {
    title: 'Gérez vos catégories de dépenses',
    description:
      "Créez vos propres catégories pour organiser vos dépenses comme vous le souhaitez. Alimentation, transport, loisirs : adaptez l'app à votre vie.",
    icon: CreditCard,
  },
];
