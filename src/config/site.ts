// Toutes les informations modifiables du site sont ici.
export const site = {
  name: 'La Cigale Énergie',
  tagline: 'Énergie & confort de l’habitat, près de chez vous',
  city: 'Hyères',
  region: 'Var',

  // Coordonnées affichées sur le site (à remplacer)
  phone: { display: '06 00 00 00 00', tel: '+33600000000' },
  whatsapp: '33600000000', // format international sans le +
  email: 'contact@exemple.fr',
  instagram: 'lacigale.energie', // nom du compte, sans @
  hours: 'Du lundi au vendredi, 8 h – 18 h',

  // Zone d'intervention : phrase réutilisée partout sur le site
  zoneText: 'dans le Var et ses alentours',
  zoneFar: 'Plus loin ? Sur demande, sans problème : nous étudions chaque projet.',
  // Communes affichées en exemple (pas une limite)
  zone: ['Hyères', 'Giens', 'La Londe-les-Maures', 'Carqueiranne', 'La Crau', 'Le Pradet', 'Toulon est'],

  // Mentions légales : à compléter uniquement dans les pages « Mentions légales » et « Confidentialité ».
  // Les champs laissés vides ne s'affichent pas. Ces informations ne sont pas affichées ailleurs sur le site.
  // Adresse (affichée dans le pied de page et les pages légales). Laisser vide pour ne pas l'afficher.
  address: '', // ex. '12 avenue Gambetta, 83400 Hyères'
  legal: {
    company: '', // raison sociale (par défaut : le nom du site)
    form: '', // ex. SARL
    capital: '', // ex. '1 000'
    siret: '',
    rcs: '', // ex. 'RCS Toulon'
    publisher: '', // directeur de la publication, ex. 'Prénom Nom, gérant'
    // Médiateur de la consommation : obligatoire pour les professionnels qui vendent à des particuliers
    mediator: { name: '', url: '' },
  },
};

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
export const whatsappUrl = `https://wa.me/${site.whatsapp}`;
