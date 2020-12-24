<script>
  export let height = "1px";
  export let opacity = 1.0;
  export let color = "green";
</script>
<div class={color} style="height: {height}; opacity: {opacity}"></div>
<style>
  div {
    min-width: 100%;
    margin: 0 auto;
    padding: 0;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.8);
  }

  .green {
    background-image: radial-gradient(rgba(150,255,170,0.8), rgba(0,0,0,0.0));
  }
  .blue {
    background-image: radial-gradient(rgba(150,170,255,1), rgba(0,0,0,0.0));
  }
  .purple {
    background-image: radial-gradient(rgba(235,170,255,1), rgba(0,0,0,0.0));
  }
</style>
