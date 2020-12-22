<script>
  import Link from './Link.svelte';
  import Btn from './Btn.svelte';
  import Switch from './Switch.svelte';
    let links = [
        ["home", "/"],
        ["about", "/about"],
        ["contact", "/contact"],
        ["projects", "/projects"],
        ["blog", "/blog"],
        ["github", "https://github.com/clpi"]
      ];
  export let selected;
</script>
<nav>
<ul>
  {#each links as link}
    <li class="link left">
      <a href={link[1]} class:selected={selected==link[1]}>
        {link[0]}
      </a>
    </li>
  {/each}
  <li>
    <Switch/>
  </li>
</ul>
</nav>
<style>
  .left {
    color: #91ffaa;
    vertical-align: center;
  }
  .selected {
    border-bottom: 1px solid #81ee99;
  }
  a {
    color: #91ffaa;
    text-decoration: none;
    padding: 10px 8px 10px 8px;
    margin-top: 10px;
    display: inline-block;
    font-size: 1.1rem;
  }
  li {
    vertical-align: center;
    float: left;
    margin: 0 1.6vw 0 1.6vw;
  }
  a:hover {
    color: #71dd99;
    border-bottom: 1px solid #91ffaa;
    border-radius: 3px;
    text-shadow: 2px 2px 2px #000;
    /* transition: border-bottom 2s, text-shadow 1s; */
    transition: 0.4s;
  }
  a:active {
    color: #a1ffca;
  }
ul {
  display: inline-block;
  margin: 0 auto;
  list-style: none;
  padding-right: 5vw;
  vertical-align: center;
  padding-inline-start: unset;
}
  ul::after {
    content: '';
    display: block;
    clear: both;
  }
  .selected {
    /* background-color: #91ffaa; */
    /* transition: 0.3s ease-in-out; */
  }
  nav {
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.15);
    font-size: 1.1rem;
    font-weight: 300;
    width: 90%;
    overflow: hidden;
    text-align: center;
    width: 100%;
    min-width: 100vw;
    /* height: 4vh; */
    padding: 0vh 0vw 2.5vh 0vw;
    max-height: 40px;
    margin: 0;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);
    border-bottom: 1px solid rgba(0,0,0,0.3);
    color: #91ffaa;
    height: 60px;
    vertical-align: center;

  }
</style>
