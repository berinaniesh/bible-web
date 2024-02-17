<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<Separator />
<Breadcrumb crumbItems={data.currentLocation} />
<h1 class="mb-4 text-xl font-bold">About</h1>
<ul class="mb-8 ml-4 list-disc leading-8 md:ml-8">
	{#each data.changelog as log}
		<li>{log.date} - {log.text}</li>
	{/each}
</ul>
