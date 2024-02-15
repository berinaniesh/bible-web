<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { Separator } from "$lib/components/ui/separator";
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title
		>{data.bookStruct.book_name} {data.currentChapter} • {data.currentTranslation} • Bible</title
	>
</svelte:head>

<Header displayParallel={true} parallelSelectionForm={data.form} currentTranslation={data.currentTranslation}/>
<Separator />

<Breadcrumb crumbItems={data.currentLocation} />
<div class={'m-4 text-center font-bold ' + data.font}>
	{data.bookStruct.book_name}
	{data.currentChapter}
</div>
{#each data.verses as verse}
	<p class={'my-4 leading-loose ' + data.font}><sup>{verse.verse_number}</sup> {verse.verse}</p>
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
