import type { LayoutServerLoad } from "./$types";
import { API_URL } from "$lib";

export const load: LayoutServerLoad = async ({fetch, params}) => {
    const res = await fetch(`${API_URL}/${params.translation}/books`);
    const books = await res.json()
    const splitBooks = [{"testamentName": books[0]["testament_name"], "bookNames": books.slice(0, 39)}, {"testamentName": books[65]["testament_name"], "bookNames": books.slice(39, 66)}]
    const currentLocation = [
        { location: '/', locationName: 'Home', isFinal: false }, 
        {location: "", locationName: params.translation.toUpperCase(), isFinal: true}
    ];
    let font;
    if (params.translation.toUpperCase() === "TOVBSI") {
        font = "font-tamil";
    } else if (params.translation.toUpperCase() === "MLSVP") {
        font = "font-malayalam";
    } else {
        font = "font-sans";
    }
    return {
        font: font,
        currentLocation: currentLocation,
        splitBooks: splitBooks,
        currentTranslation: params.translation
    }
}