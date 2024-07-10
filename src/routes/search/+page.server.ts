import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = ({ url }) => {
	let search_string = url.searchParams.get('q');
	let search_translation = url.searchParams.get('translation');
	let search_book = url.searchParams.get('book');
	let search_match_case = url.searchParams.get('matchcase');
	return {
		search_string: search_string,
		search_translation: search_translation,
		search_book: search_book,
		search_match_case: search_match_case
	};
};
