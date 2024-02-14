import type { PageServerLoad } from './$types';
import { API_URL } from '$lib';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const res = await fetch(`${API_URL}/translations`);
	const translations = await res.json();
	return {
		translations: translations
	};
};
