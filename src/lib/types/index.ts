export type BreadCrumb = {
	locationName: string;
	location: string;
	isFinal: boolean;
};

export type Translation = {
	name: string;
	language: string;
	full_name: string;
	year: number;
	license: string;
	description: string;
};

export type Verse = {
	translation: string;
	book: string;
	abbreviation: string;
	book_name: string;
	chapter: number;
	verse_number: number;
	verse: string;
};

export type Changelog = {
	date: string;
	text: string;
};
