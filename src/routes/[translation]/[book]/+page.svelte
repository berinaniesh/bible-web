<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{data.bookStruct.book_name} • {data.currentTranslation} • Bible</title>
</svelte:head>

<div>
	<Breadcrumb crumbItems={data.currentLocation} />
	<div class={'m-4 text-center font-bold ' + data.font}>
		{data.bookStruct.book_name}
	</div>
	<div class="mx-auto my-6 grid w-2/3 grid-cols-4 gap-3 md:grid-cols-6">
		{#each data.chapters as chapter}
			<a href={'/' + data.currentTranslation + '/' + data.currentBook + '/' + chapter}
				><Button variant="outline" class="w-12">{chapter}</Button></a
			>
		{/each}
	</div>
	<div class="mx-auto my-12 flex w-3/4 justify-between">
		{#if data.nav.previous}
			<a href={'/' + data.currentTranslation + '/' + data.nav.previous.book.replace(' ', '-')}
				><Button><ArrowLeft></ArrowLeft></Button></a
			>
		{:else}
			<div></div>
		{/if}
		{#if data.nav.next}
			<a href={'/' + data.currentTranslation + '/' + data.nav.next.book.replace(' ', '-')}
				><Button><ArrowRight></ArrowRight></Button></a
			>
		{:else}
			<div></div>
		{/if}
	</div>
</div>
