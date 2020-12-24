<script>
  import Content from '$components/Content.svelte';
</script>

<Content>
<div class="content">
  <link rel="stylesheet" href="https://files.stork-search.net/dark.css" />
  <slot></slot>
</div>
</Content>

<style>
  div {
    height: 100%;
  }
  .content {
    clear: both;
    height: 100%;
    display: inline-block;
  }
</style>

