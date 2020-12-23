<script>
  import { fly } from "svelte/transition";
  import { quadIn } from "svelte/easing";
    export let left = false;
    export let right = false;
    export let type = "";
    $: transition.x = right ? 300 : -300;
</script>

<button type={type}>

</button>
