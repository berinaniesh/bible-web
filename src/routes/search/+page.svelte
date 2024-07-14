<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Search • Bible</title>
</svelte:head>

<div class="px-4 md:px-0">
	<h1 class="mb-4 text-xl font-bold">Search results</h1>
	<div class="my-6">
		<p>{@html data.queryString}</p>
	</div>

	{#if data.verses.length === 0}
		<div>No verses found for the search query.</div>
	{:else}
		<ul class="mb-8 ml-4 list-disc space-y-4 leading-8 md:ml-8">
			{#each data.verses as v}
				<li>
					{@html v.verse} -
					<a
						class="text-blue-600 underline"
						href={`/${data.search_translation}/${v.book.replace(' ', '-')}/${v.chapter}#${v.verse_number}`}
						>{v.book_name} {v.chapter}:{v.verse_number}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
