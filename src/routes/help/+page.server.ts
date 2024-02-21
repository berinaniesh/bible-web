import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'Help', isFinal: true }
	];
	const helpPoints = [
		`You can double click on any verse to open a <emph class="italic">"copy drawer"</emph>. Double clicking on a verse adds the verse to the copy drawer. All the verses can be copied together by clicking the copy button in the copy drawer.`
	];
	return {
		currentLocation: currentLocation,
		helpPoints: helpPoints
	};
};
