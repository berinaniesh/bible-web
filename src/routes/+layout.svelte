<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<div class="mx-auto max-w-screen-md px-4 font-sans">
	<ModeWatcher />
	<Toaster />
	<slot />
</div>
