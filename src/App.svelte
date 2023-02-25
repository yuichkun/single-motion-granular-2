<script lang="ts">
  import Granular from "./Granular.svelte";
  import { setupRnbo } from "./rnbo";
  import type { Device } from "@rnbo/js";

  const context = new AudioContext();
  let isStarted = false;
  let device: Device | null = null;

  const onClick = async () => {
    await context.resume();
    device = await setupRnbo(context);
    isStarted = true;
  };
</script>

<main>
  {#if isStarted}
    <Granular {context} {device} />
  {:else}
    <h1>single motion granular 2</h1>
    <button on:click={onClick}>play</button>
  {/if}
</main>

<style>
</style>
