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
  // Aperçu : affiche un bandeau « avis d'exemple » (branche de test uniquement).
  apercu: true,
};

export type Avis = { nom: string; texte: string; note: number; photo?: string; date?: string };

// AVIS D'EXEMPLE pour tester le design (affichés avec le bandeau « exemple » tant que apercu = true).
// À remplacer par les vrais avis Google, puis passer apercu à false.
export const avis: Avis[] = [
  { nom: 'Sophie M.', note: 5, date: 'il y a 2 semaines', photo: '/avis/exemple-1.svg', texte: 'En plein mois d’août avec 34° dans la chambre de ma fille, j’ai appelé un lundi, la clim était posée le jeudi. Travail propre, rien à redire. Merci à La Cigale !' },
  { nom: 'Julien R.', note: 5, date: 'il y a 1 mois', texte: 'Merci à La Cigale, rapide et efficace.' },
  { nom: 'Nathalie B.', note: 5, date: 'il y a 1 mois', photo: '/avis/exemple-3.svg', texte: 'Notre vieille clim faisait un bruit de tracteur. Ils nous ont conseillé un modèle plus petit que prévu, et franchement on dort enfin. Devis respecté au centime.' },
  { nom: 'Patrick L.', note: 5, date: 'il y a 2 mois', photo: '/avis/exemple-4.svg', texte: 'Entretien annuel fait avant l’été. Ponctuel, explications claires, rapport envoyé le soir même.' },
  { nom: 'Camille D.', note: 5, date: 'il y a 2 mois', texte: 'Top 👍' },
  { nom: 'Karim A.', note: 4, date: 'il y a 3 mois', photo: '/avis/exemple-2.svg', texte: 'Panne un vendredi soir avec des locataires dans l’appartement. Dépanné le lendemain matin, le problème venait des condensats. Petit retard sur l’horaire mais prévenu par SMS.' },
  { nom: 'Élodie P.', note: 5, date: 'il y a 4 mois', texte: 'Multisplit pour 3 chambres en copropriété : ils nous ont aidés pour le dossier de l’AG, l’unité extérieure est discrète et les voisins n’entendent rien. Très pro.' },
  { nom: 'Marc T.', note: 5, date: 'il y a 5 mois', texte: 'Simple, rapide, propre. Je recommande.' },
  // { nom: 'Marie D.', note: 5, date: 'il y a 1 mois', photo: '/avis/marie.jpg', texte: 'Pose rapide et très propre, je recommande.' },
];
