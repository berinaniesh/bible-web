import { z } from "zod";

export const parallelTranslationsFormSchema = z.object({
    tovbsi: z.boolean(),
    kjv: z.boolean(),
    mlsvp: z.boolean(),
    asv: z.boolean()
});

export type ParallelTranslationsFormSchema = typeof parallelTranslationsFormSchema;