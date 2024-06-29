<script>
  import { sidebarIsOpen } from '../routes/stores/sidebar';

  export let href;

  $: isOpen = $sidebarIsOpen;

  const closeSidebar = () => {
    sidebarIsOpen.set(false);
  };
</script>

<a href={ href } on:click={closeSidebar} class="py-2 px-4 text-nowrap hover:bg-tertiary">
  <slot />
</a>