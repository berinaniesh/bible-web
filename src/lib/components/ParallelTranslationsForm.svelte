<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import {
		createParallelTranslationsFormSchema,
		type ParallelTranslationsFormSchema
	} from '$lib/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	export let form: SuperValidated<ParallelTranslationsFormSchema>;
	export let currentTranslation: string;
	const translations = ['TOVBSI', 'KJV', 'MLSVP', 'ASV', 'WEB', 'WEBU'];
	export let checkedTranslations: string[] = [];
	let formSchema = createParallelTranslationsFormSchema(
		checkedTranslations.includes('TOVBSI'),
		checkedTranslations.includes('KJV'),
		checkedTranslations.includes('MLSVP'),
		checkedTranslations.includes('ASV'),
		checkedTranslations.includes('WEB'),
		checkedTranslations.includes('WEBU')
	);
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config>
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
	<DropdownMenu.Item class="my-2 data-[highlighted]:bg-background">
		<Form.Button class="absolute end-4 my-12" on:click={() => toast.success('Preference saved')}
			>Submit</Form.Button
		>
	</DropdownMenu.Item>
</Form.Root>
