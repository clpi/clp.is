<script lang="ts">
  import Nav from '../comp/ui/nav.svelte';
  import { signupUser, getUserById } from '../util/calls.js';
  import { invoke, promisified } from 'tauri/api/tauri';
  import { goto, isActive, url } from '@sveltech/routify';
  import Btn from '../comp/ui/btn.svelte';
  import { user, isLoggedIn } from '../util/store.js';

    let signupPromise = Promise.resolve([]);
    let signupSubmitted = false;
    let userIn = {
        username: "",
        password: "",
        email: ""
    }
    const handleSubmit = async () => {
      let res = await signupUser(userIn);
      isLoggedIn.set(true);
      signupSubmitted = true;
      signupPromise = res;
      alert('Signed up ' + userIn.username + ' successfully!');
      $goto('/home');
    }
    const valUsername = () => {}
    const valEmail = () => {}
    const valPassword = () => {}
</script>
<style>
  .signup {
    display: block;
  }
  input {
    border-radius: 4px;
    border: 1px solid #da7;
    padding: 10px 20px 10px 20px;
    margin: 2.5vh 1vw 2.5vh 1vw;
    color: #fc9;
    /*background: #303537;*/
    background: #282a2c;
    box-shadow: 0px 2px 1px #000;

  }
  input:focus {
    border: 1px solid #fc9;
    background: #333;
  }
  .signupform {
    background-image: radial-gradient(rgba(255,255,255,0.03), rgba(0,0,0,0));

    padding: 10px 5px 10px 5px;
    display: inline-block; 
    margin: auto;
    width: min-content;
  }
  input {
    padding: 10px;
  }
</style>

<div class="signupform">
  <br/><br/>
  <br/><br/>
  <h2>Register</h2>
  <br/><br/>
    <label for="email">email</label>
    <input
      id="email"
      name="email"
      on:change={valEmail}
      bind:value={userIn.email}/>

    <label for="username">username</label>
    <input
      id="username"
      name="username"
      on:change={valUsername}
      bind:value={userIn.username}
    />

    <label for="password">password</label>
    <input
      id="password"
      name="password"
      type="password"
      bind:value={userIn.password}
    />
  <Btn btn="raised">Reset</Btn>
  <Btn btn="raised" on:click={handleSubmit}>Submit</Btn>

  <br/><br/>
  <br/><br/>
  <a href={$url('/index')}>Back to login</a>
    {#if signupSubmitted}
      {#await signupPromise}
        <h1>LOGGING IN</h1>  
      {:then}
        <p>You're signed up in {$user.username}! Taking you back <a href="/home">home</a>...</p>
      {:catch}
        <p>Couldn't signup user.</p>
      {/await}
    {/if}

</div>
