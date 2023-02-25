<script lang="ts">
  import type { Device } from "@rnbo/js";
  import { onMount } from "svelte";
  import { setupMicrophoneSource } from "./stream";
  import { draggable } from "@neodrag/svelte";

  export let context: AudioContext;
  export let device: Device;

  function enableGranular() {
    device.parametersById.get("play").value = 1;
  }
  function disableGranular() {
    device.parametersById.get("play").value = 0;
  }

  onMount(async () => {
    const microphoneSource = await setupMicrophoneSource(context);
    microphoneSource.connect(device.node);
    device.node.connect(context.destination);
  });
</script>

<div>グラニュラーだよ</div>

<div id="dragAreaContainer">
  <div id="dragArea" use:draggable={{ bounds: "parent" }} />
</div>
<button on:click={enableGranular}>有効化</button>
<button on:click={disableGranular}>無効化</button>

<style>
  #dragAreaContainer {
    background-color: rgb(30, 30, 30);
    width: 400px;
    height: 400px;
  }
  #dragArea {
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 38px;
    cursor: pointer;
  }
</style>
