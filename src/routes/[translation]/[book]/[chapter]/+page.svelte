<script lang="ts">
	export let data;
	import Button from '$lib/components/ui/button/button.svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { Separator } from '$lib/components/ui/separator';
	import Verse from '$lib/components/Verse.svelte';
	import type { Verse as VerseType } from '$lib/types';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import * as Sheet from '$lib/components/ui/sheetmod/index.js';
	import { browser } from '$app/environment';
	import { toast } from 'svelte-sonner';
	import { mediaQuery } from 'svelte-legos';

	const copiedVerses = writable();
	copiedVerses.set([]);
	setContext('copiedVerses', copiedVerses);
	let isCopyDrawerOpen: boolean = false;
	let selectedVerses: VerseType[];
	copiedVerses.subscribe((verseArray: any) => {
		if (verseArray.length !== 0) {
			isCopyDrawerOpen = true;
		} else {
			isCopyDrawerOpen = false;
		}
		selectedVerses = verseArray;
	});

	const isDesktop = mediaQuery('(min-width: 768px)');

	function convertCommaToDash(input: string) {
		const numbers = input.split(',').map(Number);
		let condensedRanges = [];
		let startRange = numbers[0];
		let endRange = numbers[0];

		for (let i = 1; i < numbers.length; i++) {
			if (numbers[i] === endRange + 1) {
				endRange = numbers[i];
			} else {
				if (startRange === endRange) {
					condensedRanges.push(startRange.toString());
				} else {
					condensedRanges.push(startRange + '-' + endRange);
				}
				startRange = numbers[i];
				endRange = numbers[i];
			}
		}

		if (startRange === endRange) {
			condensedRanges.push(startRange.toString());
		} else {
			condensedRanges.push(startRange + '-' + endRange);
		}
		condensedRanges.pop();
		return condensedRanges.join(',');
	}

	function getVerseNumbers() {
		if (browser) {
			const groupedVerses = selectedVerses.reduce((accumulator: any, verse) => {
				const tra = verse.translation;
				if (!accumulator[tra]) {
					accumulator[tra] = [];
				}
				accumulator[tra].push(verse);
				return accumulator;
			}, {});
			for (const tra in groupedVerses) {
				groupedVerses[tra].sort((a: any, b: any) => a.verse_number - b.verse_number);
			}
			let chapterStrings: string[] = [];
			let chapterVerses: string[] = [];
			for (const tra in groupedVerses) {
				let currentChapterString = `${groupedVerses[tra][0].book_name} ${groupedVerses[tra][0].chapter}:`;
				let currentChapterVerse = '';
				for (let i = 0; i < groupedVerses[tra].length; i++) {
					currentChapterString += groupedVerses[tra][i].verse_number + ',';
					if (groupedVerses[tra].length > 1) {
						currentChapterVerse += `${groupedVerses[tra][i].verse_number}. ${groupedVerses[tra][i].verse}\n\n`;
					} else {
						currentChapterVerse += `${groupedVerses[tra][i].verse}\n\n`;
					}
				}
				const mantissa =
					convertCommaToDash(currentChapterString.split(':')[1]) + ' ' + '(' + tra + ')';
				currentChapterString = currentChapterString.split(':')[0] + ':' + mantissa;
				chapterStrings.push(currentChapterString);
				chapterVerses.push(currentChapterVerse);
			}

			let finalString = '';
			for (let i = 0; i < chapterStrings.length; i++) {
				finalString += chapterStrings[i];
				finalString += '\n\n';
				finalString += chapterVerses[i];
			}
			navigator.clipboard.writeText(finalString.substring(0, finalString.length - 1));
		}
		toast.success('Copied');
		copiedVerses.set([]);
	}
</script>

<svelte:head>
	<title
		>{data.bookStruct.book_name}
		{data.currentChapter} • {data.currentTranslation} • VerseQuick</title
	>
</svelte:head>

<div
	class={'font-bold ' +
		data.font +
		' fixed top-28 mx-auto flex h-16 w-screen max-w-screen-md flex-col justify-center bg-background'}
>
	<div class="mx-auto flex w-11/12 justify-between">
		<div>
			{#if data.nav.previous}
				<Button
					href={'/' +
						data.currentTranslation +
						'/' +
						data.nav.previous.book.replace(' ', '-') +
						'/' +
						data.nav.previous.chapter}
					variant="outline"><ArrowLeft></ArrowLeft></Button
				>
			{:else}
				<div></div>
			{/if}
		</div>
		<Button href={`/${data.currentTranslation}/${data.currentBook}`}>
			{data.bookStruct.book_name} - {data.currentChapter} ({data.num_verses})
		</Button>
		<div>
			{#if data.nav.next}
				<Button
					href={'/' +
						data.currentTranslation +
						'/' +
						data.nav.next.book.replace(' ', '-') +
						'/' +
						data.nav.next.chapter}
					variant="outline"><ArrowRight></ArrowRight></Button
				>
			{:else}
				<div></div>
			{/if}
		</div>
	</div>
	<div class="fixed top-44 w-screen max-w-screen-md">
		<Separator></Separator>
	</div>
</div>
<div class="flex flex-col">
	<div class="h-14 w-10">
		<!-- Empty div for top positioning -->
	</div>
	<div class="px-4">
		<div>
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
		</div>

		{#if isCopyDrawerOpen && $isDesktop == false}
			<div class="h-80"></div>
		{/if}
	</div>

	{#if $isDesktop}
		<Sheet.Root closeOnOutsideClick={false} open={isCopyDrawerOpen} preventScroll={false}>
			<Sheet.Content side="right">
				<div class="mx-auto max-w-screen-md">
					<Sheet.Header>
						<Sheet.Title>Copy Verses</Sheet.Title>
						<Sheet.Description>
							Add to this drawer by clicking on any verse and then click the button below to copy
							the verses into your clipboard.
						</Sheet.Description>
					</Sheet.Header>
					<ul class="m-4 list-disc">
						{#each selectedVerses as selectedVerse}
							<li>
								{selectedVerse.book}
								{selectedVerse.chapter}:{selectedVerse.verse_number} ({selectedVerse.translation})
							</li>
						{/each}
					</ul>
					<Button on:click={getVerseNumbers}>Copy</Button>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	{:else}
		<Sheet.Root closeOnOutsideClick={false} open={isCopyDrawerOpen} preventScroll={false}>
			<Sheet.Content side="bottom">
				<div class="mx-auto max-w-screen-md">
					<Sheet.Header>
						<Sheet.Title>Copy Verses</Sheet.Title>
						<Sheet.Description>
							Add to this drawer by clicking on any verse and then click the button below to copy
							the verses into your clipboard.
						</Sheet.Description>
					</Sheet.Header>
					<ul class="m-4 list-disc">
						{#each selectedVerses as selectedVerse}
							<li>
								{selectedVerse.book}
								{selectedVerse.chapter}:{selectedVerse.verse_number} ({selectedVerse.translation})
							</li>
						{/each}
					</ul>
					<Button on:click={getVerseNumbers}>Copy</Button>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	{/if}
</div>
