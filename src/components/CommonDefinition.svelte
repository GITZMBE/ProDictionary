<script lang='ts'>
	import Icon from '@iconify/svelte';
	import { format } from 'date-fns';
	import { getOrdinal } from '../utils/ordinals';

  export let data;
  const playAudio = (audioSrc: string) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };
</script>

<div class="flex flex-col gap-4">
  <h1 class="font-semibold text-6xl capitalize">
    { data.word }
  </h1>
  {#if data.phonetic}
    <div class="text-xl text-secondary">
      <span class="flex items-center gap-4">
        { data.phonetic }
        <button on:click={_ => playAudio(data.audio)}>
          <Icon icon='cil:audio-spectrum' class='cursor-pointer { data.audio && 'hover:text-light' }' />
        </button>
      </span>
    </div>
  {/if}
  {#if data.partOfSpeech}
    <h2 class="text-tertiary font-semibold">{ data.partOfSpeech }</h2>
  {/if}
  <p>{ data.def }</p>
  {#if data.example}
    <div class="flex flex-col gap-2">
      <span class="font-semibold text-xl text-secondary">Example</span>
      <p>{ data.example }</p>
    </div>
  {/if}
  {#if data.thumbs_up !== null && data.thumbs_down !== null}
    <div class="flex gap-4 items-center">
      <span class="flex gap-2 items-center cursor-default"><Icon icon='ic:round-thumb-up-off-alt' class='text-xl' />{ data.thumbs_up }</span>
      <span class="flex gap-2 items-center cursor-default"><Icon icon='ic:round-thumb-down-off-alt' class='text-xl' />{ data.thumbs_down }</span>
    </div>
  {/if}
  {#if data.author && data.made_at}
    <div class="flex justify-end gap-4">
      <div class="flex flex-col">
        <span class="font-semibold">{ data.author }</span>
        <span>
          {format(data.made_at, "MMMM")}
          {getOrdinal(+format(data.made_at, "d"))}
          {format(data.made_at, "yyyy")}
        </span>
      </div>
    </div>
  {/if}
  
  <hr class="border-secondary">
</div>