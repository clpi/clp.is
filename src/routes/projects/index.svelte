<script>
  import Btn from '$components/Btn.svelte';
</script>

<svelte:head>
  <title>Projects • clp.is</title>
</svelte:head>

<div class="projects">
  <div class="content">
    <h3>projects</h3>
  </div>
  <div class="row">
    <a href="/canvas">
    <div class="col">
      canvas
    </div>
    </a>
    <a href="/canvas/editor">
    <div class="col">
      editor
    </div>
    </a>
  </div>
  <div class="row">
    <a href="https://github.com/clpi">
    <div class="col">
      github
    </div>
    </a>
    <a href="http://clp.is/wasm">
    <div class="col">
      wasm
    </div>
    </a>
  </div>
  <div class="row">
    <p>Website currently under construction!</p>
    <a href="/contact"><Btn btn="filled">Contact me!</Btn></a>
  </div>
</div>

<style>
  .row {
    margin-top: 20px;
  }
  .row:after {
    content: "";
    clear: both;
    display: table;
  }
  .col {
    width: 38%;
    margin-left: 6%;
    margin-right: 6%;
    float: left;
    background-image: linear-gradient(rgba(255,255,255,0.0),rgba(0,0,0,0.1));
    border-top: 1px solid #91ffaa;
    padding-top: 20px;
    padding-bottom: 20px;
    /* margin-left: 1%; */
    /* margin-right: 1%; */
    margin-bottom: 1%;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
  }
  .col:hover {
    background: rgba(0,0,0,0.05);
  }
</style>

