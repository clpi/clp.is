<script>
  import Link from './Link.svelte';
</script>
<nav>
<ul>
  <div class="left">
    <li class="link left">
      <a href="/home">
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
      <a href="/about">
        projects
      </a>
    </li>
  </div>
</nav>
<style>
  nav {
    color: #91ffaa;
  }
  .left {
    color: #91ffaa;
  }
  a {
    color: #91ffaa;
    text-decoration: none;
    padding: 1.8vh 0vw 1.8vh 0vw;
    display: inline-block;
    font-size: 1.1rem;
  }
  li {
    float: left;
    margin: 0 0.8vw 0 0.8vw;
    border-bottom: 2px solid rgba(100, 100, 100, 0);
  }
ul {
  /*justify-content: center;*/
  display: inline-block;
  margin: 0 auto;
  list-style: none;
  padding-right: 5vw;
  /* margin: 0vh 5vw 0vh 5vw; */
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

  }
</style>
