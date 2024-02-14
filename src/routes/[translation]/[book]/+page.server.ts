import type { PageServerLoad } from "./$types";
import { API_URL } from "$lib";

export const load: PageServerLoad = async ({fetch, params}) => {
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
    return {
        params: params,
        chapters: chapters,
        nav: nav,
    }
}