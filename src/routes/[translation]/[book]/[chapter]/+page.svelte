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

<Sheet.Root closeOnOutsideClick={false} open={isCopyDrawerOpen} preventScroll={false}>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
			<Sheet.Description>
			  This action cannot be undone. This will permanently delete your account
			  and remove your data from our servers.
			</Sheet.Description>
		  </Sheet.Header>
		</Sheet.Content>
</Sheet.Root>