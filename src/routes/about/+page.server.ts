import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'About', isFinal: true }
	];
	const aboutPoints = [
		`This site is built by <a class="underline" target="blank" href="https://berinaniesh.xyz">Berin Aniesh</a> in the hopes that it will be useful to someone.`,
		`If you have any comments or feedbacks about the site, <a target="blank" class="underline" href="https://berinaniesh.xyz/contact">let me know</a>.`,
		`To participate in the development, join the <a target="blank" href="https://t.me/bibleappdesign" ><u>telegram group</u></a>.`,
		`Everything on this site is <a class="underline" target="blank" href="https://github.com/berinaniesh/bible-web">open sourced</a>. Forking and self hosting is not only allowed, but encouraged.`
	];
	return {
		currentLocation: currentLocation,
		aboutPoints: aboutPoints
	};
};
