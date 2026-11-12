// Pour ouvrir un nouveau service : passez `enabled` à true et ajoutez sa page dans src/pages.
// Tant qu'il est à false, le service reste affiché « Bientôt » sur l'accueil.
// Afficher sur le site les services pas encore ouverts (marqués « Bientôt ») ?
// false = le site ne parle que des services ouverts (enabled: true). Passez à true pour les montrer.
export const afficherBientot = false;

// Page d'accueil :
// false = accueil centré sur la climatisation (tant que c'est la seule activité).
// true  = accueil « énergie » général (maison + tous les domaines), pour quand il y aura plusieurs activités.
export const accueilGeneraliste = false;

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: 'ac' | 'bolt' | 'flame' | 'drop';
  enabled: boolean;
  href?: string;
};

export const services: Service[] = [
  { slug: 'climatisation', name: 'Climatisation', short: 'Confort thermique', icon: 'ac', enabled: true, href: '/climatisation-hyeres' },
  { slug: 'electricite-solaire', name: 'Électricité, solaire & recharge', short: 'Électricité & énergie solaire', icon: 'bolt', enabled: false },
  { slug: 'chauffage', name: 'Chauffage & eau chaude', short: 'Confort thermique', icon: 'flame', enabled: false },
  { slug: 'plomberie', name: 'Plomberie', short: 'Eau & sanitaire', icon: 'drop', enabled: false },
];

// Services montrés sur le site : les ouverts, plus les « Bientôt » si afficherBientot est à true.
export const servicesVisibles = services.filter((s) => s.enabled || afficherBientot);
