// Formules d'entretien affichées sur la page climatisation.
// Aucun prix n'est affiché sur le site : le tarif figure sur le devis.
export const formules = [
  {
    nom: 'Essentiel',
    accroche: 'Garder une clim propre et en état de marche.',
    inclus: ['Nettoyage des filtres', 'Nettoyage de la façade et des grilles', 'Contrôle de fonctionnement', 'Vérification des condensats', 'Attestation d’entretien'],
    vedette: false,
  },
  {
    nom: 'Confort',
    accroche: 'Le plus choisi : nettoyage complet et rapport écrit.',
    inclus: ['Tout l’Essentiel', 'Nettoyage échangeur et turbine', 'Nettoyage du groupe extérieur', 'Traitement antibactérien', 'Rapport d’intervention', 'Rappel avant la saison'],
    vedette: true,
  },
  {
    nom: 'Sérénité',
    accroche: 'Tout inclus, dépannage prioritaire.',
    inclus: ['Tout le Confort', 'Contrôle d’étanchéité (selon charge)', 'Dépannage prioritaire sous 48 h', 'Déplacement offert', 'Remise sur la main-d’œuvre en dépannage'],
    vedette: false,
  },
];
