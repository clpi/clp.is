<script lang="ts">
  import { onMount } from 'svelte';
  import { beforeUrlChange, isActive, url } from '@sveltech/routify';
  import Btn from './btn.svelte';
  import { open, save } from 'tauri/api/dialog';
  import { user, isLoggedIn } from '../../util/store.js';

  const open_space = () => {
    open()
  }
  const save_space = () => {
    save()
  }
</script>
<style>
.menu {
  background-color: #1c1f23;
  background-image: linear-gradient(rgba(255,255,255,0.025), rgba(0,0,0,0));
  font-size: 1.1rem;
  font-weight: 350;
  overflow: hidden;
  text-align: center;
  width: 100%;
  min-width: 100%;
  /*min-height: 40px;*/
  height: 50px;
  padding: 10px 0vw 10px 0vw;
  max-height: 40px;
  margin: 0;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(0,0,0,0.3);
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
  /*padding: 5px 0px 5px 0px;*/
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
  color: #ffca90;
  font-weight: 380;
  text-shadow: 0.4px 1.3px 2px rgba(0,0,0,1);
}
.title a{
  font-size: 1.3rem;
  font-weight: 350;
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
    width: 10%;

  }
  .right {
    float: right;
    width: 45%;

  }
  .right li {
    float: right;
  }

</style>

<div class="menu">
  <ul>
    <div class="left">
      <li>
        <Btn btn="raised grad">
          <!--
          <div class="icn">
            <FaPlus/>
          </div>
          -->
          New
        </Btn>
      </li>
      <li>
        <Btn btn="raised grad">
          Edit
        </Btn>
      </li>
      <li>
        <Btn btn="raised grad">
          <!--
          <div class="icn">
            <FaTools/>
          </div>
          -->
          Recs
        </Btn>
      </li>
      <li>
        <Btn btn="raised grad">
          Items
        </Btn>
      </li>
    </div>
    <div class="middle">
    </div>
    <div class="right">
      <li>
        <Btn btn="raised">
          Stats
        </Btn>
      </li>
      <li>
        <Btn btn="raised">
          Profile
        </Btn>
      </li>
    </div>
  </ul>

</div>
