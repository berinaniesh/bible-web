<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from './ui/button/button.svelte';
	import type { Translation } from '$lib/types';
	export let translation: Translation;
</script>

<Card.Root class="shadow">
	<Card.Header>
		<Card.Title
			><a href={`/${translation.name}`}
				>{translation.name}
				<span class="font-normal text-muted-foreground">- {translation.language}</span></a
			></Card.Title
		>
		<Card.Description>{translation.full_name}</Card.Description>
	</Card.Header>
	<Card.Footer class="flex justify-between">
		{translation.year}
		<Button href={'/' + translation.name} variant="default">Read</Button>
	</Card.Footer>
</Card.Root>
