import { API_URL } from '$lib';
import type { SearchJson } from '$lib/types';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ url }) => {
	let search_text = url.searchParams.get('q');
	let search_translation = url.searchParams.get('translation');
	let search_book = url.searchParams.get('book');
	let search_match_case = url.searchParams.get('matchcase');
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
			location: '/' + "search",
			locationName: "Search",
			isFinal: true
		}
	];
	const searchJson: SearchJson = { search_text: search_text!, translation: search_translation! };
	if (search_book !== null) {
		searchJson.book = search_book;
	}
	if (search_match_case !== null) {
		if (search_match_case === "true") {
			searchJson.match_case = true;
		} else {
			searchJson.match_case = false;
		}
	}
	const res = await fetch(`${API_URL}/search`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: '*/*' },
		body: JSON.stringify(searchJson)
	});
	const searchResultVerses = await res.json();
	return {
		currentLocation: currentLocation,
		font: font,
		search_text: search_text,
		search_translation: search_translation,
		search_book: search_book,
		search_match_case: search_match_case,
		verses: searchResultVerses,
	};
};
