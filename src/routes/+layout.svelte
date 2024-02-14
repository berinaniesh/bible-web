<script lang="ts">
    import "../app.pcss";
    import Header from "$lib/components/Header.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="max-w-screen-md mx-auto font-sans p-4">
    <Header isDark={false}/>
    <Separator />
    <slot />
</div>
