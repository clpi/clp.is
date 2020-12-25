<script>
  import Btn from '$components/Btn.svelte';
  import Hero from '$components/Hero.svelte';
  import Content from '$components/Content.svelte';
</script>

<svelte:head>
  <title>Projects • clp.is</title>
</svelte:head>

<Content>
<div class="projects" slot:title="content">
  <div class="content">
    <h3>projects</h3>
  </div>
  <p>projects forthcoming, for now here are some convenience links</p>
  <div class="row">
    <a href="https://github.com/clpi/dotfiles">
    <div class="col">
      dotfiles
    </div>
    </a>
    <a href="http://clp.is/wasm">
    <div class="col">
      dlog
    </div>
    </a>
  </div>
  <p>(these aren't projects, just little sandboxes i'm playing with from time to time)</p>
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
</Content>

<style>
  .row {
    margin: 15px auto;
    width: 80%;
  }
  .row:after {
    content: "";
    clear: both;
    display: table;
  }
  .col {
    width: 44%;
    margin-left: 3%;
    margin-right: 3%;
    float: left;
    /*background-image: linear-gradient(rgba(255,255,255,0.1),rgba(0,0,0,0.0));*/
    background: rgba(255,255,255,0.06);
    border-top: 1px inset #91ffaa;
    border-bottom: 1px inset #111;
    border-radius: 3px;
    padding-top: 20px;
    padding-bottom: 20px;
    /* margin-left: 1%; */
    /* margin-right: 1%; */
    margin-bottom: 1%;
    box-shadow: 1px 2px 1px rgba(0,0,0,0.1);
  }
  .col:hover {
    background: rgba(0,0,0,0.05);
  }
</style>

