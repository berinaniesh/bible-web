<script lang="ts">
	export let data;
</script>


<svelte:head>
	<title>Search • Bible</title>
</svelte:head>

<h1 class="mb-4 text-xl font-bold">Search results</h1>
<p>Query: {data.search_text}, Translation: {data.search_translation}</p>
<ul class="mb-8 ml-4 list-disc leading-8 md:ml-8">
    {#each data.verses as v}
    <li>{v.verse}</li>
    {/each}
</ul>
