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
			oldArray = [...oldArray, verse];
		} else {
			oldArray = oldArray.filter((obj) => obj.verse != verse.verse);
		}
		copiedVerses.set(oldArray);
	}
	let selected = false;
	let copyDrawerEmpty = true;
	copiedVerses.subscribe((vs: Verse[]) => {
		if (vs.filter((v: Verse) => v.verse === verse.verse).length !== 0) {
			selected = true;
		} else {
			selected = false;
		}
		if (vs.length == 0) {
			copyDrawerEmpty = true;
		} else {
			copyDrawerEmpty = false;
		}
	});
</script>

<div id={verse.verse_number.toString()}>
	{#if copyDrawerEmpty}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<p
			on:dblclick={() => {
				addToCopiedArray(verse);
			}}
			on:keypress={() => {
				addToCopiedArray(verse);
			}}
			class={'my-4 leading-loose decoration-dotted scroll-mt-44 ' + font}
		>
			<sup class="-z-50 text-muted-foreground">{verse.verse_number}</sup>
			{#if selected}
				<b class="font-normal underline decoration-dotted">{verse.verse}</b>
			{:else}
				{verse.verse}
			{/if}
			{#if parallel}
				<sup class="-z-50 text-muted-foreground">{verse.translation}</sup>
			{/if}
		</p>
	{:else}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<p
			on:click={() => {
				addToCopiedArray(verse);
			}}
			on:keypress={() => {
				addToCopiedArray(verse);
			}}
			class={'my-4 leading-loose decoration-dotted scroll-mt-44' + font}
		>
			<sup class="-z-50 text-muted-foreground">{verse.verse_number}</sup>
			{#if selected}
				<b class="font-normal underline decoration-dotted">{verse.verse}</b>
			{:else}
				{verse.verse}
			{/if}
			{#if parallel}
				<sup class="-z-50 text-muted-foreground">{verse.translation}</sup>
			{/if}
		</p>
	{/if}
</div>
