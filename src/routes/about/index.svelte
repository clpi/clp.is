<script>
  import Btn from '$components/Btn.svelte';
  import Content from '$components/Content.svelte';
  /* import Menubar from '$components/Menubar.svelte'; */
    let selected = "about";
</script>

<svelte:head>
  <title>About • clp.is</title>
</svelte:head>

<Content>
<h3>about</h3>
<p>Website currently under construction!</p>
<a href="/contact"><Btn btn="filled">Contact me!</Btn></a>
</Content>
