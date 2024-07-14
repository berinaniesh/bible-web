import { API_URL } from '$lib';
import type { SearchJson, Verse } from '$lib/types';
import type { PageServerLoad } from '../$types';

function highlightSearchTerm(verse: Verse, searchText: string) {
	const searchRegex = new RegExp(`${searchText}`, 'gi');
	verse.verse = verse.verse.replace(searchRegex, `<b>${searchText}</b>`);
	return verse;
}

function getQueryString(
	searchText: string,
	translation: string,
	book: string | null,
	matchCase: boolean | null,
	wholeWords: boolean | null
) {
	let queryStrings: string[] = [];
	queryStrings.push(`<b>Query</b>: ${searchText}`);
	queryStrings.push(`<b>Translation</b>: ${translation}`);
	if (book) {
		queryStrings.push(`<b>Book</b>: ${book}`);
	}
	if (matchCase) {
		queryStrings.push(`<b>Match case</b>: ${matchCase}`);
	}
	if (wholeWords) {
		queryStrings.push(`<b>Whole words</b>: ${wholeWords}`);
	}
	const queryString = queryStrings.join(', ');
	return queryString;
}

export const load: PageServerLoad = async ({ url }) => {
	let search_text = url.searchParams.get('q')!;
	let search_translation = url.searchParams.get('translation');
	if (search_translation === null) {
		search_translation = 'KJV';
	}
	let search_book = url.searchParams.get('book');
	let search_match_case = url.searchParams.get('matchcase');
	let search_whole_word = url.searchParams.get('wholewords');
	let font;
	if (search_translation!.toUpperCase() === 'TOVBSI') {
		font = 'font-tamil';
	} else if (search_translation!.toUpperCase() === 'MLSVP') {
		font = 'font-malayalam';
	} else {
		font = 'font-sans';
	}
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{
			location: '/' + 'search',
			locationName: 'Search',
			isFinal: true
		}
	];
	const searchJson: SearchJson = { search_text: search_text!, translation: search_translation! };
	if (search_book !== null) {
		searchJson.book = search_book;
	}
	if (search_match_case !== null) {
		if (search_match_case === 'true') {
			searchJson.match_case = true;
		} else {
			searchJson.match_case = false;
		}
	}
	if (search_whole_word !== null) {
		if (search_whole_word === 'true') {
			searchJson.whole_words = true;
		} else {
			searchJson.whole_words = false;
		}
	}

	const res = await fetch(`${API_URL}/search`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: '*/*' },
		body: JSON.stringify(searchJson)
	});

	let searchResultVerses = await res.json();
	searchResultVerses = searchResultVerses.map((verse: Verse) =>
		highlightSearchTerm(verse, search_text)
	);

	// @ts-ignore (string | undefined | null can't be assigned to string | null) - duh!
	const queryString = getQueryString(
		searchJson.search_text,
		searchJson.translation,
		searchJson.book,
		searchJson.match_case,
		searchJson.whole_words
	);

	return {
		currentLocation: currentLocation,
		font: font,
		search_text: search_text,
		search_translation: search_translation,
		search_book: search_book,
		search_match_case: searchJson.match_case,
		search_whole_word: searchJson.whole_words,
		queryString: queryString,
		verses: searchResultVerses
	};
};
