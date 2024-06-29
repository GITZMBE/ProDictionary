<script lang="ts">
  import { afterUpdate } from 'svelte';

  let container: HTMLDivElement;

  afterUpdate(() => {
    if (container) {
      container.scrollTop = 0;
    }
  });
</script>

<div class="w-full h-full bg-primary text-accent pt-4 pb-12 px-4 sm:px-8 md:px-12 max-h-[90vh] overflow-y-auto" bind:this={container}>
  <slot />
</div>