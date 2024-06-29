<script lang="ts">
	import Container from "../components/Container.svelte";
	import UrbanDefinition from "../components/UrbanDefinition.svelte";

  export let data;
</script>

<Container>
  <div class="flex flex-col h-fit w-full justify-center items-center gap-8 py-4">
    <h1 class="text-6xl font-semibold">
      <a href="/dictionary">
        <span class="text-secondary">Pro</span>Dictionary
      </a>
    </h1>
    <div class="w-full flex flex-col">
      {#if data.list.length > 0}
        {#each data.list as d}
          <UrbanDefinition data={d} />
          {#if d !== data.list.length - 1}
            <hr class="border-secondary">
          {/if}
        {/each}
      {:else}
        <p class="text-4xl text-accent font-semibold">No definition found</p>
      {/if}
    </div>
    <a href="/dictionary" class="text-secondary hover:text-accent transition duration-300">Find more definitions</a>
  </div>
</Container>

