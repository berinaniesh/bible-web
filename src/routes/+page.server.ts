import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	let continueReading;
	let currentTranslation = cookies.get('currentTranslation');
	let currentBook = cookies.get('currentBook');
	let currentChapter = cookies.get('currentChapter');
	if (currentTranslation && currentBook && currentChapter) {
		continueReading = '/' + currentTranslation + '/' + currentBook + '/' + currentChapter;
	}
	return {
		continueReading: continueReading
	};
};
