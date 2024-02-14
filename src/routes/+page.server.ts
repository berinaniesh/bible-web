import type { PageServerLoad } from './$types';
import { API_URL } from '$lib';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	let continueReading;
	let currentTranslation = cookies.get('currentTranslation');
	let currentBook = cookies.get('currentBook');
	let currentChapter = cookies.get('currentChapter');
	if (currentTranslation && currentBook && currentChapter) {
		continueReading = '/' + currentTranslation + '/' + currentBook + '/' + currentChapter;
	}
	const res = await fetch(`${API_URL}/translations`);
	const translations = await res.json();
	const currentLocation = [{ location: '/', locationName: 'Home', isFinal: true }];
	return {
		continueReading: continueReading,
		currentLocation: currentLocation,
		translations: translations
	};
};
