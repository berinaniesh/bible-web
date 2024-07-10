import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'Help', isFinal: true }
	];
	const helpPoints = [
		`You can double click on any verse to open a <emph class="italic">"copy drawer"</emph>. Then, clicking on any verse adds the verse to the copy drawer. All the verses can be copied together by clicking the copy button.`
	];
	return {
		currentLocation: currentLocation,
		helpPoints: helpPoints
	};
};
