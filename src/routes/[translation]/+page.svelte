<script lang="ts">
    export let data
    const currentLocation = [
        { location: '/', locationName: 'Home', isFinal: false }, 
        {location: "/" + data.params.translation, locationName: data.params.translation.toUpperCase(), isFinal: true}
    ];
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
</script>

<div>
	<div class="my-4">
		<Breadcrumb crumbItems={currentLocation} />
	</div>
</div>