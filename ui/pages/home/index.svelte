<script lang="ts">
  import * as dialog from 'tauri/api/dialog';
  import Topbar from '../../comp/ui/topbar.svelte';
  import Nav from '../../comp/ui/nav.svelte';
  import { user, isLoggedIn } from '../../util/store.js';
  import { emit, listen } from 'tauri/api/event';
  import { setTitle } from 'tauri/api/window';
  import Btn from '../../comp/ui/btn.svelte';
  import Menu from '../../comp/ui/menubar.svelte';
  import { beforeUrlChange, goto, isActive, url } from '@sveltech/routify';
  import Switch from '../../comp/ui/switch.svelte';
  import { onMount } from 'svelte';
  let showNav = false;
  const toggleNav = () => {
    showNav = !showNav; 
  }
  /*onMount(() => {*/
    /*if(!$isLoggedIn) {*/
      /*alert("Not logged in! Taking you back to login.")*/
      /*$goto('/index')*/
    /*}*/
  /*})*/
  /*$beforeUrlChange(() => {*/
    /*if($isLoggedIn) {*/
      /*return true*/
    /*} else {*/
      /*$goto('/index');*/
      /*return true*/
    /*}*/
  /*})*/
</script>
<style>
  h3 {
    padding: 10px 5px 10px 5px;
  }
  .home {
    display: block;
    white-space: pre-line;
  }
  .btns {
    display: inline;
  }
  .welcome {
    font-size: 4rem;
    font-weight: 300;
    text-shadow: 0.5px 1.5px 2.5px #000;
  }
  .wrapper {
    display: inline-block;
    background-color: #29292b; 
    padding: 10px 40px 30px 40px;
    border-radius: 4px;
    width: 50vw;
    border: 1px solid #1a1a1a;
    /*border-top: 2px solid rgba(255,255,255,0.1);*/
    border-top: 2px solid rgba(230, 190, 140, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
    /*border-bottom: 2px solid rgba(230, 190, 140, 0.4);*/
    box-shadow: 1.5px 1.5px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    background-image: linear-gradient(rgba(255,255,255,0.025), rgba(0,0,0,0));
    /*border-bottom: 1px solid #fc9;*/
    /*border-top: 2px solid #000;*/
  }
</style>

{#if showNav}
<Nav/>
{/if}
<Menu/>
<Nav/>
<div class="home">
  <br/><br/>
  <div class="rec wrapper">
    <a href={$url("./rec")}><h3>Your Records</h3></a>
    <a href={$url('/rec/new')}><Btn btn="raised">New</Btn></a>
    <a href={$url('/rec')}><Btn btn="raised">Open</Btn></a>
      <br/><br/>
    <p><em>Records here...</em></p>
  </div>
  <div class="item wrapper">
    <a href={$url("./item")}><h3>Your Items</h3></a>
    <Btn btn="raised" on:click={() => {$goto('/item/new')}}>New</Btn>
    <Btn btn="raised" on:click={() => {$goto('/item')}}>Open</Btn>
    <Btn btn="raised" on:click={() => {$goto('/item')}}>Stats</Btn>
      <br/><br/>
    <p><em>Items here...</em></p>
  </div>
  <div class="rule wrapper">
    <a href={$url("./rule")}><h3>Your Rules</h3></a>
    <Btn btn="raised square">New</Btn>
    <Btn btn="raised square">Open</Btn>
    <Btn btn="raised square" on:click={() => {$goto('/item')}}>Edit</Btn>
      <br/><br/>
    <p><em>Rules here...</em></p>
  </div>
  <p><a href={$url('/index')}>Back to index</a></p>
  <br/><br/>
  <Switch on:toggle={toggleNav}/>
</div>
