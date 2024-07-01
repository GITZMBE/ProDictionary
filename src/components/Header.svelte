<script lang="ts">
  import { base } from '$app/paths';
  import icon from '$lib/assets/svelte_icon.png';
	import Icon from '@iconify/svelte';
  import { sidebarIsOpen } from '../routes/stores/sidebar';

  $: isOpen = $sidebarIsOpen;

  const toggleSidebar = () => {
    sidebarIsOpen.set(!isOpen);
  }
</script>

<header class="sticky top-0 flex justify-between items-center w-full h-[12vh] py-4 px-4 sm:pr-8 md:pr-12 bg-secondary text-accent">
  <a href="{ base }/" class="flex items-center gap-4">
    <img src={icon} class="w-16" alt=""/>
    <h1 class="text-tertiary text-3xl font-semibold">Pro<span class="text-accent">Dictionary</span></h1>
  </a>
  <nav class="hidden md:flex gap-4">
    <a href="{ base }/dictionary" class="hover:text-tertiary transition duration-300">Definitions</a>
  </nav>
  <button class="md:hidden hover:text-light overflow-hidden" on:click={toggleSidebar}>
    <Icon icon="gg:menu" class='w-8 h-8 text-accent hover:text-light transition' />
  </button>
</header>