import { API_URL } from '$lib';
import type { PageServerLoad, Actions } from './$types';
import { superValidate } from "sveltekit-superforms/server";
import { parallelTranslationsFormSchema } from "$lib/schema";


export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
	cookies.set('currentTranslation', params.translation, { path: '/', maxAge: 60 * 60 * 24 * 30 });
	cookies.set('currentBook', params.book, { path: '/', maxAge: 60 * 60 * 24 * 30 });
	cookies.set('currentChapter', params.chapter, { path: '/', maxAge: 60 * 60 * 24 * 30 });
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{
			location: '/' + params.translation,
			locationName: params.translation.toUpperCase(),
			isFinal: false
		},
		{
			location: '/' + params.translation + '/' + params.book,
			locationName: params.book.replace('-', ' '),
			isFinal: false
		},
		{ location: '', locationName: params.chapter, isFinal: true }
	];
	const currentPage = { book: params.book.replace('-', ' '), chapter: parseInt(params.chapter) };
	const res = await fetch(`${API_URL}/nav`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: '*/*' },
		body: JSON.stringify(currentPage)
	});
	const res2 = await fetch(
		`${API_URL}/verses?tr=${params.translation}&b=${params.book.replace('-', ' ')}&ch=${params.chapter}`
	);
	const nav = await res.json();
	const verses = await res2.json();
	return {
		form: await superValidate(parallelTranslationsFormSchema),
		currentLocation: currentLocation,
		currentChapter: params.chapter,
		nav: nav,
		verses: verses
	};
};

export const actions = {
	setParallelTranslations: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		return { success: true };
	}
} satisfies Actions;