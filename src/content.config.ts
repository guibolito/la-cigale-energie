// Articles du blog : un fichier .md par article dans src/content/blog/
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    maj: z.coerce.date().optional(),
    // Question courte affichée en accroche
    resume: z.string(),
    motsCles: z.array(z.string()).default([]),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { blog };
