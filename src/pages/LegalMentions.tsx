import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import PageLayout from '../components/layouts/PageLayout';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.5 },
};

const sections: Array<{ title: string; content: ReactNode[] }> = [
  {
    title: '1. Éditeur du site',
    content: [
      'Le site pockety.fr est édité par :',
      '',
      '• Nom : Lucas Schiltz',
      '• Statut : Entrepreneur individuel (micro-entreprise)',
      '• SIRET : 899 736 755 00021',
      '• Siège social : 22 Impasse de la Marne, 57190 Florange',
      '• E-mail : contact@pockety.fr',
    ],
  },
  {
    title: '2. Directeur de la publication',
    content: [
      'Le directeur de la publication est Lucas Schiltz.',
      'Contact : contact@pockety.fr',
    ],
  },
  {
    title: '3. Hébergeur',
    content: [
      "L'hébergement du site est assuré par :",
      '',
      '• Hostinger International Ltd',
      '• Site web : https://www.hostinger.fr',
    ],
  },
  {
    title: '4. Propriété intellectuelle',
    content: [
      "L'ensemble des contenus présents sur le site pockety.fr (textes, images, graphismes, logo, icônes, logiciels, etc.) est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
      '',
      'Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Lucas Schiltz.',
      '',
      "Toute exploitation non autorisée du site ou de ses contenus sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.",
    ],
  },
  {
    title: '5. Limitation de responsabilité',
    content: [
      "L'éditeur s'efforce de fournir des informations aussi précises que possible sur le site pockety.fr. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires.",
      '',
      "L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, les détériorations ou les virus qui pourraient affecter l'équipement informatique de l'utilisateur.",
    ],
  },
  {
    title: '6. Données personnelles',
    content: [
      <>Les informations relatives à la collecte et au traitement des données personnelles sont détaillées dans notre <Link to="/confidentialite" className="text-primary underline hover:text-primary-dark">politique de confidentialité</Link>.</>,
      '',
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.",
      '',
      "Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@pockety.fr.",
    ],
  },
  {
    title: '7. Cookies',
    content: [
      "Le site pockety.fr n'utilise aucun cookie de suivi, publicitaire ou analytique.",
      '',
      'Seuls des cookies strictement nécessaires au fonctionnement du service sont utilisés (authentification, préférences). Ces cookies ne nécessitent pas de consentement préalable conformément à la réglementation en vigueur.',
    ],
  },
  {
    title: '8. Droit applicable',
    content: [
      'Les présentes mentions légales sont régies par le droit français.',
      '',
      'En cas de litige, et après une tentative de résolution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.',
    ],
  },
];

const LegalMentions = () => {
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
            Mentions légales
          </h1>
          <p className="text-gray-500">Dernière mise à jour : février 2026</p>
          <div className="mt-6 h-px bg-gray-200" />
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-lg leading-relaxed mb-12"
        >
          Conformément aux dispositions des articles 6-III et 19 de la loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique
          (LCEN), les présentes mentions légales sont portées à la connaissance
          des utilisateurs du site pockety.fr.
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
                      typeof line === 'string' && line.startsWith('•') ? 'pl-4' : ''
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

export default LegalMentions;
