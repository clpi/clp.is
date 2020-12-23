<script>
  import Nav from '$components/Nav.svelte';
  import Footer from '$components/Footer.svelte';
  export let selected = "/";
</script>

<div class="body">
  <Nav {selected}/>
  <div class="content">
    <slot></slot>
  </div>
</div>
  <Footer/>

<style>
  .body {
    /* margin-bottom: -100px; */
    min-height: 100%;
    position: relative;
    padding-bottom: 100px;
    /* min-height: calc(100vh); */
  }
  :global(body) {
    background-color: #26253b;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
      overflow-x: hidden;
      overflow-y: auto;
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
    margin: 3% auto 3% auto;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.2);
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
</style>

