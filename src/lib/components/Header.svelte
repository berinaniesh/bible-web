<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { toggleMode } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import Search from 'lucide-svelte/icons/search';
	import Rows2 from 'lucide-svelte/icons/rows-2';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import ParallelTranslationsForm from '$lib/components/ParallelTranslationsForm.svelte';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import { TRANSLATIONS, BOOKS } from '$lib/constants';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { browser } from '$app/environment';
	export let displayParallel: boolean = false;
	export let currentTranslation: string = '';
	export let parallelSelectionForm: any = '';
	export let checkedTranslations: string[] = [];
	let searchTranslation: String = '';
	let searchBook: String = '';
	let searchMatchCase: boolean = false;
	let searchWholeWord: boolean = false;
	let searchString: String = '';
	$: searchButtonEnabled = searchString.length !== 0 && searchTranslation.length !== 0;
	let searchPath = '';

	function getSearchPath() {
		let result = '/search';
		if (browser) {
			if (searchString.length !== 0) {
				result = result + '?q=' + searchString;
			}
			if (searchTranslation.length !== 0) {
				result = result + '&translation=' + searchTranslation;
			}
			if (searchBook.length !== 0) {
				result = result + '&book=' + searchBook;
			}
			if (searchMatchCase) {
				result = result + '&matchcase=true';
			} else {
				result = result + '&matchcase=false';
			}
			if (searchWholeWord) {
				result = result + '&wholewords=true';
			} else {
				result = result + '&wholewords=false';
			}
		}
		return result;
	}

	function updateSearchTranslation(v: any) {
		searchTranslation = v.value;
		searchPath = getSearchPath();
	}

	function updateSearchBook(v: any) {
		searchBook = v.value;
		searchPath = getSearchPath();
	}

	function updateMatchCase(v: boolean) {
		searchMatchCase = v;
		searchPath = getSearchPath();
	}

	function updateWholeWord(v: boolean) {
		searchWholeWord = v;
		searchPath = getSearchPath();
	}
</script>

<div class="my-1 flex h-12 flex-col justify-center px-2">
	<div class="grid grid-cols-2">
		<div class="flex">
			<a href="/" class="flex flex-col justify-center text-2xl font-bold hover:text-blue-600"
				><p>The Bible</p></a
			>
		</div>
		<div class="flex justify-between text-3xl">
			<div>
				<!-- Empty div to get justify-between -->
			</div>
			<div class="flex flex-col justify-center">
				<div class="flex">
					<div class="mr-2">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<Button builders={[builder]} variant="outline">
									<Search></Search>
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-64 p-8">
								<div>
									<p class="text-lg font-bold">Search</p>
									<p class="mb-2 text-sm text-muted-foreground">
										Find bible verses with specific text.
									</p>
								</div>
								<div>
									<Input bind:value={searchString} class="my-2" placeholder="Search text" />
									<div class="my-2">
										<Select.Root onSelectedChange={(v) => updateSearchTranslation(v)}>
											<Select.Trigger>
												<Select.Value placeholder="Translation" />
											</Select.Trigger>
											<Select.Content>
												<Select.Group>
													{#each TRANSLATIONS as tr}
														<Select.Item value={tr}>{tr}</Select.Item>
													{/each}
												</Select.Group>
											</Select.Content>
										</Select.Root>
									</div>
									<div class="my-2">
										<Select.Root onSelectedChange={(v) => updateSearchBook(v)}>
											<Select.Trigger>
												<Select.Value placeholder="Book (optional)" />
											</Select.Trigger>
											<Select.Content class="h-48 overflow-y-scroll">
												<Select.Group>
													{#each BOOKS as b}
														<Select.Item value={b}>{b}</Select.Item>
													{/each}
												</Select.Group>
											</Select.Content>
										</Select.Root>
									</div>
									<div class="my-2">
										<Switch id="matchcase" onCheckedChange={(v) => updateMatchCase(v)} />
										<Label for="matchcase">Match case</Label>
									</div>
									<div class="my-2">
										<Switch id="wholewords" onCheckedChange={(v) => updateWholeWord(v)} />
										<Label for="wholewords">Whole word</Label>
									</div>
									<div class="my-2 ml-[136px]">
										{#if searchButtonEnabled}
											<DropdownMenu.Item>
												<Button href={searchPath}>Go</Button>
											</DropdownMenu.Item>
										{:else}
											<Button disabled>Go</Button>
										{/if}
									</div>
								</div>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</div>
					{#if displayParallel === true}
						<div class="mr-2 flex flex-col justify-center">
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
						</div>
					{/if}

					<Button variant="outline" class="mr-2 w-12 text-lg" on:click={toggleMode}>
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
