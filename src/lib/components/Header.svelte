<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { toggleMode } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';
</script>

<div class="my-1 flex h-12 flex-col justify-center">
	<div class="grid grid-cols-2">
		<div class="flex">
			<a href="/" class="flex flex-col justify-center text-2xl font-bold"><p>The Bible</p></a>
		</div>
		<div class="flex justify-between text-3xl">
			<div>
				<!-- Empty div to get justify-between -->
			</div>
			<div class="flex flex-col justify-center">
				<Button variant="outline" class="w-12 text-lg" on:click={toggleMode}>
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>
		</div>
	</div>
</div>
