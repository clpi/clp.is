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
    <p><span style="color: rgb(255,255,170); text-shadow: 1px 2px 2px rgba(0,0,0,0.2); font-weight: 300">&</span></p>
  </div>
  <div class="title">
    <h1>welcome<span style="color: rgb(255,255,170); font-size: 2.8rem; text-shadow: 1px 2px 2px rgba(0,0,0,0.3); font-weight: 300">,</span></h1>
  </div>
  <div class="sub">
    <p>partner!</p>
  </div>
</hero>
<style>
  hero {
    display: inline-block;
    background-image: linear-gradient(rgba(150,255,170, 0.8), rgba(255,255,170, 0.5));
    /* background-image: linear-gradient(rgba(255,255,255, 0.01), rgba(0,0,0, 0.20)); */
     /* background-image: linear-gradient(rgba(150,255,170, 0.02), rgba(0,0,0, 0.20)); */
    font-size: 1.1rem;
    font-weight: 300;
    width: 100%;
    min-height: 200px;
    max-height: 200px;
    padding: 0vh 0vw 0vh 0vw;
    margin: 0;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.20);
    border-bottom: 1px solid rgba(0,0,0,1);
    color: #91ffaa;
    padding-left: 23%;
  }
  h1 {
    color: #cbe3e7;
    color: #2e2c41;
    margin-top: 11%;
    text-shadow: 1px 1px 2px transparent;
    text-align: left;
    /* text-shadow: none; */
    font-size: 5.1rem;
  }
  p {
    text-shadow: none;
    color: #cbe3e7;
    color: rgba(0,0,0,0.8);
    text-shadow: 1px 1px 2px transparent;
    font-size: 2.3rem;
    font-weight: 200;
  }
  div {
    display: inline-block;
  }
</style>

