import type { PageServerLoad } from "../$types";
import { API_URL } from "$lib";

export const load: PageServerLoad = async ({fetch, params}) => {
  const currentLocation = [
    { location: '/', locationName: 'Home', isFinal: false }, 
    {location: "/" + params.translation, locationName: params.translation.toUpperCase(), isFinal: false},
    {location: "/" + params.translation + "/" + params.book, locationName: params.book.replace("-", " "), isFinal: false},
    {location: "", locationName: params.chapter, isFinal: true}
  ];
    const currentPage = {"book": params.book.replace("-", " "), "chapter": parseInt(params.chapter)}
    const res = await fetch(`${API_URL}/nav`, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "*/*"},
      body: JSON.stringify(currentPage)
    });
    const res2 = await fetch(`${API_URL}/verses?tr=${params.translation}&b=${params.book.replace("-", " ")}&ch=${params.chapter}`)
    const nav = await res.json();
    const verses = await res2.json();
    return {
        currentLocation: currentLocation,
        currentChapter: params.chapter,
        nav: nav,
        verses: verses
    }
} 