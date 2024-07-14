<script lang="ts">
	import type { BreadCrumb } from '$lib/types';
	export let crumbItems: BreadCrumb[];
	import Home from 'lucide-svelte/icons/home';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
</script>

<div class="my-4 flex h-8 flex-col justify-center px-2">
	<div class="flex text-sm">
		<Home class="size-6" />
		{#each crumbItems as crumbItem}
			{#if crumbItem.isFinal}
				<div class="mx-2 font-bold">{crumbItem.locationName}</div>
			{:else}
				<div class="flex">
					<a class="mx-2 hover:underline hover:text-blue-600" href={crumbItem.location}>{crumbItem.locationName}</a>
					<ChevronRight class="mt-[2.5px] size-4" color="#94a3b8" />
				</div>
			{/if}
		{/each}
	</div>
</div>
