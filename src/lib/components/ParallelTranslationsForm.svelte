<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { parallelTranslationsFormSchema, type ParallelTranslationsFormSchema } from "$lib/schema";
    import type { SuperValidated } from "sveltekit-superforms";
    export let form: SuperValidated<ParallelTranslationsFormSchema>;
    export let currentTranslation: string;
    const translations = ["TOVBSI", "KJV", "MLSVP", "ASV"]
  </script>


  <Form.Root method="POST" {form} schema={parallelTranslationsFormSchema} let:config>
    {#each translations as translation}
        {#if currentTranslation !== translation}
            <Form.Field {config} name={translation.toLowerCase()}>
                <Form.Item>
                    <Form.Checkbox />
                    <Form.Label>{translation}</Form.Label>
                    <Form.Validation />
                </Form.Item>
            </Form.Field>
        {/if}
    {/each}
    <Form.Button>Submit</Form.Button>
  </Form.Root>