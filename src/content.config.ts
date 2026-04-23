import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cv = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cv' }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    eyebrow: z.string().optional(),
    summary: z.string().optional(),
    accent: z.string().optional(),
  }),
});

export const collections = { cv };
