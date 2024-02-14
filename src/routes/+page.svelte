<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TranslationCard from '$lib/components/TranslationCard.svelte';
</script>

<div class="w-full">
	<Breadcrumb crumbItems={data.currentLocation} />
	<div class="font-2xl my-2 font-bold text-center">Available Translations</div>
	<div class="grid grid-cols-1 md:grid-cols-2 mx-auto w-full">
		{#each data.translations as translation}
			<div class="m-4 my-6 w-80"><TranslationCard {translation} /></div>
		{/each}
	</div>
	<div class="my-8 flex justify-center">
		<Footer />
	</div>
</div>
