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
  /*background-color: #1c1f23;*/
  /*background-image: linear-gradient(rgba(255,255,255,0.025), rgba(0,0,0,0));*/
  background-color: rgba(0,0,0,0.15);
  font-size: 1.1rem;
  font-weight: 350;
  overflow: hidden;
  text-align: center;
  width: 100%;
  min-width: 100%;
  /*min-height: 40px;*/
  height: 4vh;
  padding: 0vh 0vw 2.5vh 0vw;
  max-height: 40px;
  margin: 0;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(0,0,0,0.3);
}
.nav-btn {
  /*background: #fc9;*/
  /*color: #1c1f23;*/
  /*text-shadow: 0px -1px 0px rgba(255,255,255,0.025);*/
}
a {
  padding: 1.8vh 0vw 1.8vh 0vw;
  display: inline-block;
  font-size: 1rem;
}
.icn {
  width: 14px;
  height: 14px;
  float: left;
  /*padding: 3px 7px 5px 7px;*/
  margin: 0px 5px 0px 5px;

}
ul {
  /*justify-content: center;*/
  /*display: inline-block;*/ /* should i have it centerrd? */
  margin: auto;
  list-style: none;
  padding-right: 5vw;
  /*margin: 0vh 5vw 0vh 5vw;*/
}

li {
  float: left;
  display: block-inline;
  /*height: 100%;*/
  margin: 0 0.8vw 0 0.8vw;
  /*padding: 0px 1.3vw 8px 1.3vw;*/
  border-bottom: 2px solid rgba(100, 100, 100, 0);
}
.nav li:hover {
  border-bottom: 2px solid rgba(240, 190, 130, 0.5);
  transition: border-bottom 0s;
}

.link {
  color: #ffca90;
  font-weight: 380;
  text-shadow: 0.4px 1.3px 2px rgba(0,0,0,1);
}
.title {
  font-weight: 380;
  min-width: 100%;
}
.title a{
  font-size: 1rem;
  text-shadow: 1px 1px 1px #000;
  font-weight: 350;
  color: #ffca90;
  /*margin-bottom: 3px;*/
  letter-spacing: 1px;
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
      <div class="icn">
        <FaHome/>
      </div>
      Home
    </a>
  </li>
  <li class:active={$isActive('/dash')} class="link left-link">
    <a href={$url('/dash')}>
      Dash
      <div class="icn">
        <FaChalkboard/>
      </div>
    </a>
  </li>
  <li class="link left-link nav-btn" class:active={$isActive('/search')}>
    <a href={$url('/search')}>
      Search
      <div class="icn">
        <FaSearch/>
      </div>
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
  </div>
  <div class="right">
  <li class="link right-link prof" class:active={$isActive('/profile')}>
    <a href={$url('/profile')}>
      {$user.username}
      <div class="icn">
        <ChevronCircleUp/>
      </div>
    </a>
  </li>
  <li class="link right-link nav-btn" on:click={open_space}>
    <a href={$url('/profile')}>
      Open
      <div class="icn">
        <FaFileImport/>
      </div>
    </a>
  </li>
  <li class="link right-link nav-btn" on:click={save_space}>
    <a href={$url('/profile')}>
      Save
      <div class="icn">
        <FaFileExport/>
      </div>
    </a>
  </li>
  </div>

</ul>
</div>
