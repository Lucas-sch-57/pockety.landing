import type { faqItem } from '../types/faq';

export const faq: Array<faqItem> = [
  {
    question: "C'est gratuit pendant combien de temps ?",
    answer:
      "Pockety est entièrement gratuit pendant toute la durée de la bêta fermée. Après cette phase de test, l'application passera en version officielle avec un modèle freemium (fonctionnalités de base gratuites + options premium payantes).",
  },
  {
    question: "Qu'est ce qu'une PWA ?",
    answer:
      "Pockety est une Progressive Web App (PWA). Cela signifie que vous pouvez l'utiliser directement depuis votre navigateur web, mais aussi l'installer sur votre téléphone comme une application native. Une application mobile dédiée iOS et Android est prévue après la bêta.",
  },
  {
    question: 'Que deviennent mes données après la bêta ?',
    answer:
      "La bêta est une phase de test. À la fin de celle-ci, les données seront remises à zéro pour le lancement officiel de la V1. Nous vous recommandons d'exporter vos informations importantes avant la fin de la période de test. Vous serez prévenus à l'avance.",
  },
  {
    question: 'Comment puis-je donner mon avis ou signaler un bug ?',
    answer:
      "Vous pouvez nous envoyer un message directement depuis l'application Pockety, ou bien via le formulaire de contact disponible sur notre site web.",
  },
];
