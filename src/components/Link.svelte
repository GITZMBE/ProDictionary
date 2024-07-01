<script lang="ts">
  import { onMount } from 'svelte';
  import { sidebarIsOpen } from '../routes/stores/sidebar';
  import { displayQuery } from '../utils/displayQuery';
	import { renderKey } from '../routes/stores/renderKey';

  export let href;
  export let content;

  let uri = '';
  let subURIs: string[] = [];

  $: isOpen = $sidebarIsOpen;
  $: key = $renderKey;

  const handleClick = () => {
    sidebarIsOpen.set(false);
    renderKey.update(n => n + 1);
    updateURI();
  };

  const updateURI = () => {
    uri = window.location.pathname;
    subURIs = uri.split('/');
    subURIs.shift();
  };

  onMount(() => {
    updateURI();
    renderKey.subscribe(() => {
      updateURI();
    });
  });
</script>

{#key key}
  <a href={ href } on:click={handleClick} class="w-full min-w-fit py-2 px-4 text-nowrap hover:bg-primary hover:text-tertiary { (subURIs[0] === 'dictionary' && displayQuery(subURIs[1].toLowerCase()) === content.toLowerCase()) && 'bg-primary text-tertiary' }">
    <slot />
    { content }
  </a>
{/key}