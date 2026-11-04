// Fonction Cloudflare Pages : reçoit le formulaire de devis et l'envoie par email via Resend.
// Variables à définir dans Cloudflare Pages > Settings > Variables and secrets :
//   RESEND_API_KEY  (secret)   clé API Resend (https://resend.com)
//   DEVIS_TO_EMAIL             adresse qui reçoit les demandes
//   DEVIS_FROM_EMAIL           expéditeur, ex. "La Cigale Énergie <devis@votre-domaine.fr>"
//                              (par défaut : onboarding@resend.dev, pour les tests)

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const profils: Record<string, string> = {
  particulier: 'Particulier',
  professionnel: 'Professionnel / artisan',
  agence: 'Agence ou conciergerie',
  syndic: 'Syndic / copropriété',
};
const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const onRequestPost = async ({ request, env }: { request: Request; env: Record<string, string> }) => {
  let d: Record<string, string>;
  try {
    d = await request.json();
  } catch {
    return json({ ok: false }, 400);
  }

  // Anti-spam : champ caché rempli = robot, on répond OK sans rien envoyer.
  if (d.site_web) return json({ ok: true });

  const v = (k: string, max = 500) => String(d[k] ?? '').trim().slice(0, max);
  const nom = v('nom', 100);
  const telephone = v('telephone', 30);
  const email = v('email', 120);
  const commune = v('commune', 100);
  const besoin = v('besoin', 40);
  if (!nom || !/^[+0-9 .()-]{8,}$/.test(telephone) || !commune || !besoin || !d.consentement) return json({ ok: false }, 422);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ ok: false }, 422);

  if (!env.RESEND_API_KEY || !env.DEVIS_TO_EMAIL) return json({ ok: false, error: 'config' }, 500);

  const rows: [string, string][] = [
    ['Nom', nom],
    ['Téléphone', telephone],
    ['Email', email],
    ['Commune', commune],
    ['Profil', profils[v('demandeur', 40)] ?? v('demandeur', 40)],
    ['Besoin', besoin],
    ['Message', v('message', 2000) || '—'],
  ];
  const html = `<h2>Nouvelle demande de devis</h2><table cellpadding="6">${rows
    .map(([k, val]) => `<tr><td><b>${k}</b></td><td>${esc(val).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.DEVIS_FROM_EMAIL || 'La Cigale Énergie <onboarding@resend.dev>',
      to: [env.DEVIS_TO_EMAIL],
      reply_to: email,
      subject: `Demande de devis – ${besoin} – ${commune}`,
      html,
    }),
  });
  return res.ok ? json({ ok: true }) : json({ ok: false }, 502);
};
