<script>
  import Btn from '$components/Btn.svelte';
  import Input from '$components/Input.svelte';
  import Nav from '$components/Nav.svelte';
  /* import Menubar from '$components/Menubar.svelte'; */
    let selected = "about";
</script>

<svelte:head>
  <title>About - clp.is</title>
</svelte:head>

    <h1>about</h1>
    <p>Website currently under construction!</p>
    <a href="/contact"><Btn btn="filled">Contact me!</Btn></a>
