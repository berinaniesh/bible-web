<script lang="ts">
	export let data;
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Separator } from "$lib/components/ui/separator";
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<Separator />
<Breadcrumb crumbItems={data.currentLocation} />
<h1 class="mb-4 text-xl font-bold">About</h1>
<ul class="mb-8 ml-4 list-disc leading-8 md:ml-8">
	<li>Feb 15, 2024 - New UI deployed</li>
	<li>Feb 10, 2024 - Started working on the new UI (complete rewrite, same structure)</li>
	<li>Jan 10, 2024 - Add breadcrumbs for navigation.</li>
	<li>Jan 10, 2024 - Add "continue reading" functionality.</li>
	<li>Jan 10, 2024 - Move fetch logic to server side.</li>
	<li>Dec 30, 2023 - Add changelog to about page.</li>
	<li>Nov 16, 2023 - Add sitemap / robots.txt.</li>
	<li>Nov 5, 2023 - Add next / previous buttons to the UI.</li>
	<li>Nov 2, 2023 - Add next / previous endpoints to API.</li>
	<li>Sep 20, 2023 - Add swagger docs to API.</li>
	<li>Sep 18, 2023 - Web UI functional.</li>
	<li>Sep 15, 2023 - API functional.</li>
	<li>Sep 13, 2023 - Feed database with bible translations.</li>
	<li>Sep 9, 2023 - Started working on Bible API.</li>
</ul>
