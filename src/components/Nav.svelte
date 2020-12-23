<script>
  import Link from './Link.svelte';
  import Btn from './Btn.svelte';
    let links = [
        ["home", "/"],
        ["about", "/about"],
        ["contact", "/contact"],
        ["projects", "/projects"],
        ["blog", "/blog"],
      ];
  export let selected;
</script>
<nav>
<ul>
  <li>
    <a href="/" class="title">
      clp<span class="h2">.is</span>
    </a>
  </li>
  <li></li>
  <a href="/" class:selected={selected==="/"}>
    <li class="link left">
      home
    </li>
  </a>
  <a href="/about" class:selected={selected==="/about"}>
    <li class="link left">
      about
    </li>
  </a>
  <a href="/contact" class:selected={selected==="/contact"}>
    <li class="link left">
      contact
    </li>
  </a>
  <a href="/projects" class:selected={selected==="/projects"}>
    <li class="link left">
      projects
    </li>
  </a>
  <a href="/blog" class:selected={selected==="/blog"}>
    <li class="link left">
      blog
    </li>
  </a>
</ul>
</nav>
<style>
  .left {
    color: #91ffaa;
    vertical-align: center;
  }
  .selected {
    border-bottom: 1px ,solid #81ee99;
  }
  a {
    color: rgba(150,255,170,1);
    /* color: #91ffaa; */
    text-decoration: none;
    padding: 15px 2px 15px 2px;
    margin-top: 10px;
    display: inline-block;
    font-size: 1.1rem;
    border-bottom: 1px solid transparent;
  }
  li {
    vertical-align: center;
    float: left;
    margin: 0 1.6vw 0 1.6vw;
  }
  a:hover {
    color: #71dd99;
    border-bottom: 1px solid #91ffaa;
    border-radius: 2px;
    text-shadow: 2px 2px 2px #000;
    /* transition: border-bottom 2s, text-shadow 1s; */
    transition: 0.4s;
    /* background: rgba(0,0,0,0.1); */
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
    height: 100%;
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
    background-image: linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.21));
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
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(0,0,0,0.25);
    color: #91ffaa;
    height: 60px;
    vertical-align: center;

  }
  .title {
    color: #91ffaa;
    font-size: 1.1rem;
    font-weight: 400;
  }
  .h2 {
    font-weight: 300;
    color: #cbe3e7;
  }
</style>
