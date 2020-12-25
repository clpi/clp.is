<script>
  import Btn from '$components/Btn.svelte';
  import Hero from '$components/Hero.svelte';
  import Content from '$components/Content.svelte';
</script>

<svelte:head>
  <title>Projects • clp.is</title>
</svelte:head>

<Content>
<div slot:title="content">
  <div class="content">
    <h3>projects</h3>
  </div>
  <p>projects forthcoming, for now here are some convenience links</p>
  <div class="row">
    <a href="https://github.com/clpi/dotfiles" class="projects">
    <div class="col projects">
      dotfiles
    </div>
    </a>
    <a href="http://clp.is/wasm" class="projects">
    <div class="col projects">
      dlog
    </div>
    </a>
  </div>
  <p>(these aren't projects, just little sandboxes i'm playing with from time to time)</p>
  <div class="row">
    <a href="/canvas" class="canvas">
    <div class="col canvas">
      canvas
    </div>
    </a>
    <a href="/canvas/editor" class="canvas">
    <div class="col canvas">
      editor
    </div>
    </a>
  </div>
  <div class="row">
    <a href="https://github.com/clpi" class="canvas">
    <div class="col canvas">
      github
    </div>
    </a>
    <a href="http://clp.is/wasm" class="canvas">
    <div class="col canvas">
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
  a.projects {
    color: rgba(150,255,170,1);
  }
  a.canvas {
    color: rgba(255,255,170,1);
  }
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
    /* background: rgba(255,255,255,0.06); */
    background: #222039;
    border-bottom: 1px inset #111;
    border-radius: 4px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 1%;
    box-shadow: 1px 5px 6px rgba(0,0,0,0.25);
  }
  div.canvas {
    border-top: 1px inset rgba(255,255,170,1);
  }
  div.projects {
    border-top: 1px inset rgba(170,255,150,1);
  }
  .col:hover {
    background: #2e2c41;
  }
</style>

