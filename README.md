# La Cigale Énergie — site web

Site vitrine (Astro + Tailwind) : accueil, page climatisation, formulaire de devis, mentions légales, confidentialité.

## Modifier le site (le plus simple : avec Claude Code)
Ouvrez ce dossier dans Claude Code (en ligne ou sur ordinateur) et décrivez ce que vous voulez, par exemple :
« Change le téléphone », « ajoute une section avis clients », « active le service plomberie ».

Où se trouvent les choses :
- `src/config/site.ts` : nom, téléphone, email, Instagram, adresse, zone, mentions légales et médiateur (à compléter)
- `src/config/services.ts` : services (passer `enabled` à `true` pour en ouvrir un)
- `src/data/entretien.ts` : formules d'entretien (aucun prix affiché)
- `src/components/Realisations.astro` : photos de chantiers (déposer les photos dans `public/realisations/`)
- `src/data/avis.ts` : avis Google affichés sous les réalisations (section cachée tant que la liste est vide)
- `src/content/blog/` : articles du blog (un fichier .md par article, adresse /blog/<nom-du-fichier>)
- `src/data/villes.ts` : pages « Climatisation à <ville> » (adresse /climatisation/<ville>), un texte propre à chaque ville
- `src/pages/calculateur-clim.astro` : calculateur de puissance
- `src/pages/` : les pages
- `src/components/EnergyVisual.astro` : illustration en haut de l’accueil (maison + domaines)
- `src/components/HeroVisual.astro` : illustration clim animée en haut de la page climatisation
- `src/styles/global.css` : couleurs (variables en haut)
- `src/pages/api/devis.ts` : envoi des demandes de devis par email

## Mettre en ligne (Vercel)
1. vercel.com > Add New > Project > importer ce dépôt GitHub (Astro est détecté tout seul).
2. Dans Settings > Environment Variables, ajouter :
   - `RESEND_API_KEY` (clé créée sur resend.com)
   - `DEVIS_TO_EMAIL` (adresse qui reçoit les demandes)
   - `DEVIS_FROM_EMAIL` (facultatif, une fois votre domaine validé chez Resend)
   puis relancer un déploiement (Deployments > Redeploy).
3. Chaque modification poussée sur GitHub met le site à jour automatiquement.

## Référencement (SEO)
- Le site est caché à Google tant que `prelancement: true` dans `src/config/site.ts` : passer à `false` au lancement.
- Ensuite : déclarer le site dans Google Search Console et envoyer `sitemap-index.xml`.
- Créer la fiche Google Business Profile (indispensable pour « clim près de chez moi »).
- Publier 1 à 2 articles par mois dans `src/content/blog/`.

## Avant de publier
- Remplacer téléphone, email, Instagram, WhatsApp dans `src/config/site.ts`.
- Compléter l’adresse et les mentions légales (SIRET, capital, gérant, médiateur de la consommation) dans le même fichier : tant qu’un champ est vide, la page Mentions légales affiche [à compléter].
- Vérifier l'adresse du site (`site` dans `astro.config.mjs`, et `robots.txt`).

## En local
`npm install` puis `npm run dev`.
