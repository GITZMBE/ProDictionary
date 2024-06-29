<script>
// @ts-nocheck

	import Icon from "@iconify/svelte";
  import Container from "../../components/Container.svelte";

  export let inputValue = '';
</script>

<Container>
  <div class="w-full h-full flex flex-col justify-center items-center gap-8">
    <h1 class="text-4xl">Get your definition here</h1>
    <div class="w-full flex justify-center items-center">
      <input type="text" value={inputValue} on:change={e => {inputValue = e.target.value}} class="w-full max-w-[50%] text-primary rounded-l-full outline-none px-2 py-1">
      <a href={'/dictionary/' + inputValue.trim()} class="w-6 py-1 px-2">
        <Icon icon='tdesign:search' class='text-accent hover:text-light' />
      </a>
    </div>
  </div>  
</Container>