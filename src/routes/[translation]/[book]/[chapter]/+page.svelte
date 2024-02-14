<script lang="ts">
    export let data;
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    const currentLocation = [
        { location: '/', locationName: 'Home', isFinal: false }, 
        {location: "/" + data.params.translation, locationName: data.params.translation.toUpperCase(), isFinal: false},
        {location: "/" + data.params.translation + "/" + data.params.book, locationName: data.params.book.replace("-", " "), isFinal: false},
        {location: "", locationName: data.params.chapter, isFinal: true}
    ];
    function findBook() {
        for (let testament of data.splitBooks) {
            for (let book of testament.bookNames) {
                if (book.book === data.params.book.replace("-", " ")) {
                    return book
                }
            }
        }
    }
    const bookStruct = findBook();
    import Button from "$lib/components/ui/button/button.svelte";
    import { ArrowLeft, ArrowRight } from "lucide-svelte";
</script>

<Breadcrumb crumbItems={currentLocation}/>
<div class="m-4 font-bold text-center">
    {bookStruct.book_name} {data.params.chapter}
</div>
{#each data.verses as verse}
    <p class="my-4 leading-loose"><sup>{verse.verse_number}</sup> {verse.verse}</p>
{/each}
<div data-sveltekit-reload class="flex justify-between w-full my-12 mx-auto">
    {#if data.nav.previous}
        <a href={"/" + data.params.translation + "/" + data.nav.previous.book.replace(" ", "-") + "/" + data.nav.previous.chapter}><Button><ArrowLeft></ArrowLeft></Button></a>
    {:else}
        <div></div>
    {/if}
    {#if data.nav.next}
    <a href={"/" + data.params.translation + "/" + data.nav.next.book.replace(" ", "-") + "/" + data.nav.next.chapter}><Button><ArrowRight></ArrowRight></Button></a>
    {:else}
        <div></div>
    {/if}
</div>