<script>
  import * as dialog from 'tauri/api/dialog';
  import { goto, isActive, url } from '@sveltech/routify';
  import { emit, listen } from 'tauri/api/event';
  import { setTitle } from 'tauri/api/window';
  import Btn from '../comp/ui/btn.svelte';
  import Input from '../comp/ui/input.svelte';
  /*import { loginUser, getUserById } from '../util/calls.js';*/
  import { invoke, promisified } from 'tauri/api/tauri';
  import { user, isLoggedIn } from '../util/store.js';

  let loginPromise = Promise.resolve([]);
  let backLoginPromise = Promise.resolve([]);
  let loginSubmitted = false;
  export let userIn = {
      username: "",
      password: ""
  };
  const handleSubmit = async () => {
    emit('login', 'login-payload')
    let res = await loginUser(userIn);
    user.set(res);
    isLoggedIn.set(true);
    loginSubmitted = true;
    /*backLoginPromise = await promisified({ cmd: 'login', user: userIn });*/
    /*console.log(backLoginPromise);*/
    loginPromise = res;
    $goto('/home');
  }
  /*function loginUser () {  }*/
  async function loginUser() {
    const loginPost = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
          /*authorization: <authorization>*/
      },
      body: JSON.stringify(userIn)
    });
    if (loginPost.ok) {
      return loginPost.json();
    } else {
      throw new Error(users);
    }
}
</script>

<style>
  .index {
    display: block;
    background-image: radial-gradient(rgba(255,255,255,0.03), rgba(0,0,0,0));
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
  .welcome {
    font-size: 4rem;
    font-weight: 300;
    text-shadow: 0.5px 1.5px 2.5px #000;
  }
  .login {
    padding: 5vh 15vw 15vh 15vw;
    display: inline-block;
  }
  .loginform {
    padding: 10px 5px 10px 5px;
    display: inline-block; 
    margin: auto;
    width: min-content;
  }
  p { 
    font-size: 1.1rem;
  }
</style>

<div class="index">
  {#if !$isLoggedIn}
    <br/><br/><br/><br/>
  <h3 class="welcome">Welcome to div.is</h3>
  <br/>
  <div class="login">
    <div class="loginform">
      <h2>Login</h2>
      <br/>
        <label for="username">username</label>
        <input
          id="username"
          name="username"
          bind:value={userIn.username}
        />
        <br/>
        <label for="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          bind:value={userIn.password}
        />
        <br/>
        <Btn btn="outline" >Reset</Btn>&nbsp;&nbsp;
        <Btn btn="filled" on:click={handleSubmit}> Submit</Btn>

    </div>
    <br/>
    <br/>
    <p>Not logged in? <a href={$url('/signup')}>Sign up</a>. </p>
    <br/>
    <p><a href={$url('/home')}>Forgot password?</a>. </p>
    <br/>
    {#if loginSubmitted}
      {#await loginPromise}
        <h1>LOGGING IN</h1>  
      {:then}
        <p>You're logged in {$user.username}! Takine you back <a href="/home">home</a>...</p>

      {:catch}
        <p>Couldn't log in user.</p>
        
      {/await}

    {/if}
  </div>
  {:else}
    <h3>Welcome, {$user.username}!</h3>
    <p>You have logged in.</p>
  {/if}
</div>
