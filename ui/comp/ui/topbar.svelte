<script lang="ts">
  import { isActive, url } from '@sveltech/routify';
  import Btn from '../../comp/ui/btn.svelte';
  /*import { isLoggedIn, user } from '../../util/store.js';*/
  import ChevronCircleUp from 'svelte-icons/fa/FaChevronCircleUp.svelte';
  import FaHome from 'svelte-icons/fa/FaHome.svelte';
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  import FaChalkboard from 'svelte-icons/fa/FaChalkboard.svelte';
  import FaUserCog from 'svelte-icons/fa/FaUserCog.svelte';
  import FaPlus from 'svelte-icons/fa/FaPlus.svelte';
  import FaFileImport from 'svelte-icons/fa/FaFileImport.svelte';
  import FaFileExport from 'svelte-icons/fa/FaFileExport.svelte';
  import FaTools from 'svelte-icons/fa/FaTools.svelte';
  import FaCaretUp from 'svelte-icons/fa/FaCaretUp.svelte';
  import { user, isLoggedIn } from '../../util/store.js';
  import { open, save } from 'tauri/api/dialog';

  const open_space = () => {
    open()
  }
  const save_space = () => {
    save()
  }

</script>
<style>
.nav {
  /*background-color: rgba(0,0,0,0.15);*/
  /*box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);*/
  /*border-bottom: 1px solid rgba(0,0,0,0.3); */
  font-size: 1.1rem;
  font-weight: 350;
  /*overflow: hidden;*/
  text-align: center;
  width: 100%;
  min-width: 100%;
  /*min-height: 40px;*/
  /*height: 6vh;*/
  /*padding: 0vh 0vw 2.5vh 0vw;*/
  margin: 0;
  padding: 0;
  display: inline-block;
}
a {
  display: inline-block;
  font-size: 1rem;
  margin: 0;
  padding: 0;
}
.icn {
  width: 14px;
  height: 14px;
  float: left;
  margin: 0px 5px 0px 5px;
  
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  /*padding-right: 5vw;*/
  /*margin: 0vh 5vw 0vh 5vw;*/
}

li {
  float: left;
  display: block-inline;
  margin: 0;
  /*height: 100%;*/
  /*margin: 0 0.8vw 0 0.8vw;*/
  /*padding: 0px 1.3vw 8px 1.3vw;*/
  border-bottom: 2px solid rgba(100, 100, 100, 0);
}
.nav li:hover {
  /*border-bottom: 2px solid rgba(240, 190, 130, 0.5);*/
  /*transition: border-bottom 0s;*/
}

.link {
  color: #ffca90;
  font-weight: 380;
  text-shadow: 0.4px 1.3px 2px rgba(0,0,0,1);
}
.link:hover {
  color: #df9a50;
}
.right-link {
  float: right;
}
.right-link a {
  color: #ffca90;
}
.right-link a:hover {
  color: #df9a50;
}
.left {
  margin: 0;
  float: left;
  width: 45%;

}
  .middle {
    float: left;
    min-width: 10%;
  }
  .middle li {
    width: 100%;
  }
  .right {
    float: right;
    width: 45%;

  }

</style>
<div class="nav">
<ul>
  <div class="left">
  <li class:active={$isActive('/home')}>
    <a href={$url('/home')}>
      <Btn btn="raised square">
        <div class="icn">
          <FaHome/>
        </div>
        Home
      </Btn>
    </a>
  </li>
  <li class:active={$isActive('/dash')} class="link left-link">
    <a href={$url('/dash')}>
      <Btn btn="raised square">
      Dash
      <div class="icn">
        <FaChalkboard/>
      </div>
      </Btn>
    </a>
  </li>
  </div>
  
  <div class="middle">
    <!--
    <li class="title">
      <a href={$url('/home')}>
       div.is
      </a>
    </li>
    -->
    <!--
  </div>
  <div class="right">
  <li class="link right-link prof" class:active={$isActive('/profile')}>
    <a href={$url('/profile')}>
      <Btn btn="raised square">
      {$user.username}
      <div class="icn">
        <ChevronCircleUp/>
      </div>
      </Btn>
    </a>
  </li>
    -->
  </div>
  <div class="right">
  <li class="link right-link nav-btn" on:click={open_space}>
    <a href={$url('/profile')}>
      <Btn btn="raised square">
      Open
      <div class="icn">
        <FaFileImport/>
      </div>
      </Btn>
    </a>
  </li>
  <li class="link right-link nav-btn" on:click={save_space}>
    <a href={$url('/profile')}>
      <Btn btn="raised square">
      Save
      <div class="icn">
        <FaFileExport/>
      </div>
      </Btn>
    </a>
  </li>
  </div>

</ul>
</div>
