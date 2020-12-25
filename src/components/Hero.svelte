<script>
  export let title;
  export let hover = false;
  export function enter() {
    hover = true;
  }
  export function leave() {
    hover = false;
  }
</script>
<hero on:mouseenter={enter} on:mouseleave={leave}
  class:hover={hover}>
  <div class="sub">
    <em><p>hello</p></em>
  </div>
  <div class="sub">
    <p><span style="color: #91ffaa">&</span></p>
  </div>
  <div class="title">
    <h1>welcome<span style="color: #91ffaa; font-size: 2.8rem;">,</span></h1>
  </div>
  <div class="sub">
    <p>partner!</p>
  </div>
</hero>
<style>
  hero {
    margin-top: 0;
    display: inline-block;
    background-image: linear-gradient(rgba(150,255,170, 0.4), rgba(255,255,170, 0.45));
    /* background-image: linear-gradient(rgba(255,255,255, 0.01), rgba(0,0,0, 0.20)); */
     /* background-image: linear-gradient(rgba(150,255,170, 0.02), rgba(0,0,0, 0.20)); */
    font-size: 1.1rem;
    font-weight: 300;
    width: 100%;
    min-height: 200px;
    padding: 0vh 0vw 0vh 0vw;
    margin: 0;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(0,0,0,1);
    color: #91ffaa;
    height: 40px;
    padding-left: 28%;
  }
  h1 {
    color: #1e1c31;
    color: #cbe3e7;
    text-shadow: 1px 1px 2px #111;
    text-align: left;
    /* text-shadow: none; */
    font-size: 3.9rem;
  }
  p {
    text-shadow: none;
    color: #cbe3e7;
    text-shadow: 1px 1px 2px #111;
    font-size: 2.1rem;
    font-weight: 250;
  }
  div {
    display: inline-block;
  }
</style>

