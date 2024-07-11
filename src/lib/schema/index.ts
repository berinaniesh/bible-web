import { z } from 'zod';

export const parallelTranslationsFormSchema = z.object({
	tovbsi: z.boolean(),
	kjv: z.boolean(),
	mlsvp: z.boolean(),
	asv: z.boolean(),
	web: z.boolean(),
	webu: z.boolean()
});

export function createParallelTranslationsFormSchema(
	tovbsi: boolean,
	kjv: boolean,
	mlsvp: boolean,
	asv: boolean,
	web: boolean,
	webu: boolean
) {
	return z.object({
		tovbsi: z.boolean().default(tovbsi),
		kjv: z.boolean().default(kjv),
		mlsvp: z.boolean().default(mlsvp),
		asv: z.boolean().default(asv),
		web: z.boolean().default(web),
		webu: z.boolean().default(webu)
	});
}

export type ParallelTranslationsFormSchema = typeof parallelTranslationsFormSchema;

export const searchFormSchema = z.object({
	search_text: z.string(),
	translation: z.string(),
	match_case: z.boolean(),
	whole_words: z.boolean(),
	book: z.optional(z.string())
});

export function createSearchFormSchema(search_text: string) {
	return z.object({
		search_text: z.string().default(search_text),
		translation: z.string().default('KJV'),
		match_case: z.boolean().default(false),
		whole_words: z.boolean().default(false)
	});
}

export type SearchFormSchema = typeof searchFormSchema;
