<script>
  export let type;
  export let name;
  export let id;
  export let cls;
  export let value="";
</script>
<style>
  input {
    border-radius: 4px;
    border: 1px solid #fc9;
    padding: 10px 20px 10px 20px;
    margin: 2.5vh 1vw 2.5vh 1vw;
    color: #fc9;
    /*background: #303537;*/
    background: #282a2c;
    box-shadow: 0px 2px 1px #000;

  }
  .embed {
    background-color: #333;
    box-shadow: 0px -1px 1px #000;
    border-bottom: 1px solid #555;
  }
</style>

<input type={type}
       name={name}
       id={id}
       class={cls}
       />
