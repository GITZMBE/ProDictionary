<script>
  import CommonDefinition from "../../../components/CommonDefinition.svelte";
import Container from "../../../components/Container.svelte";
  import Definition from "../../../components/Definition.svelte";

  export let data;

  console.log(data);
</script>

<Container>
  {#if data.definitions && data.definitions.length > 0}
    {#each data.definitions as definition, i}
       <CommonDefinition data={definition} />
      {#if i !== data.definitions.length - 1}
        <hr class="border-secondary mb-12">
      {/if}
    {/each}
  {:else}
    <div class="w-full h-full flex justify-center items-center">
      <h1 class="text-6xl text-center">No Definition for "{ data.query.replace('_', ' ') }" found</h1>
    </div>
  {/if}
</Container>
