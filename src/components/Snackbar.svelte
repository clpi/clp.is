<script context="module">
  import { writable } from "svelte/store";
  const queue = writable([]);
  let exec = false;
</script>
<script>
  import { fade, scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
    import { quadOut, quadIn } from "svelte/easing";
  export let value = "Test, msg";
  export let color = "green";
  export let top = false;
  export let bottom = true;
  const dp = createEventDispatcher();
  export function show() {

  }
</script>

{#if value && (exec === hash)}
  <div id="snackbar">{msg}</div>
{/if}

<style>
  #snackbar {
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 3px;
    width: 100px;
    height: 50px;
    margin-bottom: 50px;
  }
</style>
