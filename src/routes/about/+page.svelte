<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>About • Bible</title>
</svelte:head>

<div class="px-4 md:px-0">
	<h1 class="mb-8 text-xl font-bold">About</h1>
	<ul class="mb-8 ml-4 list-disc space-y-4 leading-8 md:ml-8">
		{#each data.aboutPoints as point}
			<li>{@html point}</li>
		{/each}
	</ul>
</div>
