<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Separator } from "$lib/components/ui/separator";
	import Header from '$lib/components/Header.svelte';
</script>

<Header availableTranslations={[]} currentTranslation={""}/>
<Separator />

<Breadcrumb crumbItems={data.currentLocation} />