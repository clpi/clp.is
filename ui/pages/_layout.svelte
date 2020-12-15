<script lang="ts">
  import Nav from '../comp/ui/nav.svelte';
  import StatusBar from '../comp/ui/statusbar.svelte';
  import { blur } from 'svelte/transition';
  import { beforeUrlChange, afterPageLoad, params } from '@sveltech/routify';
  import { emit, listen } from 'tauri/api/event';
  import { invoke, promisified } from 'tauri/api/tauri';
  /*import { refreshAuth, getUserById } from '../util/calls.js';*/
  import { user, isLoggedIn } from '../util/store.js';
  listen('request', (data) => { console.log(data) });

  $beforeUrlChange(async() => {
    emit('pageChange', 'changed');
    promisified({ cmd: 'pageChanged', uid: $user.id });
    if(isLoggedIn) {
       
    }  
    return true
  })
</script>
<style>
  .layout {
    background-color: #282a2c;
    position: absolute;
    display: block;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
  }
  .content {
    padding: 5vh 2.5vw 5vh 2.5vw;
  }
</style>
<div class="layout" in:blur>
      <slot/>
</div>
<StatusBar/>
