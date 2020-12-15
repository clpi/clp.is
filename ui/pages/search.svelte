<script lang="ts">
  import { getAllUsers } from '../util/calls';
  import Btn from '../comp/ui/btn.svelte';
  import Nav from '../comp/ui/nav.svelte';
  import { invoke, promisified } from 'tauri/api/tauri';
  import { listen, emit } from 'tauri/api/event';
  import { execute } from 'tauri/api/process';

  let userPromise = Promise.resolve([]);
  let submittedUsers: boolean = false;
  let success = Promise.resolve([]);
  let n = Promise.resolve([]);
  /*let promis = window.__TAURI_INVOKE_HANDLER__.tauri.promisified;*/
  async function fail(): Promise<JSON> { return Promise.resolve(JSON) }
  function test() {
    invoke({ cmd: 'chooseFolder' });  
  }
  /*async function success(): Promise<JSON> { return Promise.resolve(JSON) }*/
  async function getUsers(): Promise<JSON> {
    execute('getAllUsers', []);
    promisified({
      cmd: "getAllUsers",
      callback: "userPromise",
      error: "fail",
    }).then(response => {
      console.log(response);
      return response;
    }).catch(err => {
      console.error(err);
    });
    submittedUsers = true;
    const res = await getAllUsers()
      .catch(err=>{
      console.log(err);
        return [];
    });
    userPromise = res;
    return res;
  }
</script>

<style>
  .user-card {
    background: #2a2a2a;
    margin: 20px 10px 20px 10px;
    border: 1px solid #fc9;
    border-radius: 4px;
    box-shadow: 2px 2px 2px #000;
    width: 50vw;
    display: block;
    margin: auto;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .user-card li {
    list-style: none;
  }
  h3 {
    font-size: 1.5rem;
  }
</style>

<Nav/>
<Btn btn="filled" on:click={getUsers}>Fetch</Btn>

  {#await userPromise}
    <p>Getting users...</p>
  {:then users}
    {#if submittedUsers}
      {#each users as user}
      <div class="user-card">
        <ul>
          <h3>{user.username}</h3>
          <li><p>{user.id}</p></li>
          <li><p>{user.username}</p></li>
          <li><p>{user.email}</p></li>
          <li><p>{user.createdAt}</p></li>
        </ul>
      </div>
      {/each}

    {/if}

  {:catch err}
    <p>{ err } - Something happened. Couldn't get users</p>
  {/await}
