<script lang="ts">
    export let data;
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
  <title>{data.currentTranslation} • Bible</title>
</svelte:head>

<div class="w-full">
    <Breadcrumb crumbItems={data.currentLocation} />
    <div class={"grid grid-cols-1 md:grid-cols-2 mx-auto w-max " + data.font}>
        {#each data.splitBooks as testament}
            <div class="mx-4 w-72">
                <h3 class="text-center font-bold mb-4">{testament.testamentName}</h3>
                <ul>
                    {#each testament.bookNames as element}
                        <a href={"/" + data.currentTranslation + "/" + element.book.replace(" ", "-")}><li class="my-2"><Button class="w-72" variant={"outline"}>{element.book_name}</Button></li></a>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>