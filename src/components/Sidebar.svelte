<script lang="ts">
	import Link from "./Link.svelte";
  import Icon from '@iconify/svelte';
  import { sidebarIsOpen } from '../routes/stores/sidebar';

  $: isOpen = $sidebarIsOpen;

  const toggleSidebar = () => {
    sidebarIsOpen.set(!isOpen);
  }
</script>


<aside class="group flex flex-col flex-shrink { isOpen ? 'w-[80vw] md:w-[1/3]' : 'w-0 md:min-w-fit' } transition-all duration-300 bg-secondary text-accent overflow-y-hidden">
  <div class="p-2 hidden md:flex justify-end">
    <button class="{ isOpen ? '-rotate-180' : '' } transition-all duration-300 overflow-hidden" on:click={toggleSidebar}>
      <Icon icon='ic:round-keyboard-double-arrow-right' class="w-8 h-8 text-accent hover:text-tertiary" />
    </button>
  </div>
  <nav class="flex flex-col">
    <Link href="/dictionary/react" content='React' />
    <Link href="/dictionary/angular" content='Angular' />
    <Link href="/dictionary/vue" content='Vue' />
    <Link href="/dictionary/svelte" content='Svelte' />
    <Link href="/dictionary/react_native" content='React Native' />
  </nav>
</aside>
