<script lang="ts">
    export let data;
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { ArrowLeft, ArrowRight } from "lucide-svelte";
</script>

<Breadcrumb crumbItems={data.currentLocation}/>
<div class="m-4 font-bold text-center">
    {data.bookStruct.book_name} {data.currentChapter}
</div>
{#each data.verses as verse}
    <p class="my-4 leading-loose"><sup>{verse.verse_number}</sup> {verse.verse}</p>
{/each}
<div class="flex justify-between w-full my-12 mx-auto">
    {#if data.nav.previous}
        <a href={"/" + data.currentTranslation + "/" + data.nav.previous.book.replace(" ", "-") + "/" + data.nav.previous.chapter}><Button><ArrowLeft></ArrowLeft></Button></a>
    {:else}
        <div></div>
    {/if}
    {#if data.nav.next}
    <a href={"/" + data.currentTranslation + "/" + data.nav.next.book.replace(" ", "-") + "/" + data.nav.next.chapter}><Button><ArrowRight></ArrowRight></Button></a>
    {:else}
        <div></div>
    {/if}
</div>