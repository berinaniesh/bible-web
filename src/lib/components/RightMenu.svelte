<script lang="ts">
	let isMenuOpen = false;
</script>

<div>
	{#if isMenuOpen}
		<div class="fixed right-0 top-0 h-screen w-80 bg-red-500">boo</div>
	{/if}
</div>
