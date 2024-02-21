import type { LayoutServerLoad } from './$types';
import { API_URL } from '$lib';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const res = await fetch(`${API_URL}/translations`);
	const translations = await res.json();
	const currentLocation = [{ location: '/', locationName: 'Home', isFinal: true }];
	return {
		currentLocation: currentLocation,
		translations: translations,
		displayParallel: false
	};
};
