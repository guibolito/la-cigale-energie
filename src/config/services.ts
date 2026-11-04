// Pour ouvrir un nouveau service : passez `enabled` à true et ajoutez sa page dans src/pages.
// Tant qu'il est à false, le service reste affiché « Bientôt » sur l'accueil.
export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: 'ac' | 'bolt' | 'flame' | 'drop';
  enabled: boolean;
  href?: string;
};

export const services: Service[] = [
  { slug: 'climatisation', name: 'Climatisation & pompe à chaleur', short: 'Confort thermique', icon: 'ac', enabled: true, href: '/climatisation-hyeres' },
  { slug: 'electricite-solaire', name: 'Électricité, solaire & recharge', short: 'Électricité & énergie solaire', icon: 'bolt', enabled: false },
  { slug: 'chauffage', name: 'Chauffage & eau chaude', short: 'Confort thermique', icon: 'flame', enabled: false },
  { slug: 'plomberie', name: 'Plomberie', short: 'Eau & sanitaire', icon: 'drop', enabled: false },
];
