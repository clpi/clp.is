<script>
  import Btn from '$components/Btn.svelte';
  import Input from '$components/Input.svelte';
  import Nav from '$components/Nav.svelte';
  import Menubar from '$components/Menubar.svelte';
</script>

<div class="index">
    <Nav/>
    <div class="content">
    <h1>hi there</h1>
    <h3>Welcome!</h3>
    <p>Website currently under construction!</p>
    <a href="/contact"><Btn btn="filled">Contact me!</Btn></a>
  </div>
</div>

<style>
  .index {
    overflow: hidden;
    /* background-color: #282a2c; */
    background-color: #1e1c31;
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
		text-transform: uppercase;
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
    background-color: rgba(255,255,255,0.07);
    padding: 10px 40px 30px 40px;
    border-radius: 6px;
    width: 90%;
    max-width: 95%;
    color: #cbe3e7;
    border: 1px solid #1a1a1a;
    border-top: 2px solid #91ffaa;
    border-bottom: 2px solid #000;
    /*border-bottom: 2px solid rgba(230, 190, 140, 0.4);*/
    box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
    margin: 3% auto 3% auto;
    text-align: center;
    /*border-bottom: 1px solid #fc9;*/
    /*border-top: 2px solid #000;*/
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
