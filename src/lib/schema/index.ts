import { z } from 'zod';

export const parallelTranslationsFormSchema = z.object({
	tovbsi: z.boolean(),
	kjv: z.boolean(),
	mlsvp: z.boolean(),
	asv: z.boolean(),
	web: z.boolean()
});

export function createParallelTranslationsFormSchema(
	tovbsi: boolean,
	kjv: boolean,
	mlsvp: boolean,
	asv: boolean,
	web: boolean
) {
	return z.object({
		tovbsi: z.boolean().default(tovbsi),
		kjv: z.boolean().default(kjv),
		mlsvp: z.boolean().default(mlsvp),
		asv: z.boolean().default(asv),
		web: z.boolean().default(web)
	});
}

export type ParallelTranslationsFormSchema = typeof parallelTranslationsFormSchema;
