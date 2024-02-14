<script lang="ts">
  export let data;
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import TranslationCard from "$lib/components/TranslationCard.svelte";
  const currentLocation = [{location: "/", locationName: "Home", isFinal: true}]
</script>

<div>
  <div class="my-4">
    <Breadcrumb crumbItems={currentLocation} />
  </div>
  <div class="mt-8 mb-4 font-bold font-2xl">
    Available Translations
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2">
    {#each data.translations as translation}
        <div class="m-4 ml-6 w-80"><TranslationCard translation={translation} /></div>
    {/each}
  </div>
  <div class="flex justify-center my-8">
    <Footer />
  </div>
</div>