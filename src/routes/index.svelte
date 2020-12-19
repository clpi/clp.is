<script>
  import Btn from '$components/Btn.svelte';
  import Input from '$components/Input.svelte';
  import Nav from '$components/Nav.svelte';
  import Menubar from '$components/Menubar.svelte';
    import { onMount } from 'svelte';
    let selected = "/";
</script>

<svelte:head>
  <title>clp.is</title>
  <script>
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:2165595,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script>
</svelte:head>
<div class="index">
  <Nav {selected}/>
    <div class="content">
      <h1>/index</h1>
      <h3>Welcome!</h3>
      <p>Website currently under construction!</p>
      <a href="/contact"><Btn btn="filled">Contact me!</Btn></a>
  </div>
</div>

<style>
  :global(body) {
      background-color: #211f36;
      width: 100%;
      height: 100%;
      margin: 0 auto;
  }
  .index {
    overflow: hidden;
    background-color: #211f36;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 100vh;
  }
  a {
    color: #91ffaa;
    text-decoration: none;
  }
  h1 {
    color: #cbe3e7;
    padding: 10px 5px 10px 5px;
    text-align: center;
		font-size: 3.5rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
  }
  button {
    display: inline;
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

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
