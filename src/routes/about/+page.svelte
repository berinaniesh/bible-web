<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>About • Bible</title>
</svelte:head>

<h1 class="mb-4 text-xl font-bold">About</h1>
<ul class="mb-8 ml-4 list-disc leading-8 md:ml-8">
	{#each data.aboutPoints as point}
		<li>{@html point}</li>
	{/each}
</ul>
