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
	import { getContext } from 'svelte';
	import { get } from 'svelte/store';
	const copiedVerses: any = getContext('copiedVerses');
	function addToCopiedArray(verse: Verse) {
		let oldArray: Verse[] = get(copiedVerses);
		if (!oldArray.includes(verse)) {
			oldArray = [...oldArray, verse]
		} else {
			oldArray = oldArray.filter(obj => obj.verse != verse.verse)
		}
		copiedVerses.set(oldArray)
	}
</script>

<p on:dblclick={()=>{addToCopiedArray(verse)}} class={'my-4 leading-loose ' + font}>
	<sup>{verse.verse_number}</sup>
	{verse.verse}
	{#if parallel}
		<sup class="text-muted-foreground">{verse.translation}</sup>
	{/if}
</p>
