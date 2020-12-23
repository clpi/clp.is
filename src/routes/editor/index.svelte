<script>
  import Btn from '$components/Btn.svelte';
  import Hero from '$components/Hero.svelte';
  let input = "";
  let output = "";
  export function updateOutput()
  {
    output = input;
    return output;
  }
</script>
<div class="content">
  <p class="head" style="font-size: 1.3rem;"><span class="green">editor</span> canvas</p>
</div>
<form name="editor" data-netlify="true">
<div class="content">
  <div class="input col">
    <p class="head"><span class="green">input</span> column.</p>
  </div>
  <div class="output col">
    <p class="head"><span class="green">output</span> column.</p>
  </div>
  <div class="input col">
    <textarea bind:value={input} on:input={updateOutput}></textarea>
  </div>
  <div class="output col">
    <div class="out">{output}</div>
    <br/>
  </div>
</div>
<div class="content">
  <div class="input col">
    <Btn btn="filled">Clear</Btn>
    <Btn btn="filled">Refresh</Btn>
  </div>
  <div class="input col">
    <Btn btn="filled" type="submit">Submit</Btn>
  </div>
</div>
</form>
<style>
  .input {
    margin-left: 1%;
    margin-right: 1%;
  }
  .output {
    text-align: left;
    margin-left: 1%;
    margin-right: 1%;
  }
  .col {
    width: 48%;
    float: left;
  }
  .content:after {
    content: "";
    display: table;
    clear: both;
  }
  textarea {
    width: 100%;
    height: 400px;
    border-radius: 2px;
    border: 1px solid #91ffaa;
    color: #91ffaa;
    background: rgba(0,0,0,0.2);
    box-shadow: 0px 2px 1px #000;
  }
  .out {
    width: 100%;
    height: 406px;
    border-radius: 2px;
    border: 1px solid #91ffaa;
    background: rgba(0,0,0,0.15);
    box-shadow: 0px 2px 1px #000;
  }
  .head {
    font-weight: 300;
    text-align: center;
    font-size: 1.1rem;
  }
  .green {
    color: #91ffaa;
    font-weight: 400;
  }
</style>
