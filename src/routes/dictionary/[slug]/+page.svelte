<script>
  import Definition from "../../../components/Definition.svelte";
  import Container from "../../../components/Container.svelte";
	import { displayQuery } from "../../../utils/displayQuery";
  export let data;
</script>

<Container>
  <h1 class="font-semibold text-secondary text-center text-6xl pb-12">Definitions for <i class="text-accent">"{ displayQuery(data.query) }"</i></h1>
  {#if data.definitions && data.definitions.length > 0}
    {#each data.definitions as definition, i}
       <Definition data={definition} />
      {#if i !== data.definitions.length - 1}
        <hr class="border-secondary mb-12">
      {/if}
    {/each}
  {:else}
    <div class="w-full h-full flex justify-center items-center">
      <h1 class="text-6xl text-center">No Definition for "{ displayQuery(data.query) }" found</h1>
    </div>
  {/if}
</Container>
