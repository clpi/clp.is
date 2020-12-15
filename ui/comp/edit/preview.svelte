<script>
  import marked from "marked";
  export let markdown = "";
</script>

<style>
  section {
    width: 100%;
    min-height: 80vh;
    /*margin-left: 0.5rem;*/
    /*padding: 0.2rem;*/
    border-right: 1px solid #333;
    flex: 2;
    background-color: #151519;
  }

  section :global(*) {
    word-break: break-word;
    white-space: pre-wrap;
  }
</style>

<section>
  {@html marked(markdown)}
</section>
