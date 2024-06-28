<script lang="ts">
  import icon from '$lib/assets/svelte_icon.png';
	import Icon from '@iconify/svelte';
  import { sidebarIsOpen } from '../routes/stores/sidebar';

  $: isOpen = $sidebarIsOpen;

  const toggleSidebar = () => {
    sidebarIsOpen.set(!isOpen);
  }
</script>

<header class="sticky top-0 flex justify-between items-center w-full p-4 bg-secondary text-accent">
  <a href="/" class="flex items-center gap-4">
    <img src={icon} class="w-16" alt=""/>
    <h1 class="text-tertiary text-3xl font-semibold">Pro<span class="text-accent">Dictionary</span></h1>
  </a>
  <button class="md:hidden hover:text-light overflow-hidden" on:click={toggleSidebar}>
    <Icon icon="gg:menu" class='w-8 h-8 text-accent hover:text-light transition' />
  </button>
</header>