<script lang="ts">
    import "../app.pcss";
</script>

<div class="max-w-screen-md mx-auto">
    <div class="bg-green-500 h-12 flex flex-col justify-center">
        <div>Nav Bar</div>
    </div>
    <div class="my-2 bg-blue-500 h-8 flex flex-col justify-center">
        <div>Breadcrumb</div>
    </div>
    <slot />
</div>
