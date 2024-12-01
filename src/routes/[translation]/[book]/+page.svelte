<script lang="ts">
	export let data;
	import Button from '$lib/components/ui/button/button.svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { Separator } from '$lib/components/ui/separator';
</script>

<svelte:head>
	<title>{data.bookStruct.book_name} • {data.currentTranslation} • Bible</title>
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
					href={'/' + data.currentTranslation + '/' + data.nav.previous.book.replace(' ', '-')}
					variant="outline"><ArrowLeft></ArrowLeft></Button
				>
			{:else}
				<div></div>
			{/if}
		</div>
		<Button href={`/${data.currentTranslation}`}>
			{data.bookStruct.book_name}
		</Button>
		<div>
			{#if data.nav.next}
				<Button
					href={'/' + data.currentTranslation + '/' + data.nav.next.book.replace(' ', '-')}
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
<div class="mx-auto my-6 mt-48 grid w-2/3 grid-cols-4 gap-3 md:grid-cols-6">
	{#each data.chapters as chapter}
		<Button
			href={'/' + data.currentTranslation + '/' + data.currentBook + '/' + chapter}
			variant="outline"
			class="w-12">{chapter}</Button
		>
	{/each}
</div>
