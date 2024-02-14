<script lang="ts">
    export let data;
    const currentLocation = [
        { location: '/', locationName: 'Home', isFinal: false }, 
        {location: "/" + data.params.translation, locationName: data.params.translation.toUpperCase(), isFinal: true}
    ];
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
</script>

<div>
    <Breadcrumb crumbItems={currentLocation} />
    <div class="grid grid-cols-1 md:grid-cols-2 mx-auto w-max">
        {#each data.splitBooks as testament}
            <div class="m-4 w-72">
                <h3 class="text-center font-bold mb-4">{testament.testamentName}</h3>
                <ul>
                    {#each testament.bookNames as element}
                        <a href={"/" + data.params.translation + "/" + element.book.replace(" ", "-")}><li class="my-2"><Button class="w-72" variant={"outline"}>{element.book_name}</Button></li></a>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>