import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'About', isFinal: true }
	];
	const aboutPoints = [
		`This site is built by <a class="underline" target="blank" href="https://berinaniesh.xyz">Berin Aniesh</a> in the hopes that it will be useful to someone.`,
		`If you have any comments or feedbacks about the site, <a target="blank" class="underline" href="https://berinaniesh.xyz/contact">let me know</a>.`,
		`To participate in the development, join the <a class="underline"  target="blank" href="https://t.me/bibleappdesign" >telegram group</a>.`,
		`Everything on this site is <a class="underline" target="blank" href="https://github.com/berinaniesh/bible-web">open sourced</a>. Forking and self hosting is not only allowed, but encouraged.`,
		`The backend of this site can be found <a target="blank" class="underline" href="https://api.bible.berinaniesh.xyz/docs">here</a> and the source for the same can be found <a class="underline" target="blank" href="https://github.com/berinaniesh/bible-api">here</a>.`,
		`No guarantees are made for the availability, reliability or correctness of the frontend or the backend.`,
		`Bible requests welcome as long as the translation requested is in the public domain. If the language is something other than English (or Tamil), I'll need some help with feeding the translation into the database, fixing spelling mistakes, separating verses, etc.`
	];
	return {
		currentLocation: currentLocation,
		aboutPoints: aboutPoints
	};
};
