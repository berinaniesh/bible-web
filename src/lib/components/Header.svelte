<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { toggleMode } from 'mode-watcher';
	import { Sun, Moon, Rows2 } from 'lucide-svelte';
	import * as Popover from '$lib/components/ui/popover';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import ParallelTranslationsForm from '$lib/components/ParallelTranslationsForm.svelte';
	export let displayParallel: boolean = false;
	export let currentTranslation: string = '';
	export let parallelSelectionForm: any = '';
	export let checkedTranslations: string[] = [];
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
				<div class="flex">
					<div class="mx-2 flex flex-col justify-center">
						{#if displayParallel === true}
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<Button builders={[builder]} variant="outline"><Rows2 /></Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content class="w-64 p-8">
									<div>
										<p class="text-lg font-bold">Parallel Reading</p>
										<p class="mb-2 text-sm text-muted-foreground">
											Select translations to read together.
										</p>
									</div>

									<div>
										<ParallelTranslationsForm
											form={parallelSelectionForm}
											{currentTranslation}
											{checkedTranslations}
										/>
									</div>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						{/if}
					</div>
					<Button variant="outline" class="mx-2 w-12 text-lg" on:click={toggleMode}>
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
</div>
