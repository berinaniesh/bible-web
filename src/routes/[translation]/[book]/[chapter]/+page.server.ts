import type { PageServerLoad } from "../$types";
import { API_URL } from "$lib";

export const load: PageServerLoad = async ({fetch, params}) => {
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
        params: params,
        nav: nav,
        verses: verses
    }
} 