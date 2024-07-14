<script lang="ts">
	export let link: string | undefined;
	const footerElements = [
		{ key: 'about', text: 'About' },
		{ key: 'help', text: 'Help' },
		{ key: 'changelog', text: 'Changelog' }
	];
</script>

<div>
	{#if link}
		<a href={link}
			><p
				class="mb-8 text-center text-sm text-muted-foreground hover:cursor-pointer hover:underline hover:text-blue-600"
			>
				Continue Reading
			</p></a
		>
	{/if}
	<ul class="flex text-sm text-muted-foreground">
		{#each footerElements as footerElement}
			<li class="mx-4 hover:underline hover:text-blue-600">
				<a href={'/' + footerElement.key}>{footerElement.text}</a>
			</li>
		{/each}
		<li class="mx-4 hover:underline hover:text-blue-600">
			<a target="blank" href="https://github.com/berinaniesh/bible-web">Source</a>
		</li>
	</ul>
</div>
