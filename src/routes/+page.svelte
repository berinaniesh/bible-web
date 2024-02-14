<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TranslationCard from '$lib/components/TranslationCard.svelte';
	const currentLocation = [{ location: '/', locationName: 'Home', isFinal: true }];
</script>

<div>
	<div class="my-4">
		<Breadcrumb crumbItems={currentLocation} />
	</div>
	<div class="font-2xl my-4 font-bold">Available Translations</div>
	<div class="grid grid-cols-1 md:grid-cols-2">
		{#each data.translations as translation}
			<div class="m-4 ml-6 w-80"><TranslationCard {translation} /></div>
		{/each}
	</div>
	<div class="my-8 flex justify-center">
		<Footer />
	</div>
</div>
