<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Changelog • Bible</title>
</svelte:head>

<h1 class="mb-4 text-xl font-bold">Changelog</h1>
<ul class="mb-8 ml-4 list-disc leading-8 md:ml-8">
	{#each data.changelog as log}
		<li>{log.date} - {log.text}</li>
	{/each}
</ul>
