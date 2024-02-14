<script lang="ts">
	import '../app.pcss';
	import Header from '$lib/components/Header.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<div class="mx-auto max-w-screen-md px-4 font-sans">
	<Header isDark={false} />
	<Separator />
	<slot />
</div>
