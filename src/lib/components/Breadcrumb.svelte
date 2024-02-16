<script lang="ts">
	import type { BreadCrumb } from '$lib/types';
	export let crumbItems: BreadCrumb[];
	import { Home, ChevronRight } from 'lucide-svelte';
</script>

<div class="my-6 flex h-8 flex-col justify-center">
	<div class="flex text-sm">
		<Home class="size-6" />
		{#each crumbItems as crumbItem}
			{#if crumbItem.isFinal}
				<div class="mx-2 font-bold">{crumbItem.locationName}</div>
			{:else if crumbItem.location === "/"}
				<div class="flex">
					<a data-sveltekit-reload class="mx-2 hover:underline" href="/">Home</a>
					<ChevronRight class="mt-[2.5px] size-4 color" color="#94aa3b8" />
				</div>
			{:else}
				<div class="flex">
					<a class="mx-2 hover:underline" href={crumbItem.location}>{crumbItem.locationName}</a>
					<ChevronRight class="mt-[2.5px] size-4" color="#94a3b8" />
				</div>
			{/if}
		{/each}
	</div>
</div>
