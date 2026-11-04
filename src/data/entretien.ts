// Formules d'entretien affichées sur la page climatisation.
// Prix = à partir de, TTC par an, pour 1 split mural + 1 groupe extérieur, Hyères, particulier (TVA 10 %).
// À CONFIRMER avec votre grille (onglet « Entretien clim » du prévisionnel) avant publication.
export const formules = [
  {
    nom: 'Essentiel',
    prix: 121,
    accroche: 'Garder une clim propre et en état de marche.',
    inclus: ['Nettoyage des filtres', 'Nettoyage de la façade et des grilles', 'Contrôle de fonctionnement', 'Vérification des condensats', 'Attestation d’entretien'],
    vedette: false,
  },
  {
    nom: 'Confort',
    prix: 138,
    accroche: 'Le plus choisi : nettoyage complet et rapport écrit.',
    inclus: ['Tout l’Essentiel', 'Nettoyage échangeur et turbine', 'Nettoyage du groupe extérieur', 'Traitement antibactérien', 'Rapport d’intervention', 'Rappel avant la saison'],
    vedette: true,
  },
  {
    nom: 'Sérénité',
    prix: 154,
    accroche: 'Tout inclus, dépannage prioritaire.',
    inclus: ['Tout le Confort', 'Contrôle d’étanchéité (selon charge)', 'Dépannage prioritaire sous 48 h', 'Déplacement offert', '10 % sur la main-d’œuvre en dépannage'],
    vedette: false,
  },
];
