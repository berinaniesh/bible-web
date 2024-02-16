<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TranslationCard from '$lib/components/TranslationCard.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>The Bible</title>
</svelte:head>

<Header displayParallel={false} parallelSelectionForm={''} currentTranslation={''} />
<Separator />
<div class="w-full">
	<Breadcrumb crumbItems={data.currentLocation} />
	<div class="font-2xl mb-2 text-center font-bold">Available Translations</div>
	<div class="mx-auto grid w-full grid-cols-1 md:grid-cols-2">
		{#each data.translations as translation}
			<div class="m-4 my-6 ml-7 w-80"><TranslationCard {translation} /></div>
		{/each}
	</div>
	<div class="my-8 flex justify-center">
		<Footer link={data.continueReading} />
	</div>
</div>
