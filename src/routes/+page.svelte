<script lang="ts">
	export let data;
	import Footer from '$lib/components/Footer.svelte';
	import TranslationCard from '$lib/components/TranslationCard.svelte';
</script>

<svelte:head>
	<title>The Bible</title>
</svelte:head>

<div class="font-2xl mb-2 text-center font-bold">Available Translations</div>

<div class="md:grid md:grid-cols-2">
	{#each data.translations as translation}
		<div class="m-8">
			<TranslationCard {translation} />
		</div>
	{/each}
</div>

<div class="my-8 flex justify-center">
	<Footer link={data.continueReading} />
</div>
