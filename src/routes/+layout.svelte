<script>
  import '../app.css';
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="w-full h-screen max-h-screen overflow-y-hidden">
  <Header />
  <div class="flex h-full bg-primaryBlue">
    <Sidebar />
    <slot />
  </div>
</div>
