<script>
    import Nav from '$components/Nav.svelte';
    import Footer from '$components/Footer.svelte';
    import { fade } from 'svelte/transition';
    export let selected = "/";
    export let title = "home";
    function handleClick() {

    }
    function handleScroll() {

    }
</script>
<svelte:window on:click={handleClick} on:scroll={handleScroll}/>

<div class="body" transition:fade>
    <Nav {selected}/>
    <slot></slot>
</div>
<Footer/>

<style>
  /*
  .body {
    min-height: 100%;
    position: relative;
    padding-bottom: 100px;
  }
  :global(body) {
    background-color: #26253b;
    background-color: #27263c;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
      overflow-x: hidden;
      overflow-y: auto;
      font-size: 1.2rem;
  }
  :global(a) {
    color: rgba(150,255,170,1);
    text-decoration: none;
  }
  div {
    display: block;
    white-space: pre-line;
    font-size: 1.1rem;
    font-weight: 300;
    text-shadow: 0.5px 1.5px 2.5px rgba(0,0,0,0.5);
    color: #cbe3e7;
  }
  .sidebar {
    display: block;
    position: relative;
    float: left;
  }
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  :global(h1, h2, h3, h4, h5, h6) {
    color: #cbe3e7;
    text-align: center;
		line-height: 1.1;
		margin: 2rem auto;
  }
  :global(h1) {
    padding: 10px 5px 10px 5px;
		font-size: 3.5rem;
		font-weight: 100;
    text-shadow: 0.5px 1.5px 2.5px rgba(0,0,0,0.7);
  }
  :global(h3) {

    font-size: 2.8rem;
		font-weight: 100;
		line-height: 1.1;
    text-shadow: 0.5px 1.5px 2.5px rgba(0,0,0,0.7);

  }
  -->
  */
</style>

