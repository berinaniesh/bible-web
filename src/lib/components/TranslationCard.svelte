<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from './ui/button/button.svelte';
	import type { Translation } from '$lib/types';
	export let translation: Translation;
</script>

<Card.Root class="bg-[url('/marbletexture.avif')]">
	<Card.Header>
		<Card.Title><a href={`/${translation.name}`}>{translation.name}</a></Card.Title>
		<Card.Description>{translation.full_name}</Card.Description>
	</Card.Header>
	<Card.Content>
		{translation.language}
	</Card.Content>
	<Card.Footer class="flex justify-between">
		{translation.year}
		<a href={'/' + translation.name}><Button>Read</Button></a>
	</Card.Footer>
</Card.Root>
