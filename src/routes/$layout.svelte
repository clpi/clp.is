<script>
  import Nav from '$components/Nav.svelte';
  export let selected = "/";
</script>

<div class="head">
  <Nav {selected}/>
</div>
<div clas="body">
  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
  :global(body) {
    background-color: #25243a;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
      overflow-x: hidden;
      overflow-y: auto;
  }
  :global(a) {
    color: #91ffaa;
    text-decoration: none;
  }
  div {
    display: block;
    white-space: pre-line;
    font-size: 1.1rem;
    font-weight: 300;
    text-shadow: 0.5px 1.5px 2.5px #000;
    color: #cbe3e7;
  }
  .content {
    /* background-image: linear-gradient(rgba(255,255,255,0.1), rgba(0,0,0,0.4)); */
    background-color: rgba(255,255,255,0.08);
    padding: 10px 20px 40px 20px;
    border-radius: 10px;
    width: 85%;
    max-width: 90%;
    color: #cbe3e7;
    border: 1px solid #1a1a1a;
    border-top: 1px solid #91ffaa;
    border-bottom: 2px solid #000000;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
    margin: 3% auto 3% auto;
    text-align: center;
    /*border-bottom: 1px solid #fc9;*/
    /*border-top: 2px solid #000;*/
  }
  .sidebar {
    display: block;
    position: relative;
    float: left;
  }
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  :global(h1) {
    color: #cbe3e7;
    padding: 10px 5px 10px 5px;
    text-align: center;
		text-transform: uppercase;
		font-size: 3.5rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
  }
  :global(h3) {
    font-size: 1.9rem;
		font-weight: 300;
		line-height: 1.1;

  }
</style>

