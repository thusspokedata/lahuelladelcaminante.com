import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    order: z.number(),
    description: z.object({ es: z.string(), en: z.string() }),
    tags: z.array(z.string()),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['es', 'en']),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, notes };
