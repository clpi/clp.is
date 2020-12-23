<script>
  import Btn from '$components/Btn.svelte';
  import Input from '$components/Input.svelte';
  import Nav from '$components/Nav.svelte';
  /* import Menubar from '$components/Menubar.svelte'; */
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
    <a href="/editor">
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
    width: 48%;
    float: left;
    background-image: linear-gradient(rgba(255,255,255,0.0),rgba(0,0,0,0.055));
    border-top: 1px solid #91ffaa;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 1%;
    margin-right: 1%;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
  }
  .col:hover {
    background: rgba(0,0,0,0.05);
  }
</style>

