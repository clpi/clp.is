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
    <div class="content">
      <h1>~/</h1>
      <h3>Welcome!</h3>
      <p>Website currently under construction!</p>
      <a href="/contact"><Btn btn="filled">Contact me!</Btn></a>
  </div>
</div>

<style>
</style>
