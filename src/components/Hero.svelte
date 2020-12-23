<script>
  export let title;
  export function enter() {

  }
  export function leave() {

  }
</script>
<hero on:mouseenter={enter} on:mouseleave={leave}>
  <div class="title">
    <h1>{title}</h1>
  </div>
  <div class="sub">
    <p><slot></slot></p>
  </div>
</hero>
<style>
  hero {
    margin-top: 0;
    display: inline-block;
    background-image: linear-gradient(rgba(255,255,255, 0.01), rgba(0,0,0, 0.20));
    font-size: 1.1rem;
    font-weight: 300;
    width: 100%;
    min-height: 140px;
    padding: 0vh 0vw 2.5vh 0vw;
    margin: 0;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(0,0,0,1);
    color: #91ffaa;
    height: 40px;
    padding-left: 40%;
  }
  h1 {
    color: #1e1c31;
    color: #cbe3e7;
    text-shadow: 1px 1px 2px #111;
    text-align: left;
    /* text-shadow: none; */
    font-size: 3.8rem;
  }
  p {
    text-shadow: none;
    color: #cbe3e7;
    text-shadow: 1px 1px 2px #111;
    font-size: 1.8rem;
    font-weight: 200;
  }
  div {
    display: inline-block;
  }
</style>

