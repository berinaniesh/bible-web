<script lang="ts">
    export let data;
    const currentLocation = [
        { location: '/', locationName: 'Home', isFinal: false }, 
        {location: "/" + data.params.translation, locationName: data.params.translation.toUpperCase(), isFinal: false},
        {location: "/" + data.params.translation + data.params.book, locationName: data.params.book.replace("-", " "), isFinal: true}
    ];
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
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
    import Button from '$lib/components/ui/button/button.svelte';
</script>


<div>
    <Breadcrumb crumbItems={currentLocation} />
    <div class="m-4 font-bold text-center">
        {bookStruct.book_name}
    </div>
    <div class="grid grid-cols-4 md:grid-cols-6 w-2/3 gap-3 mx-auto my-6">
        {#each data.chapters as chapter}
            <a href={"/" + data.params.translation + "/" + data.params.book + "/" + chapter}><Button variant="outline" class="w-12">{chapter}</Button></a>
        {/each}
    </div>
</div>