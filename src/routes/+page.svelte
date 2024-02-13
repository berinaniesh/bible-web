<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import Footer from "$lib/components/Footer.svelte";
  const currentLocation = [{location: "/", locationName: "Home", isFinal: true}]
</script>

<div>
  <Breadcrumb crumbItems={currentLocation}/>
  <div class="flex justify-center">
    <Footer />
  </div>
</div>