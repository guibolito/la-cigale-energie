// Pages « Climatisation à <ville> » (adresse : /climatisation/<slug>).
// Chaque ville a un texte qui lui est propre : Google ignore les pages copiées-collées où seul le nom change.
// Pour ajouter une ville : copiez un bloc, changez tous les textes, et ajoutez son slug dans `proches` des villes voisines.

export type Ville = {
  slug: string;
  nom: string;
  cp: string;
  // Titre court affiché sous le H1
  accroche: string;
  // 2 paragraphes de présentation propres à la ville
  intro: string[];
  // Points d'attention locaux (titre + texte)
  local: { t: string; d: string }[];
  // Quartiers / secteurs cités (texte libre)
  secteurs: string[];
  // Question fréquente propre à la ville
  faq: { q: string; a: string };
  // Villes voisines (slugs) pour les liens en bas de page
  proches: string[];
};

export const villes: Ville[] = [
  {
    slug: 'toulon',
    nom: 'Toulon',
    cp: '83000',
    accroche: 'Appartements du centre, maisons des hauteurs, bord de mer : une clim adaptée à chaque logement toulonnais.',
    intro: [
      'À Toulon, l’été s’installe tôt et les nuits restent chaudes, surtout dans les appartements du centre où la chaleur s’accumule dans les murs. Une climatisation bien dimensionnée change le quotidien : des pièces fraîches le jour, un sommeil enfin réparateur la nuit.',
      'Nous intervenons dans tous les quartiers de Toulon, du Mourillon au Pont-du-Las, de la Haute-Ville aux quartiers résidentiels du Faron. Installation, entretien, dépannage ou remplacement : un seul interlocuteur et un devis écrit avec un prix ferme.',
    ],
    local: [
      { t: 'Immeubles anciens du centre', d: 'Façades protégées, balcons étroits, cours intérieures : nous étudions l’emplacement de l’unité extérieure et les passages de liaisons pour respecter l’immeuble et le règlement de copropriété.' },
      { t: 'Derniers étages sous les toits', d: 'Les appartements sous toiture surchauffent vite. Nous calculons la puissance en tenant compte de l’exposition et de l’isolation, pour éviter un appareil sous-dimensionné qui tourne sans arrêt.' },
      { t: 'Mistral et bord de mer', d: 'Au Mourillon ou au Cap Brun, le vent et l’air salin sollicitent l’unité extérieure : fixation renforcée, emplacement abrité et entretien régulier prolongent sa durée de vie.' },
    ],
    secteurs: ['Mourillon', 'Haute-Ville', 'Pont-du-Las', 'Saint-Jean-du-Var', 'Cap Brun', 'Le Faron', 'Sainte-Musse', 'La Rode'],
    faq: { q: 'Faut-il une autorisation pour poser une clim dans un immeuble à Toulon ?', a: 'En copropriété, une unité extérieure visible ou fixée sur une partie commune demande en général l’accord de l’assemblée générale. Selon le secteur, une déclaration préalable en mairie peut aussi être nécessaire. Nous vous fournissons le descriptif technique pour préparer votre demande.' },
    proches: ['la-seyne-sur-mer', 'la-garde', 'six-fours-les-plages', 'hyeres'],
  },
  {
    slug: 'hyeres',
    nom: 'Hyères',
    cp: '83400',
    accroche: 'Centre ancien, villas, presqu’île de Giens : une climatisation pensée pour le littoral hyérois.',
    intro: [
      'Entre le centre médiéval, les quartiers résidentiels et la presqu’île de Giens, les logements d’Hyères sont très variés. Point commun : des étés longs et lumineux, où une clim bien posée fait toute la différence.',
      'Nous intervenons à Hyères et dans tous ses quartiers, de Costebelle à L’Ayguade, des Salins au Port. Nous connaissons les contraintes locales : air salin, copropriétés anciennes, résidences secondaires à préparer avant l’arrivée de l’été.',
    ],
    local: [
      { t: 'Air salin et vent', d: 'Près de la mer, les échangeurs s’usent plus vite. Nous privilégions un emplacement abrité, un matériel adapté quand le modèle le propose et un entretien régulier.' },
      { t: 'Résidences secondaires', d: 'Un entretien au printemps évite les mauvaises surprises à l’arrivée. Selon les modèles, un pilotage à distance permet de lancer le confort avant votre venue.' },
      { t: 'Centre ancien', d: 'Ruelles étroites et façades anciennes demandent une pose discrète : nous étudions avec vous le meilleur emplacement pour l’unité extérieure.' },
    ],
    secteurs: ['Centre-ville', 'Costebelle', 'L’Ayguade', 'Les Salins', 'Le Port', 'Giens', 'La Capte', 'Les Borrels'],
    faq: { q: 'Intervenez-vous sur la presqu’île de Giens ?', a: 'Oui, nous intervenons à Giens, à La Capte et dans tous les quartiers d’Hyères. Pour l’entretien des résidences secondaires, nous planifions les visites avant la saison.' },
    proches: ['la-londe-les-maures', 'toulon', 'la-garde', 'le-lavandou'],
  },
  {
    slug: 'la-seyne-sur-mer',
    nom: 'La Seyne-sur-Mer',
    cp: '83500',
    accroche: 'Des Sablettes à Tamaris, une climatisation adaptée aux maisons et résidences de la rade.',
    intro: [
      'À La Seyne-sur-Mer, les maisons des collines comme les résidences proches des plages profitent d’un climat doux… et d’étés très chauds. La climatisation réversible apporte de la fraîcheur l’été et un complément de chauffage confortable en hiver.',
      'Nous intervenons dans toute la commune : Tamaris, Les Sablettes, Fabrégas, Mar Vivo, le centre-ville et les quartiers résidentiels. Devis gratuit, prix ferme et pose soignée.',
    ],
    local: [
      { t: 'Maisons individuelles', d: 'Plusieurs chambres à rafraîchir ? Le multisplit relie plusieurs unités intérieures à un seul groupe extérieur : moins d’appareils dehors, une installation plus discrète.' },
      { t: 'Proximité de la mer', d: 'À Tamaris ou aux Sablettes, l’air salin impose un entretien plus suivi de l’unité extérieure pour garder un bon rendement.' },
      { t: 'Résidences avec règlement', d: 'Dans les résidences récentes, nous respectons les emplacements prévus et l’aspect des façades.' },
    ],
    secteurs: ['Tamaris', 'Les Sablettes', 'Fabrégas', 'Mar Vivo', 'Centre-ville', 'Berthe', 'Janas'],
    faq: { q: 'Une clim réversible suffit-elle pour chauffer une maison à La Seyne ?', a: 'Dans notre climat doux, une clim réversible bien dimensionnée assure souvent l’essentiel du chauffage en mi-saison et une bonne partie de l’hiver. Nous évaluons avec vous si elle peut remplacer ou compléter votre chauffage actuel.' },
    proches: ['six-fours-les-plages', 'toulon', 'sanary-sur-mer', 'la-garde'],
  },
  {
    slug: 'six-fours-les-plages',
    nom: 'Six-Fours-les-Plages',
    cp: '83140',
    accroche: 'Maisons, villas et appartements du bord de mer : une clim discrète et bien dimensionnée.',
    intro: [
      'Six-Fours-les-Plages compte beaucoup de maisons individuelles et de villas, souvent très exposées au soleil. Une climatisation adaptée à la surface et à l’orientation garde la maison fraîche sans faire exploser la consommation.',
      'Nous intervenons au Brusc, à Reynier, aux Lônes, au centre et dans tous les quartiers de Six-Fours, pour l’installation, l’entretien, le dépannage et le remplacement.',
    ],
    local: [
      { t: 'Grandes baies vitrées', d: 'Les pièces de vie très vitrées et exposées au sud demandent un calcul de puissance précis : c’est ce que nous faisons avant chaque devis.' },
      { t: 'Silence au jardin', d: 'Nous plaçons le groupe extérieur pour limiter le bruit côté terrasse, piscine et voisins.' },
      { t: 'Air marin', d: 'Au Brusc ou près des plages, un entretien régulier préserve l’échangeur extérieur.' },
    ],
    secteurs: ['Le Brusc', 'Reynier', 'Les Lônes', 'Centre-ville', 'Les Playes', 'La Coudoulière'],
    faq: { q: 'Où placer l’unité extérieure dans une maison avec jardin ?', a: 'Idéalement à l’ombre, à l’abri du vent dominant, loin des chambres des voisins et facile d’accès pour l’entretien. Nous vous proposons le meilleur emplacement lors de la visite.' },
    proches: ['sanary-sur-mer', 'la-seyne-sur-mer', 'toulon'],
  },
  {
    slug: 'sanary-sur-mer',
    nom: 'Sanary-sur-Mer',
    cp: '83110',
    accroche: 'Village de bord de mer, résidences secondaires et locations : une clim fiable, saison après saison.',
    intro: [
      'À Sanary-sur-Mer, beaucoup de logements sont des résidences secondaires ou des locations saisonnières. Une climatisation qui fonctionne dès l’arrivée des vacanciers est indispensable : l’entretien avant la saison est la meilleure garantie.',
      'Nous intervenons au centre, à Portissol, à La Gorguette et dans tous les quartiers de Sanary, pour poser, entretenir, dépanner ou remplacer votre climatisation.',
    ],
    local: [
      { t: 'Locations saisonnières', d: 'Entretien planifié au printemps, intervention rapide en cas de panne pendant la saison : vos locataires restent au frais.' },
      { t: 'Centre ancien', d: 'Dans les rues proches du port, nous étudions une pose discrète, respectueuse des façades.' },
      { t: 'Pilotage à distance', d: 'Selon les modèles, vous pouvez allumer la clim depuis votre téléphone avant d’arriver.' },
    ],
    secteurs: ['Centre et port', 'Portissol', 'La Gorguette', 'Beaucours', 'Pierredon'],
    faq: { q: 'Proposez-vous l’entretien des clims de locations saisonnières ?', a: 'Oui. Nous planifions une visite avant la saison et intervenons en priorité en cas de panne pendant les séjours, selon la formule choisie.' },
    proches: ['six-fours-les-plages', 'la-seyne-sur-mer', 'toulon'],
  },
  {
    slug: 'la-garde',
    nom: 'La Garde',
    cp: '83130',
    accroche: 'Maisons, résidences et locaux : une climatisation efficace aux portes de Toulon.',
    intro: [
      'À La Garde, entre quartiers pavillonnaires, résidences et zones d’activité, les besoins sont variés : une chambre à rafraîchir, une maison entière à équiper ou un local professionnel à climatiser.',
      'Nous intervenons dans toute la commune, du centre au Thouars, de Sainte-Marguerite aux quartiers résidentiels, avec un devis écrit et un prix ferme annoncé avant le chantier.',
    ],
    local: [
      { t: 'Maisons des années 70 à 90', d: 'Isolation parfois limitée : nous en tenons compte dans le calcul de puissance pour un confort réel sans surconsommation.' },
      { t: 'Locaux professionnels', d: 'Bureaux et commerces : climatisation adaptée à l’occupation et à l’usage, entretien planifié.' },
      { t: 'Remplacement d’anciens appareils', d: 'Une clim de plus de 10 ou 15 ans consomme souvent bien plus qu’un modèle récent : nous vous conseillons sur l’intérêt de la remplacer.' },
    ],
    secteurs: ['Centre', 'Sainte-Marguerite', 'Le Thouars', 'La Planquette', 'Romain Rolland'],
    faq: { q: 'Faut-il remplacer une vieille climatisation qui fonctionne encore ?', a: 'Pas forcément. Mais un appareil ancien consomme plus, fait plus de bruit et utilise parfois un fluide qui n’est plus fabriqué, ce qui complique les réparations. Nous faisons le point avec vous lors d’un entretien.' },
    proches: ['toulon', 'hyeres', 'la-seyne-sur-mer'],
  },
  {
    slug: 'la-londe-les-maures',
    nom: 'La Londe-les-Maures',
    cp: '83250',
    accroche: 'Entre vignes et plages, une climatisation adaptée aux maisons et villas londaises.',
    intro: [
      'À La Londe-les-Maures, les maisons entourées de vignes et les résidences proches de Miramar connaissent des étés très ensoleillés. Une climatisation bien dimensionnée garde la maison agréable même lors des pics de chaleur.',
      'Nous intervenons dans toute la commune, du centre au port de Miramar, en passant par les domaines et les quartiers résidentiels.',
    ],
    local: [
      { t: 'Maisons de plain-pied', d: 'Souvent en multisplit : une unité par pièce de vie et par chambre, reliées à un seul groupe extérieur.' },
      { t: 'Résidences secondaires', d: 'Entretien avant l’été et pilotage à distance selon les modèles.' },
      { t: 'Bord de mer', d: 'À Miramar, l’air salin rend l’entretien régulier de l’unité extérieure encore plus important.' },
    ],
    secteurs: ['Centre', 'Miramar', 'Les Bormettes', 'Valcros', 'Les Jassons'],
    faq: { q: 'Combien d’unités intérieures pour une maison de plain-pied ?', a: 'Cela dépend des pièces à climatiser : souvent une unité dans le séjour et une par chambre. Le multisplit permet de toutes les relier à un seul groupe extérieur. Nous vous proposons la configuration adaptée lors du devis.' },
    proches: ['hyeres', 'le-lavandou', 'la-garde'],
  },
  {
    slug: 'le-lavandou',
    nom: 'Le Lavandou',
    cp: '83980',
    accroche: 'Villas sur les hauteurs et appartements face à la mer : une clim discrète et durable.',
    intro: [
      'Au Lavandou, beaucoup de logements sont exposés plein sud, face à la mer, ou perchés sur des terrains en pente. La climatisation doit être efficace, silencieuse et bien protégée des embruns.',
      'Nous intervenons au Lavandou, à Cavalière, à Aiguebelle, à La Fossette et dans tous les quartiers, pour l’installation comme pour l’entretien.',
    ],
    local: [
      { t: 'Terrains en pente', d: 'Accès et emplacement de l’unité extérieure étudiés lors de la visite pour une pose sûre et un entretien facile.' },
      { t: 'Exposition plein sud', d: 'Puissance calculée selon l’ensoleillement réel des pièces, pas seulement selon la surface.' },
      { t: 'Embruns', d: 'Emplacement abrité et entretien régulier pour protéger l’échangeur extérieur.' },
    ],
    secteurs: ['Centre et port', 'Saint-Clair', 'La Fossette', 'Aiguebelle', 'Cavalière', 'Pramousquier'],
    faq: { q: 'Intervenez-vous à Cavalière et Aiguebelle ?', a: 'Oui, nous intervenons dans tous les quartiers du Lavandou, y compris Cavalière, Aiguebelle et Pramousquier.' },
    proches: ['la-londe-les-maures', 'hyeres', 'sainte-maxime'],
  },
  {
    slug: 'frejus',
    nom: 'Fréjus',
    cp: '83600',
    accroche: 'Centre historique, Port-Fréjus, Saint-Aygulf : une climatisation adaptée à chaque quartier.',
    intro: [
      'Fréjus mêle centre historique, quartiers résidentiels et bord de mer, de Port-Fréjus à Saint-Aygulf. Les étés y sont chauds et longs : une clim bien choisie rend le logement agréable toute la saison.',
      'Nous intervenons à Fréjus pour l’installation, l’entretien, le dépannage et le remplacement de climatisation, avec un devis écrit et un prix ferme.',
    ],
    local: [
      { t: 'Centre historique', d: 'Bâti ancien et règles d’urbanisme : nous étudions une pose discrète et vous aidons à préparer les démarches si nécessaire.' },
      { t: 'Port-Fréjus et Saint-Aygulf', d: 'Appartements et résidences de bord de mer : entretien régulier contre l’air salin.' },
      { t: 'Quartiers résidentiels', d: 'Maisons individuelles : mono ou multisplit selon le nombre de pièces.' },
    ],
    secteurs: ['Centre historique', 'Port-Fréjus', 'Saint-Aygulf', 'La Tour de Mare', 'Caïs', 'Les Sables'],
    faq: { q: 'Intervenez-vous à Saint-Aygulf ?', a: 'Oui, Saint-Aygulf fait partie de Fréjus : nous y intervenons comme dans le reste de la commune.' },
    proches: ['saint-raphael', 'sainte-maxime', 'draguignan'],
  },
  {
    slug: 'saint-raphael',
    nom: 'Saint-Raphaël',
    cp: '83700',
    accroche: 'Villas de Valescure, appartements du front de mer, Agay : une clim fiable et silencieuse.',
    intro: [
      'À Saint-Raphaël, des villas de Valescure aux appartements du front de mer, le confort l’été passe par une climatisation silencieuse et bien dimensionnée.',
      'Nous intervenons à Saint-Raphaël, Boulouris, Agay, Le Dramont et Valescure, pour poser, entretenir, dépanner ou remplacer votre climatisation.',
    ],
    local: [
      { t: 'Villas et grandes surfaces', d: 'Multisplit ou plusieurs systèmes selon la configuration : nous étudions la solution la plus efficace.' },
      { t: 'Front de mer', d: 'Air salin et vent : emplacement abrité et entretien régulier.' },
      { t: 'Résidences secondaires', d: 'Entretien avant la saison pour une clim prête dès votre arrivée.' },
    ],
    secteurs: ['Centre-ville', 'Valescure', 'Boulouris', 'Le Dramont', 'Agay', 'Santa Lucia'],
    faq: { q: 'Quelle climatisation pour une grande villa ?', a: 'Tout dépend du nombre de pièces, de leur exposition et de l’usage. Plusieurs solutions sont possibles (multisplit, plusieurs systèmes indépendants). Nous vous conseillons après une visite.' },
    proches: ['frejus', 'sainte-maxime'],
  },
  {
    slug: 'sainte-maxime',
    nom: 'Sainte-Maxime',
    cp: '83120',
    accroche: 'Golfe de Saint-Tropez : une climatisation prête pour l’été, dans les villas comme dans les appartements.',
    intro: [
      'À Sainte-Maxime et dans le golfe, beaucoup de logements sont occupés surtout l’été. La climatisation doit être prête au bon moment : entretien avant la saison, dépannage rapide pendant.',
      'Nous intervenons à Sainte-Maxime et dans le golfe de Saint-Tropez pour l’installation, l’entretien, le dépannage et le remplacement de climatisation.',
    ],
    local: [
      { t: 'Locations et résidences secondaires', d: 'Visites planifiées avant l’été et pilotage à distance selon les modèles.' },
      { t: 'Villas sur les hauteurs', d: 'Accès et emplacement étudiés lors de la visite, pose soignée.' },
      { t: 'Bord de mer', d: 'Entretien régulier de l’unité extérieure contre l’air salin.' },
    ],
    secteurs: ['Centre-ville', 'La Nartelle', 'Les Issambres (Roquebrune)', 'Golfe de Saint-Tropez'],
    faq: { q: 'Intervenez-vous dans le golfe de Saint-Tropez ?', a: 'Oui, nous intervenons à Sainte-Maxime et dans les communes du golfe. Plus loin, sur demande, sans problème.' },
    proches: ['frejus', 'saint-raphael', 'le-lavandou'],
  },
  {
    slug: 'draguignan',
    nom: 'Draguignan',
    cp: '83300',
    accroche: 'Étés brûlants, hivers plus frais : la clim réversible prend tout son sens dans la Dracénie.',
    intro: [
      'À Draguignan et dans la Dracénie, loin de la mer, les étés sont plus chauds et les hivers plus frais que sur le littoral. La climatisation réversible apporte la fraîcheur l’été et un chauffage confortable en hiver.',
      'Nous intervenons à Draguignan et dans ses environs pour l’installation, l’entretien, le dépannage et le remplacement de climatisation.',
    ],
    local: [
      { t: 'Clim réversible pour l’hiver', d: 'Les modèles récents chauffent efficacement même par temps froid : nous choisissons un appareil adapté aux températures de l’arrière-pays.' },
      { t: 'Maisons de village', d: 'Murs épais, petites ouvertures : un calcul de puissance précis évite le surdimensionnement.' },
      { t: 'Pics de chaleur', d: 'Une puissance bien calculée garde la maison fraîche même pendant les canicules.' },
    ],
    secteurs: ['Centre-ville', 'Dracénie', 'Trans-en-Provence', 'Flayosc', 'Les Arcs'],
    faq: { q: 'Une clim réversible peut-elle chauffer quand il gèle ?', a: 'Les modèles récents continuent de chauffer à des températures négatives, avec un rendement qui baisse quand il fait très froid. Dans la Dracénie, c’est en général suffisant ; nous vous conseillons selon votre logement.' },
    proches: ['frejus', 'brignoles'],
  },
  {
    slug: 'brignoles',
    nom: 'Brignoles',
    cp: '83170',
    accroche: 'Provence Verte : une climatisation réversible pour les étés chauds et les hivers frais.',
    intro: [
      'À Brignoles et en Provence Verte, les écarts de température entre l’été et l’hiver sont marqués. La climatisation réversible répond aux deux : fraîcheur pendant les fortes chaleurs, chauffage d’appoint efficace en hiver.',
      'Nous intervenons à Brignoles et dans les communes alentour pour l’installation, l’entretien, le dépannage et le remplacement de climatisation.',
    ],
    local: [
      { t: 'Maisons individuelles', d: 'Mono ou multisplit selon le nombre de pièces, avec un groupe extérieur bien placé.' },
      { t: 'Chauffage d’appoint', d: 'La clim réversible peut compléter ou remplacer un chauffage électrique ancien et coûteux.' },
      { t: 'Entretien', d: 'Un entretien régulier garde de bonnes performances été comme hiver.' },
    ],
    secteurs: ['Centre-ville', 'Provence Verte', 'Le Val', 'Tourves', 'Saint-Maximin (83)'],
    faq: { q: 'Intervenez-vous en Provence Verte ?', a: 'Oui, nous intervenons à Brignoles et dans les communes alentour. Plus loin, sur demande, sans problème.' },
    proches: ['draguignan', 'toulon'],
  },
];

export const villeParSlug = (slug: string) => villes.find((v) => v.slug === slug);
