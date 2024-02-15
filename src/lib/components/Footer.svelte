<script lang="ts">
	export let link: string | undefined;
	const footerElements = [
		{ key: 'about', text: 'About' },
		{ key: 'help', text: 'Help'},
		{ key: 'changelog', text: 'Changelog' }
	];
</script>

<div>
	{#if link}
		<a href={link}
			><p class="mb-8 text-center text-sm text-slate-500 hover:cursor-pointer hover:underline">
				Continue Reading
			</p></a
		>
	{/if}
	<ul class="flex text-sm text-slate-500">
		{#each footerElements as footerElement}
			<a class="mx-4 hover:underline" href={'/' + footerElement.key}
				><li>{footerElement.text}</li></a
			>
		{/each}
		<a class="mx-4 hover:underline" target="blank" href="https://github.com/berinaniesh/bible-web"
			><li>Source</li></a
		>
	</ul>
</div>
