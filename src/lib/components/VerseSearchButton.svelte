<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Search } from 'lucide-svelte';
	import Input from './ui/input/input.svelte';
	import * as Select from '$lib/components/ui/select';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { TRANSLATIONS, BOOKS } from '$lib/constants';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	$: translation =
		typeof $page.params.translation === 'undefined' ? 'KJV' : $page.params.translation;

	$: {
		const urlTranslation = $page.url.searchParams.get('translation');

		if (translation === 'KJV' && urlTranslation !== 'KJV') {
			translation = urlTranslation || 'KJV'; // Fallback to 'KJV' if no translation param is provided
		}
	}
	function onTranslationChange(value) {
		translation = value.value;
	}
	let search_string = '';
	let selected_book = null;
	let match_case = false;
	let whole_words = false;
	function onBookChange(value) {
		selected_book = value.value;
	}
	function onMatchCaseChange(value) {
		match_case = value;
	}
	function onWholeWordsChange(value) {
		whole_words = value;
	}
	async function handleSubmit(event) {
		if (browser) {
			event.preventDefault();
			const formData = new FormData();
			formData.append('searchstring', search_string);
			formData.append('translation', translation);
			formData.append('book', selected_book);
			formData.append('matchcase', match_case);
			formData.append('wholewords', whole_words);

			const response = await fetch('/search', {
				method: 'POST',
				body: formData
			});
			const data = await response.json();
			const url = JSON.parse(data.data)[0];
			window.location.href = url;
		}
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline"><Search /></Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-64 p-8">
		<div>
			<p class="text-lg font-bold">Search</p>
			<p class="mb-2 text-sm text-muted-foreground">Find bible verses with specific text.</p>
		</div>
		<form on:submit={handleSubmit}>
			<Input
				type="text"
				placeholder="Search string"
				name="searchstring"
				bind:value={search_string}
				class="mb-2"
			/>
			<div class="mb-2">
				<Select.Root onSelectedChange={(value) => onTranslationChange(value)} name="translation">
					<Select.Trigger>
						<Select.Value placeholder={translation} />
					</Select.Trigger>
					<Select.Content>
						{#each TRANSLATIONS as tr}
							<Select.Item value={tr}>{tr}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<div class="mb-2">
				<Select.Root onSelectedChange={(value) => onBookChange(value)} name="book">
					<Select.Trigger>
						<Select.Value placeholder="Book" />
					</Select.Trigger>
					<Select.Content class="h-64 overflow-y-scroll">
						{#each BOOKS as book}
							<Select.Item value={book}>{book}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<div class="mb-2 flex items-center space-x-2">
				<Switch onCheckedChange={(value) => onMatchCaseChange(value)} id="matchcase" />
				<Label for="matchcase">Match case</Label>
			</div>
			<div class="mb-2 flex items-center space-x-2">
				<Switch onCheckedChange={(value) => onWholeWordsChange(value)} id="wholewords" />
				<Label for="wholewords">Whole words</Label>
			</div>
			<Button type="submit">Search</Button>
		</form>
	</DropdownMenu.Content>
</DropdownMenu.Root>
