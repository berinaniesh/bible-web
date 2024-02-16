<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { parallelTranslationsFormSchema, type ParallelTranslationsFormSchema } from "$lib/schema";
    import type { SuperValidated } from "sveltekit-superforms";
    import { toast } from "svelte-sonner";
    export let form: SuperValidated<ParallelTranslationsFormSchema>;
    export let currentTranslation: string;
    const translations = ["TOVBSI", "KJV", "MLSVP", "ASV"]
    export let checkedTranslations: string[] = [];    
  </script>


  <Form.Root method="POST" {form} schema={parallelTranslationsFormSchema} let:config>
    {#each translations as translation}
        {#if currentTranslation !== translation}
            <Form.Field {config} name={translation.toLowerCase()}>
                <Form.Item>
                    {#if checkedTranslations.includes(translation)}
                        <Form.Checkbox checked={true} />
                    {:else}
                        <Form.Checkbox />
                    {/if}
                    <Form.Label>{translation}</Form.Label>
                    <Form.Validation />
                </Form.Item>
            </Form.Field>
        {/if}
    {/each}
    <Form.Button on:click={() => toast.success("Preference saved")}>Submit</Form.Button>
  </Form.Root>