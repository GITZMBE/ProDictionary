<script lang='ts'>
  import { format } from "date-fns";
	import { getOrdinal } from "../utils/ordinals";
	import Icon from "@iconify/svelte";

  export let data;
</script>

<div class="flex flex-col gap-4 py-4">
  <h1 class="font-semibold text-6xl capitalize">
    <a href={ data.permalink || '' }>{ data.word }</a>
  </h1>
  <div class="text-xl text-secondary">
  </div>
  <p>{ data.definition}</p>
  <div class="flex flex-col gap-2">
    <span class="font-semibold text-xl text-secondary">Example</span>
    <p>{ data.example }</p>
  </div>
  <div class="flex gap-4 items-center">
    <span class="flex gap-2 items-center cursor-default"><Icon icon='ic:round-thumb-up-off-alt' class='text-xl' />{ data.thumbs_up }</span>
    <span class="flex gap-2 items-center cursor-default"><Icon icon='ic:round-thumb-down-off-alt' class='text-xl' />{ data.thumbs_down }</span>
  </div>
  <div class="flex justify-end gap-4">
    <div class="flex flex-col">
      <span class="font-semibold">{ data.author }</span>
      <span>
        {format(data.written_on, "MMMM")}
        {getOrdinal(+format(data.written_on, "d"))}
        {format(data.written_on, "yyyy")}
      </span>
    </div>
  </div>
</div>