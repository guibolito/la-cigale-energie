# La Cigale Énergie — site web

Site vitrine (Astro + Tailwind) : accueil, page climatisation, formulaire de devis, mentions légales, confidentialité.

## Modifier le site (le plus simple : avec Claude Code)
Ouvrez ce dossier dans Claude Code (en ligne ou sur ordinateur) et décrivez ce que vous voulez, par exemple :
« Change le téléphone », « ajoute une section avis clients », « active le service plomberie ».

Où se trouvent les choses :
- `src/config/site.ts` : nom, téléphone, email, Instagram, adresse, zone, mentions légales et médiateur (à compléter)
- `src/config/services.ts` : services (passer `enabled` à `true` pour en ouvrir un)
- `src/data/entretien.ts` : formules et prix d'entretien (à vérifier avant publication)
- `src/components/Realisations.astro` : photos de chantiers (déposer les photos dans `public/realisations/`)
- `src/pages/` : les pages
- `src/components/EnergyVisual.astro` : illustration en haut de l’accueil (maison + domaines)
- `src/components/HeroVisual.astro` : illustration clim animée en haut de la page climatisation
- `src/styles/global.css` : couleurs (variables en haut)
- `functions/api/devis.ts` : envoi des demandes de devis par email

## Mettre en ligne (Cloudflare Pages)
1. Mettre ce dossier dans un dépôt GitHub (privé).
2. Cloudflare > Workers & Pages > Create > Pages > Connect to Git > choisir le dépôt.
   Build command : `npm run build` — Output directory : `dist`.
3. Dans Settings > Variables and secrets, ajouter :
   - `RESEND_API_KEY` (clé créée sur resend.com)
   - `DEVIS_TO_EMAIL` (adresse qui reçoit les demandes)
   - `DEVIS_FROM_EMAIL` (facultatif, une fois votre domaine validé chez Resend)
4. Chaque modification poussée sur GitHub met le site à jour automatiquement.

## Avant de publier
- Remplacer téléphone, email, Instagram, WhatsApp dans `src/config/site.ts`.
- Compléter l’adresse et les mentions légales (SIRET, capital, gérant, médiateur de la consommation) dans le même fichier : tant qu’un champ est vide, la page Mentions légales affiche [à compléter].
- Vérifier les prix d'entretien et l'adresse du site (`site` dans `astro.config.mjs`, et `robots.txt`).

## En local
`npm install` puis `npm run dev`.
