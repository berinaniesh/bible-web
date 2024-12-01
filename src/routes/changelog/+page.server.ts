import type { PageServerLoad } from './$types';
import type { Changelog } from '$lib/types';

export const load: PageServerLoad = () => {
	const currentLocation = [
		{ location: '/', locationName: 'Home', isFinal: false },
		{ location: '', locationName: 'Changelog', isFinal: true }
	];
	const changelog: Changelog[] = [
		{ date: 'Sep 23, 2024', text: 'Minor UI improvements.' },
		{ date: 'July 31, 2024', text: 'Add versequick.com as an alternate URL for the frontend' },
		{ date: 'July 14, 2024', text: 'Search feature added to frontend.' },
		{
			date: 'Jun 30, 2024',
			text: 'Add World English Bible Updated (WEBU) to both backend and frontend.'
		},
		{ date: 'May 1, 2024', text: 'Add World English Bible (WEB) to both backend and frontend.' },
		{ date: 'Mar 24, 2024', text: 'Move next and previous buttons to the top for easier access.' },
		{ date: 'Feb 19, 2024', text: 'Copy verses feature live.' },
		{ date: 'Feb 16, 2024', text: 'Finish parallel reading feature.' },
		{ date: 'Feb 14, 2024', text: 'New UI deployed.' },
		{
			date: 'Feb 10, 2024',
			text: 'Started working on the new UI (complete rewrite, same structure).'
		},
		{ date: 'Jan 10, 2024', text: 'Add breadcrumbs for navigation.' },
		{ date: 'Jan 10, 2024', text: `Add "Continue reading" functionality.` },
		{ date: 'Jan 10, 2024', text: 'Move fetch logic to server side.' },
		{ date: 'Dec 30, 2023', text: 'Add changelog and about pages.' },
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
