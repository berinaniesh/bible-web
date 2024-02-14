<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    export let isDark: boolean;
    let isSideMenuOpen: boolean = false;
    import { Sun, Moon, Plus, Minus, X } from "lucide-svelte";

    function handleSideMenuButtonClick() {
        isSideMenuOpen = !isSideMenuOpen;
    }
</script>

<div class="h-12 my-1 flex flex-col justify-center">
    <div class="grid grid-cols-2">
        <div class="flex">
            <a href="/"><img class="size-10 mr-2" alt="main-logo" src="/favicon.png"/></a>
            <a href="/" class="font-bold text-2xl flex flex-col justify-center"><p>The Bible</p></a>
        </div>
        <div class="text-3xl flex justify-between">
            <div>
                <!-- Empty div to get justify-between -->
            </div>
            <div class="flex flex-col justify-center">
                <Button variant="outline" class="w-12 text-lg" on:click={handleSideMenuButtonClick}>
                    {#if isSideMenuOpen}
                        X
                    {:else}
                        ☰
                    {/if}
                </Button>
            </div>
        </div>
    </div>
</div>