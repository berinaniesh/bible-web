<script lang="ts">
	import type { Verse } from '$lib/types';
	export let verse: Verse;
	export let parallel = false;
	let font: string;
	if (verse.translation === 'TOVBSI') {
		font = 'font-tamil';
	} else if (verse.translation === 'MLSVP') {
		font = 'font-malayalam';
	} else {
		font = 'font-sans';
	}
</script>

<p class={'my-4 leading-loose ' + font}>
	<sup>{verse.verse_number}</sup>
	{verse.verse}
	{#if parallel}
		<sup class="text-muted-foreground">{verse.translation}</sup>
	{/if}
</p>
