<script lang="ts">
  import type { Device } from "@rnbo/js";
  import { onMount } from "svelte";
  import { setupMicrophoneSource } from "./stream";

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
<button on:click={enableGranular}>有効化</button>
<button on:click={disableGranular}>無効化</button>
