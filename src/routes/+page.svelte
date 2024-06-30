<script lang="ts">
	import Definition from "../components/Definition.svelte";
	import Container from "../components/Container.svelte";

  export let data;
</script>

<Container>
  <div class="flex flex-col w-full h-fit { data.data.length <= 0 && 'justify-center h-full' } items-center gap-8 py-4">
    <h1 class="text-6xl font-semibold">
      <a href="/dictionary">
        <span class="text-secondary">Pro</span>Dictionary
      </a>
    </h1>
    <div class="w-full flex flex-col flex-grow">
      {#if data.data.length > 0}
        {#each data.data as d, i}
          <Definition data={d} />
          {#if i !== data.data.length - 1}
            <hr class="border-secondary mb-8">
          {/if}
        {/each}
      {:else}
        <div class="w-full h-full flex justify-center items-center py-12">
          <p class="text-4xl text-center text-accent font-semibold">No definition found</p>
        </div>
        <hr class="border-secondary">
      {/if}
    </div>
    <a href="/dictionary" class="text-secondary hover:text-accent transition duration-300">Find more definitions</a>
  </div>
</Container>

