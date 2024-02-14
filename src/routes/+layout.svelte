<script lang="ts">
	import '../app.pcss';
	import Header from '$lib/components/Header.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import RightMenu from '$lib/components/RightMenu.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<div class="mx-auto max-w-screen-md px-4 font-sans">
	<ModeWatcher />
	<Header />
	<Separator />
	<slot />
	<RightMenu />
</div>
