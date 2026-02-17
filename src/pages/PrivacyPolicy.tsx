import { motion } from 'framer-motion';
import PageLayout from '../components/layouts/PageLayout';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.5 },
};

const sections = [
  {
    title: '1. Responsable du traitement',
    content: [
      'Le responsable du traitement des données personnelles collectées via l\'application Pockety (accessible à l\'adresse app.pockety.fr) est :',
      '• Pockety',
      '• E-mail de contact : contact@pockety.fr',
    ],
  },
  {
    title: '2. Données personnelles collectées',
    content: [
      'Dans le cadre de l\'utilisation de Pockety, nous collectons les catégories de données suivantes :',
      '',
      'Données d\'identification et de compte :',
      '• Nom complet',
      '• Adresse e-mail',
      '• Numéro de téléphone (facultatif)',
      '• Mot de passe (stocké sous forme hachée, jamais en clair)',
      '',
      'Données financières déclaratives :',
      '• Sources de revenus et montants',
      '• Catégories de dépenses et montants',
      '• Solde de compte courant déclaré',
      '• Historique des transactions saisies',
      'Ces données sont renseignées manuellement par vous. Pockety ne se connecte à aucun établissement bancaire et n\'accède pas à vos comptes financiers.',
      '',
      'Données techniques (uniquement lors d\'un signalement de bug) :',
      '• Agent utilisateur du navigateur (type de navigateur et système d\'exploitation)',
      '• URL de la page concernée',
      'Ces données ne sont collectées que si vous soumettez volontairement un rapport de bug.',
    ],
  },
  {
    title: '3. Données NON collectées',
    content: [
      'Pockety ne collecte aucune des données suivantes :',
      '• Données de géolocalisation',
      '• Données de navigation ou de suivi comportemental (pages visitées, durée des sessions)',
      '• Identifiants publicitaires',
      '• Données bancaires ou moyens de paiement (carte bancaire, IBAN, etc.)',
      '• Données biométriques',
      '• Accès à la caméra, au microphone ou aux contacts de votre appareil',
      'Aucun outil d\'analyse tiers (Google Analytics, Mixpanel, etc.) n\'est intégré à l\'application.',
    ],
  },
  {
    title: '4. Finalités du traitement',
    content: [
      'Vos données personnelles sont utilisées exclusivement pour :',
      '• Créer et gérer votre compte utilisateur',
      '• Fournir les fonctionnalités de suivi budgétaire (revenus, dépenses, solde)',
      '• Vous envoyer des e-mails transactionnels (vérification d\'adresse e-mail, réinitialisation de mot de passe)',
      '• Assurer la sécurité et l\'intégrité de votre compte',
      '• Diagnostiquer et corriger des problèmes techniques (via les rapports de bugs)',
      '',
      'Nous ne vendons, ne louons et ne partageons vos données personnelles avec aucun tiers à des fins commerciales, publicitaires ou de profilage.',
    ],
  },
  {
    title: '5. Base légale du traitement',
    content: [
      'Le traitement de vos données repose sur les bases légales suivantes :',
      '• Exécution du contrat : le traitement est nécessaire à la fourniture du service Pockety (création de compte, fonctionnalités de suivi financier)',
      '• Consentement : pour l\'envoi de communications non essentielles, le cas échéant',
      '• Intérêt légitime : pour la sécurisation de l\'application et la résolution de problèmes techniques',
    ],
  },
  {
    title: '6. Stockage et sécurité des données',
    content: [
      'Nous mettons en place les mesures suivantes pour protéger vos données :',
      '• Les mots de passe sont hachés à l\'aide de l\'algorithme scrypt et ne sont jamais stockés en clair',
      '• L\'authentification repose sur des jetons d\'accès (tokens) à durée de vie limitée (1 heure)',
      '• Les jetons de vérification d\'e-mail expirent après 24 heures',
      '• Les jetons de réinitialisation de mot de passe expirent après 1 heure',
      '• Les communications entre l\'application et le serveur sont chiffrées via HTTPS',
      '• L\'accès aux données est protégé par des mécanismes d\'authentification stricts',
      '',
      'Stockage côté client :',
      '• Un jeton d\'authentification est stocké dans le localStorage de votre navigateur pour maintenir votre session',
      '• Des données de période budgétaire sont mises en cache localement pour améliorer la performance',
      '• Aucune donnée financière n\'est stockée de manière permanente sur votre appareil',
    ],
  },
  {
    title: '7. Cookies et stockage local',
    content: [
      'Pockety n\'utilise aucun cookie de suivi, publicitaire ou analytique.',
      '',
      'Seuls les mécanismes de stockage suivants sont utilisés :',
      '• localStorage : stockage du jeton d\'authentification et des préférences de période budgétaire, strictement nécessaires au fonctionnement de l\'application',
      '• Cookies techniques : cookies httpOnly nécessaires à la gestion de la session, configurés avec les attributs de sécurité appropriés (secure, sameSite)',
      '',
      'Aucun consentement spécifique n\'est requis pour ces éléments car ils sont strictement nécessaires au fonctionnement du service.',
    ],
  },
  {
    title: '8. Partage des données avec des tiers',
    content: [
      'Vos données ne sont transmises à aucun tiers, à l\'exception de :',
      '• Notre fournisseur de service d\'envoi d\'e-mails (serveur SMTP), utilisé exclusivement pour les e-mails transactionnels (vérification de compte et réinitialisation de mot de passe)',
      '',
      'Aucune donnée n\'est transmise à des réseaux sociaux, des plateformes publicitaires ou des services d\'analyse.',
    ],
  },
  {
    title: '9. Durée de conservation',
    content: [
      '• Données de compte et données financières : conservées tant que votre compte est actif',
      '• Jetons d\'accès : 1 heure',
      '• Jetons de vérification d\'e-mail : 24 heures',
      '• Jetons de réinitialisation de mot de passe : 1 heure',
      '• Rapports de bugs : conservés le temps nécessaire à la résolution du problème signalé',
      '',
      'En cas de suppression de votre compte, l\'ensemble de vos données personnelles et financières sont supprimées de nos systèmes.',
    ],
  },
  {
    title: '10. Vos droits (RGPD)',
    content: [
      'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :',
      '• Droit d\'accès : obtenir une copie de l\'ensemble de vos données personnelles',
      '• Droit de rectification : modifier vos informations personnelles directement depuis votre compte (nom, e-mail, téléphone)',
      '• Droit à l\'effacement : supprimer votre compte et l\'ensemble de vos données depuis les paramètres de l\'application',
      '• Droit à la portabilité : obtenir vos données dans un format structuré et lisible par machine',
      '• Droit d\'opposition : vous opposer au traitement de vos données',
      '• Droit à la limitation : demander la restriction du traitement de vos données',
      '',
      'Pour exercer ces droits, contactez-nous à contact@pockety.fr. Nous nous engageons à répondre dans un délai maximum de 30 jours.',
      '',
      'Vous disposez également du droit d\'introduire une réclamation auprès d\'une autorité de contrôle (CNIL en France : www.cnil.fr).',
    ],
  },
  {
    title: '11. Mineurs',
    content: [
      'L\'application Pockety n\'est pas destinée aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles de mineurs de moins de 16 ans. Si vous êtes parent ou tuteur et que vous pensez que votre enfant nous a fourni des données personnelles, veuillez nous contacter à contact@pockety.fr.',
    ],
  },
  {
    title: '12. Modifications de cette politique',
    content: [
      'Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. En cas de modification substantielle, vous serez informé(e) par e-mail ou via une notification dans l\'application.',
      'La date de dernière mise à jour est indiquée en haut de cette page.',
    ],
  },
  {
    title: '13. Contact',
    content: [
      'Pour toute question relative à cette politique de confidentialité ou à la gestion de vos données personnelles :',
      '• E-mail : contact@pockety.fr',
      '',
      'Nous nous engageons à répondre à toute demande dans un délai de 30 jours.',
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-gray-500">
            Dernière mise à jour : février 2026
          </p>
          <div className="mt-6 h-px bg-gray-200" />
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-lg leading-relaxed mb-12"
        >
          Chez Pockety, la protection de vos données personnelles est une
          priorité. Cette politique de confidentialité vous informe sur la
          manière dont nous collectons, utilisons et protégeons vos
          informations lorsque vous utilisez notre application de gestion
          financière.
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div key={index} {...fadeUp}>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.content.map((line, i) => (
                  <p
                    key={i}
                    className={`text-gray-600 leading-relaxed ${
                      line.startsWith('•') ? 'pl-4' : ''
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
