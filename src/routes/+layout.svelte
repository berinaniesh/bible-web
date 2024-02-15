<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<div class="mx-auto max-w-screen-md px-4 font-sans">
	<ModeWatcher />
	<slot />
</div>
