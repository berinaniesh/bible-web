<script lang="ts">
    import "../app.pcss";
    import Header from "$lib/components/Header.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="max-w-screen-md mx-auto font-sans">
    <Header />
    <Separator />
    <slot />
</div>
