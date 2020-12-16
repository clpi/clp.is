<script>
  export let type;
  export let name;
  export let id;
  export let cls;
  export let value="";
</script>
<style>
  textarea {
    border-radius: 4px;
    border: 1px solid #91ffaa;
    padding: 10px 20px 10px 20px;
    margin: 2.5vh 1vw 2.5vh 1vw;
    color: #91ffaa;
    /*background: #303537;*/
    background: #1e1c31;
    box-shadow: 0px 2px 1px #000;

  }
  .embed {
    background-color: #333;
    box-shadow: 0px -1px 1px #000;
    border-bottom: 1px solid #555;
  }
</style>

<textarea type={type}
       name={name}
       id={id}
       class={cls}
       />
