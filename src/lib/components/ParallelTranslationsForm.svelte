<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { parallelTranslationsFormSchema, type ParallelTranslationsFormSchema } from "$lib/schema";
    import type { SuperValidated } from "sveltekit-superforms";
    export let form: SuperValidated<ParallelTranslationsFormSchema>;
    export let currentTranslation: string;
  </script>


  <Form.Root method="POST" {form} schema={parallelTranslationsFormSchema} let:config>
    {#if currentTranslation !== "TOVBSI"}
        <Form.Field {config} name="tovbsi">
        <Form.Item>
            <Form.Checkbox />
            <Form.Label>TOVBSI</Form.Label>
            <Form.Validation />
        </Form.Item>
        </Form.Field>
    {/if}
    {#if currentTranslation !== "KJV"}
        <Form.Field {config} name="kjv">
            <Form.Item>
            <Form.Checkbox />
            <Form.Label>KJV</Form.Label>
            <Form.Validation />
            </Form.Item>
        </Form.Field>
    {/if}
    {#if currentTranslation !== "MLSVP"}
      <Form.Field {config} name="mlsvp">
        <Form.Item>
          <Form.Checkbox />
          <Form.Label>MLSVP</Form.Label>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
    {/if}
    {#if currentTranslation !== "ASV"}
      <Form.Field {config} name="asv">
        <Form.Item>
          <Form.Checkbox />
          <Form.Label>ASV</Form.Label>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
    {/if}
    <Form.Button>Submit</Form.Button>
  </Form.Root>