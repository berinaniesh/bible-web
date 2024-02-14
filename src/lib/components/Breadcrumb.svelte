<script lang="ts">
	import type { BreadCrumb } from '$lib/types';
	export let crumbItems: BreadCrumb[];
	import { Home, ChevronRight } from 'lucide-svelte';
</script>

<div class="my-2 flex h-8 flex-col justify-center">
	<div class="flex text-sm">
		<Home class="size-6" />
		{#each crumbItems as crumbItem}
			{#if crumbItem.isFinal}
				<a class="mx-2 font-bold hover:underline" href={crumbItem.location}
					>{crumbItem.locationName}</a
				>
			{:else}
				<div class="flex">
					<a class="mx-2 hover:underline" href={crumbItem.location}>{crumbItem.locationName}</a>
					<ChevronRight class="mt-[2.5px] size-4" color="#94a3b8" />
				</div>
			{/if}
		{/each}
	</div>
</div>
