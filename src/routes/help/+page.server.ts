import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'Help', isFinal: true }
	];
	return {
		currentLocation: currentLocation
	};
};
