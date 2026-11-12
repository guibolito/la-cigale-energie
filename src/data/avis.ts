// Avis Google affichés sous « Nos réalisations » (accueil + page climatisation).
// Tant que la liste `avis` est vide, la section ne s'affiche pas (et le lien « Avis » du menu non plus).
//
// Pour ajouter un avis : copiez un bloc et remplissez-le avec un VRAI avis de votre fiche Google.
//   photo : facultatif. Déposez la photo de profil dans public/avis/ (ex. '/avis/marie.jpg').
//           Sans photo, les initiales s'affichent dans une pastille.
//   note  : de 1 à 5 étoiles.
//   date  : texte libre, ex. 'il y a 2 mois' ou 'juin 2026'.

export const ficheGoogle = {
  // Lien de votre fiche Google (bouton « Voir tous nos avis » et badge de note).
  lien: '',
  // Note moyenne et nombre total d'avis affichés sur Google. Laissez null pour les calculer à partir de la liste ci-dessous.
  note: null as number | null,
  nombre: null as number | null,
};

export type Avis = { nom: string; texte: string; note: number; photo?: string; date?: string };

export const avis: Avis[] = [
  // { nom: 'Marie D.', note: 5, date: 'il y a 1 mois', photo: '/avis/marie.jpg', texte: 'Pose rapide et très propre, je recommande.' },
];
