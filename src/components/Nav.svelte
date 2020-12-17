<script>
  import Link from './Link.svelte';
  import Btn from './Btn.svelte';
</script>
<nav>
<ul>
  <div class="left">
    <li class="link left">
      <a href="/">
        home
      </a>
    </li>
    <li class="link left">
      <a href="/about">
        about
      </a>
    </li>
    <li class="link left">
      <a href="/contact">
        contact
      </a>
    </li>
    <li class="link left">
      <a href="/projects">
        projects
      </a>
    </li>
    <li class="link right">
      <a href="http://github.com/clpi">
        github
      </a>
    </li>
  </div>
</nav>
<style>
  .left {
    color: #91ffaa;
    vertical-align: center;
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
    color: #b1ffdc;
    border-bottom: 2px solid #91ffaa;
    border-radius: 3px;
    transition: border cubic-bezier(2.0, -0.28, 0.735, 0.045);
  }
ul {
  /*justify-content: center;*/
  display: inline-block;
  margin: 0 auto;
  list-style: none;
  padding-right: 5vw;
  vertical-align: center;
  /* margin: 0vh 5vw 0vh 5vw; */
}
  .active {
    background-color: #91ffaa;
  }
  nav {
    background-color: rgba(0,0,0,0.15);
    font-size: 1.1rem;
    font-weight: 300;
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
