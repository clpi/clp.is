<script>
  import Switch from './Switch.svelte';
  export function toggleLight() {
    let body = document.body;
    let content = document.getElementsByClassName("content");
    body.classList.toggle("lightb")
    content.classList.toggle("light");
  }
</script>
<footer>
  <div class="left">
    <ul>
      <li>links:</li>
      <li><a href="https://github.com/clpi">github</a></li>
      <li><a href="https://gitlab.com/clpi">gitlab</a></li>
      <li><a href="https://linkedin.com">linkedin</a></li>
      <li><a href="#">twitter</a></li>
      <li><a href="http://rateyourmusic.com/user/ooohm" class="fun">rym</a></li>
      <li><a href="http://last.fm/user/ooohm" class="fun">last.fm</a></li>
  </div>
  <div class="right">
    <ul>
      <li><Switch
            on:toggled={toggleLight}/></li>
      <li>2020 chris p :)</li>
    </ul>
  </div>
</footer>

<style>
  a {
    color: rgba(150,255,170,0.8);
  }
  a:hover {
    color: rgba(150,255,170,1);
    border-bottom: 1px inset rgba(150,255,170,1);
    border-radius: 2px;
  }
  footer {
    height: 100px;
    vertical-align: center;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1.1rem;
    font-weight: 300;
    overflow: hidden;
    text-align: center;
    width: 80%;
    min-width: 100vw;
    padding: 0vh 0vw 2.5vh 0vw;
    max-height: 40px;
    margin: 0;
    /* box-shadow: 0px -lid #000; */
    box-shadow: 0px -1px 0px rgba(255,255,255,0.08);
    border-top: 1px solid rgba(0,0,0,0.32);
    /* box-shadow: 0 50vh 0 50vh rgba(0,0,0,0.18); */
    position:fixed;
    left: 0; right: 0; bottom: 0;
    top: calc(100%-70px);
    height: 100%;
    background-image: linear-gradient(rgba(0,0,0,0.17), rgba(0,0,0,0.20));
  }
  div {
    font-size: 0.8em;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: rgba(255,255,255,0.3);
    text-shadow: -1px -1px 1px rgba(0,0,0,0.5);
  }
  .left { float: left; }
  .right { float: right; }
  .fun { color: rgb(255,255,170); }
  ul {
    margin: 0 auto;
    list-style: none;
    vertical-align: center;
    list-style: none;
  }
  li {
    float: left;
    padding-right: 40px;
    vertical-align: center;
  }
  :global(.light) {
    background-color: #fff;
    color: #1e1c31;
  }
  :global(.lightb) {
    background-color: #eee;
    color: #1e1c31;
  }
</style>
