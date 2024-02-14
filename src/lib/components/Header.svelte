<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	export let isDark: boolean;
	let isSideMenuOpen: boolean = false;
	import { Sun, Moon, Plus, Minus, X } from 'lucide-svelte';

	function handleSideMenuButtonClick() {
		isSideMenuOpen = !isSideMenuOpen;
	}
</script>

<div class="my-1 flex h-12 flex-col justify-center">
	<div class="grid grid-cols-2">
		<div class="flex">
			<a href="/"><img class="mr-2 w-8 h-10" alt="main-logo" src="/favicon.png" /></a>
			<a href="/" class="flex flex-col justify-center text-2xl font-bold"><p>The Bible</p></a>
		</div>
		<div class="flex justify-between text-3xl">
			<div>
				<!-- Empty div to get justify-between -->
			</div>
			<div class="flex flex-col justify-center">
				<Button variant="outline" class="w-12 text-lg" on:click={handleSideMenuButtonClick}>
					{#if isSideMenuOpen}
						X
					{:else}
						☰
					{/if}
				</Button>
			</div>
		</div>
	</div>
</div>
