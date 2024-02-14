import type { LayoutServerLoad } from "./$types";
import { API_URL } from "$lib";

export const load: LayoutServerLoad = async ({fetch, params}) => {
    const res = await fetch(`${API_URL}/${params.translation}/books`);
    const books = await res.json()
    const splitBooks = [{"testamentName": books[0]["testament_name"], "bookNames": books.slice(0, 39)}, {"testamentName": books[65]["testament_name"], "bookNames": books.slice(39, 66)}]
    return {
        splitBooks: splitBooks,
        params: params
    }
}