<script context="module">
  document.querySelector('exec')
  .addEventListener('click', () => {
    alert('output in console');
    var res = WebAssembly.Module.ccall(
      'myFunction',
      null,
      null,
      null
    );
  });
</script>
<svelte:head>
  <title>wasm • clp.is</title>
</svelte:head>
<p class="head"><span class="green">wasm</span> canvas.</p>

<style>
  .head {
    font-weight: 300;
    text-align: center;
    font-size: 1.1rem;
  }
  .green {
    color: #91ffaa;
    font-weight: 400;
  }

</style>
