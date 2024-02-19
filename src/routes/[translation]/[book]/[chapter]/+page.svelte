<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Header from '$lib/components/Header.svelte';
	import Verse from '$lib/components/Verse.svelte';
	import type { Verse as VerseType } from "$lib/types";
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import * as Sheet from '$lib/components/ui/sheetmod/index.js';

	const copiedVerses = writable();
	copiedVerses.set([]);
	setContext('copiedVerses', copiedVerses);
	let isCopyDrawerOpen: boolean = false;
	let selectedVerses: VerseType[];
	copiedVerses.subscribe((verseArray: VerseType[]) => {
		if (verseArray.length !== 0) {
			isCopyDrawerOpen =  true
		} else {
			isCopyDrawerOpen = false
		}
		selectedVerses = verseArray;
	})

	function convertCommaToDash(str: string) {

		return str.substring(0, str.length-1)
	} 

	function getVerseNumbers(giveCopyString: boolean) {
		const groupedVerses = selectedVerses.reduce((accumulator, verse) => {
			const tra = verse.translation;
			if (!accumulator[tra]) {
				accumulator[tra] = [];
			}
			accumulator[tra].push(verse);
			return accumulator;
		}, {});
		for (const tra in groupedVerses) {
    		groupedVerses[tra].sort((a, b) => a.verse_number - b.verse_number);
		}
		let chapterStrings: string[] = [];
		let chapterVerses: string[] = [];
		for (const tra in groupedVerses) {
			let currentChapterString = `${groupedVerses[tra][0].book_name} ${groupedVerses[tra][0].chapter}:`
			let currentChapterVerse = "";
			for (let i=0; i<groupedVerses[tra].length; i++) {
				currentChapterString += (groupedVerses[tra][i].verse_number + ",")
				currentChapterVerse += `${groupedVerses[tra][i].verse_number}. ${groupedVerses[tra][i].verse}\n\n`;
			}
			const mantissa = convertCommaToDash(currentChapterString.split(":")[1]) + " " + "(" + tra + ")";
			currentChapterString = currentChapterString.split(":")[0] + ":" + mantissa;
			chapterStrings.push(currentChapterString);
			chapterVerses.push(currentChapterVerse.substring(0, currentChapterVerse.length-1));
		}
	}

</script>

<svelte:head>
	<title
		>{data.bookStruct.book_name} {data.currentChapter} • {data.currentTranslation} • Bible</title
	>
</svelte:head>

<Header
	displayParallel={true}
	parallelSelectionForm={data.form}
	currentTranslation={data.currentTranslation}
	checkedTranslations={data.selectedParallelTranslations}
/>
<Separator />

<Breadcrumb crumbItems={data.currentLocation} />
<div class={'m-4 text-center font-bold ' + data.font}>
	{data.bookStruct.book_name}
	{data.currentChapter}
</div>
{#each data.verses as verse, index}
	<div>
		<Verse {verse} parallel={data.parallelTranslationVerses.length !== 0} />
		{#each data.parallelTranslationVerses as parallelTranslation}
			<Verse verse={parallelTranslation[index]} parallel={true} />
		{/each}
	</div>
	{#if data.parallelTranslationVerses.length !== 0}
		<Separator></Separator>
	{/if}
{/each}
<div class="mx-auto my-12 flex w-full justify-between">
	{#if data.nav.previous}
		<a
			href={'/' +
				data.currentTranslation +
				'/' +
				data.nav.previous.book.replace(' ', '-') +
				'/' +
				data.nav.previous.chapter}><Button><ArrowLeft></ArrowLeft></Button></a
		>
	{:else}
		<div></div>
	{/if}
	{#if data.nav.next}
		<a
			href={'/' +
				data.currentTranslation +
				'/' +
				data.nav.next.book.replace(' ', '-') +
				'/' +
				data.nav.next.chapter}><Button><ArrowRight></ArrowRight></Button></a
		>
	{:else}
		<div></div>
	{/if}
</div>

<Sheet.Root closeOnOutsideClick={false} open={isCopyDrawerOpen} preventScroll={false} >
	<Sheet.Content side="right">
			<Sheet.Header>
				<Sheet.Title>Copy Verses</Sheet.Title>
				<Sheet.Description>
					Add to this drawer by clicking on the verse and click the button below.
				</Sheet.Description>
			</Sheet.Header>
			<ul class="list-disc m-4">
				{#each selectedVerses as selectedVerse}
					<li>{selectedVerse.book} {selectedVerse.chapter}:{selectedVerse.verse_number} ({selectedVerse.translation})</li>
				{/each}
			</ul>
			<Button on:click={() => {getVerseNumbers(false)}}>Copy</Button>
		</Sheet.Content>
</Sheet.Root>