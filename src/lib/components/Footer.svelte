<script lang="ts">
    const footerElements = [{"key": "about", "text": "About"}, {"key": "alternate-uis", "text": "Alternate UIs"}, {"key": "changelog", "text": "Changelog"}]
</script>

<div>
    <ul class="flex text-slate-500 text-sm">
        {#each footerElements as footerElement}
            <a class="mx-4 hover:underline" href={"/" + footerElement.key}><li>{footerElement.text}</li></a>
        {/each}
      <a class="mx-4 hover:underline" target="blank" href="https://github.com/berinaniesh/bible-web"><li>Source</li></a>
    </ul>
  </div>