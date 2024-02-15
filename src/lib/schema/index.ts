import { z } from "zod";
export const parallelTranslationsFormSchema = z.object({
    tovbsi: z.boolean().default(false),
    kjv: z.boolean().default(false),
    mlsvp: z.boolean().default(false),
    asv: z.boolean().default(false)
});
export type ParallelTranslationsFormSchema = typeof parallelTranslationsFormSchema;