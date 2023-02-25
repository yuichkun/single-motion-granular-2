<script lang="ts">
  import Granular from "./Granular.svelte";

  const context = new AudioContext();
  let isStarted = false;

  const onClick = async () => {
    await context.resume();
    isStarted = true;
  };
</script>

<main>
  {#if isStarted}
    <Granular {context} />
  {:else}
    <h1>single motion granular 2</h1>
    <button on:click={onClick}>play</button>
  {/if}
</main>

<style>
</style>
