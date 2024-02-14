<script lang="ts">
    export let data;
    import Breadcrumb from "$lib/components/Breadcrumb.svelte"
</script>

<Breadcrumb crumbItems={data.currentLocation} />