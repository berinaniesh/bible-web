import type { PageServerLoad } from './$types';
import type { Changelog } from '$lib/types';

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'Changelog', isFinal: true }
	];
	const changelog: Changelog[] = [
		{ date: 'Feb 19, 2024', text: 'Copy verses feature live'},
		{ date: 'Feb 16, 2024', text: 'Finish parallel reading feature.' },
		{ date: 'Feb 14, 2024', text: 'New UI deployed.' },
		{
			date: 'Feb 10, 2024',
			text: 'Started working on the new UI (complete rewrite, same structure).'
		},
		{ date: 'Jan 10, 2024', text: 'Add breadcrumbs for navigation.' },
		{ date: 'Jan 10, 2024', text: `Add "Continue reading" functionality.` },
		{ date: 'Jan 10, 2024', text: 'Move fetch logic to server side.' },
		{ date: 'Dec 30, 2023', text: 'Add changelog to about page.' },
		{ date: 'Nov 16, 2023', text: 'Add sitemap and robots.txt.' },
		{ date: 'Nov 8, 2023', text: 'Add search functionality to the backend.' },
		{ date: 'Nov 5, 2023', text: 'Add next / previous buttons to the UI.' },
		{ date: 'Nov 2, 2023', text: 'Add next / previous endpoints to API.' },
		{ date: 'Sep 20, 2023', text: 'Add swagger docs to API.' },
		{ date: 'Sep 18, 2023', text: 'Web UI functional.' },
		{ date: 'Sep 15, 2023', text: 'API functional.' },
		{ date: 'Sep 13, 2023', text: 'Feed database with bible translations.' },
		{ date: 'Sep 9, 2023', text: 'Started working on Bible API.' }
	];
	return {
		currentLocation: currentLocation,
		changelog: changelog
	};
};
