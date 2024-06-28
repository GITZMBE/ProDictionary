<script>
  import '../app.css';
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<Header />
<div class="flex">
  <Sidebar />
  <slot />
</div>
