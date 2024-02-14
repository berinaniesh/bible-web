import type { LayoutServerLoad } from "./$types";
import { API_URL } from "$lib";

function findBook(bookToFind: string, splitBooks: any) {
    for (let testament of splitBooks) {
        for (let book of testament.bookNames) {
            if (book.book === bookToFind.replace("-", " ")) {
                return book
            }
        }
    }
}

export const load: LayoutServerLoad = async ({fetch, params, parent}) => {
    const currentLocation = [
        { location: '/', locationName: 'Home', isFinal: false }, 
        {location: "/" + params.translation, locationName: params.translation.toUpperCase(), isFinal: false},
        {location: "", locationName: params.book.replace("-", " "), isFinal: true}
    ];
    const currentPage = {"book": params.book.replace("-", " "), "chapter": 0}
    const res = await fetch(`${API_URL}/nav`, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "*/*"},
      body: JSON.stringify(currentPage)
    });
    const res2 = await fetch(`${API_URL}/chaptercount/${params.book.replace("-", " ")}`)
    const nav = await res.json()
    const chapterCount = await res2.json();
    const chapters = []
    for (let i=1; i<=parseInt(chapterCount["count"]); i++) {
        chapters.push(i)
    }
    const parentData = await parent();
    const bookStruct = findBook(params.book, parentData.splitBooks)
    return {
        bookStruct: bookStruct,
        currentLocation: currentLocation,
        currentBook: params.book,
        chapters: chapters,
        nav: nav,
    }
}