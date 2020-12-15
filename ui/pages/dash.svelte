<script lang="ts">
  import Nav from '../comp/ui/nav.svelte';
  import Btn from '../comp/ui/btn.svelte';
  import { invoke, promisified } from 'tauri/api/tauri';
  import { open, save } from 'tauri/api/dialog';
  let text = "";
  let dataFrom = Promise.resolve([]);
  const parse = async () => {
    let data = promisified({ cmd: 'parseText', text: text })
      .then(response => {
        console.log("From js: " + response);
        console.log("DataFrom: " + dataFrom);
      }).catch(err => {
        console.error(err);
      });
      console.log("DataFrom: " + dataFrom);
  }
  const openfile = async () => {
    let path = await open()
    .then(path => path.toString())
    .catch(err=>console.error(err));
    let opn = await promisified({ cmd: 'openFile', path: path });
    console.log(opn.toString());
  }
  let savefile = async () => {
    let path = await save()
    .then(res => res.toString())
    .catch(err=>console.error(err));
    let sve = await promisified({ cmd: 'saveFile', path: path, data: text });
    console.log(sve.toString());
  }
  let update = async () => {
    let change = await promisified({ cmd: 'inputChanged', input: text })
      .then(res => res)
      .catch(err => console.error(err));
    console.log(change);
  }
  window.addEventListener("open", (data) => {
    console.log("Hello, opened" + data);
  })
  window.addEventListener("save", (data) => {
    console.log("Hello, opened" + data);
  })
  document.addEventListener("open", (data) => {
    console.log("Hello, opened" + data);
  });
  document.addEventListener("save", () => {
    console.log("Hello, saved");
  });
</script>
<style>
  .parse {
    width: 100%;
    min-width: 400px;
  }
  .in { 
  }
  .input {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #eee;
    border-color: #fc9;
    font-size: 1.3rem;
    padding: 40px;
    width: 80vw;
    height: 50vh;
    background: #222;
  }
</style>
<Nav/>
  <h3>Dash</h3>
  <div class="in">
    <textarea 
      class="input" 
      bind:value={text}
      on:change={update}></textarea>
  </div>
  <div class="parse">
    <Btn btn="raised" on:click={parse}>Parse</Btn>
  </div>
  <br/>
  <Btn btn="raised" on:click={openfile}>Open</Btn>
  <Btn btn="raised" on:click={savefile}>Save</Btn>

