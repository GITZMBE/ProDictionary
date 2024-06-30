<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { ISearchDefinition } from '../models/ISearchDefinition';
  import { goto } from "$app/navigation";

  let inputValue: string = '';
  let inputElement: HTMLInputElement;
  let result: ISearchDefinition[] = [];

  const dictionaryResult = async (query: string): Promise<ISearchDefinition[]> => {
    try {
      const res = await fetch(`/api/dictionary?query=${query}`, {
        method: 'GET'
      });

      if (!res.ok) return [];

      const data = await res.json();
      return data.flatMap((d: any) => 
        d.meanings.map((m: any) => ({ 
          word: m.word, 
          def: m.definitions.map((def: any) => def.definition).join(' ').trim() 
        }))
      );
    } catch (error) {
      console.error('Error fetching dictionary data:', error);
      return [];
    }
  };

  const urbandictionaryResult = async (query: string): Promise<ISearchDefinition[]> => {
    try {
      const res = await fetch(`/api/urbandictionary?query=${query}`, {
        method: 'GET'
      });

      if (!res.ok) return [];

      const data = await res.json();
      return data.list.map((d: any) => ({ 
        word: d.word, 
        def: d.definition 
      }));
    } catch (error) {
      console.error('Error fetching urbandictionary data:', error);
      return [];
    }
  };

  const handleInputChange = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    inputValue = target.value.trim();

    if (inputValue !== '') {
      const dResult = await dictionaryResult(inputValue);
      const uResult = await urbandictionaryResult(inputValue);

      result = [...dResult, ...uResult];
    } else {
      result = [];
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    const trimmedValue = inputValue.trim().replace(' ', '_');
    if (e.key === 'Enter' && trimmedValue !== '') {
      e.preventDefault();
      inputElement.blur();
      goto(`/dictionary/${trimmedValue}`, { replaceState: true });
    };
  };
</script>

<div class="relative w-full flex flex-col justify-center items-center gap-2">
  <div class="w-full sm:max-w-[80%] md:max-w-[50%] flex justify-center items-center">
    <input type="text" bind:this={inputElement} value={inputValue} on:input={handleInputChange} on:keypress={handleKeyPress} class="relative w-full text-primary rounded-l-full outline-none px-2 py-1">
    <a href={`/dictionary/${inputValue.trim().replace(' ', '_')}`} class="w-6 py-1 px-2">
      <Icon icon='tdesign:search' class='text-accent hover:text-light' />
    </a>
  </div>
  <div class="absolute top-10 {inputValue.trim() !== '' && result.length > 0 ? 'block' : 'hidden'} w-full sm:max-w-[80%] md:max-w-[50%] max-h-[30vh] rounded-b-lg overflow-y-auto p-2 shadow-secondary shadow-lg">
    {#if inputValue.trim() !== '' && result.length > 0}
      {#each result as r}
        <a href={`/dictionary/${r.word ? r.word.trim().replace(' ', '_') : ''}`} class="flex flex-col">
          <span>{r.word || inputValue}</span>
          <span class="text-nowrap overflow-hidden text-ellipsis">{r.def}</span>
        </a>
        <hr class="border-secondary my-2">
      {/each}
    {:else}
      <p class="text-center py-2">No Definitions Found</p>
    {/if}
  </div>
</div>
