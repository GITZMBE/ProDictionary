<script lang='ts'>
	import Icon from '@iconify/svelte';

  export let data;
  const playAudio = (audioSrc: string) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };
</script>

<div class="flex flex-col gap-4">
  <h1 class="font-semibold text-6xl capitalize">
    <a href={ data.sourceUrls[0] || '' }>{ data.word }</a>
  </h1>
  <div class="text-xl text-secondary">
    {#each data.phonetics as phonetic}
    <span class="flex items-center gap-4">
      { phonetic.text }
      <button on:click={_ => playAudio(phonetic.audio)}>
        <Icon icon='cil:audio-spectrum' class='cursor-pointer { phonetic.audio && 'hover:text-light' }' />
      </button>
    </span>
    {/each}
  </div>
  {#each data.meanings as meaning}
    <h2 class="text-tertiary font-semibold">{ meaning.partOfSpeech }</h2>
    <p>
      {#each meaning.definitions as def}
        <span>{ def.definition } </span>
      {/each}
    </p>
    <hr class="border-secondary">
  {/each}
</div>