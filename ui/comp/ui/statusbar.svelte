<script>
  import { user, isLoggedIn } from '../../util/store.js';

</script>
<style>
.status {
  background-color: #1c1f23;
  background-image: linear-gradient(rgba(0,0,0,0), rgba(255,255,255,0.025));
  padding: 1vh 0vw 1vh 0vw;
  font-size: 1.1rem;
  font-weight: 350;
  overflow: hidden;
  min-width: 100%;
  margin: 0;
  box-shadow: 0px -1px 1px rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(0,0,0,0.3);
  position: fixed;
  left:0px;
  bottom:0px;
  height:22px;
  width:100%;

}
.left {
  text-align: left;
  padding-left: 20px;
  float: left;
  width: 45%;

}
.middle {
  float: left;
  min-width: 10%;
}
.right {
  float: right;
  width: 45%;
}
.right * {
  float: right;
  margin-right: 20px;
}
span {
  text-shadow: 0px -1px 0px rgba(0,0,0,1);
  font-size: 1rem;
  color: #64666c;
}
span.con {
  color: #9f9;
  text-shadow: 0px 0px 2px #9f9;
}
span.uncon {
  color: #f99;
  text-shadow: 0px 0px 2px #f99;
}
span.info {
  color: #fc9;
  text-shadow: 0px -1px 0px rgba(0,0,0,1);
}
p {
  text-shadow: 0px -1px 0px rgba(0,0,0,1);
  font-size: 1rem;
  color: #64666c;
}
</style>

<div class="status">
  <div class= "left">
    {#if $isLoggedIn}
      <span class="con">⏺</span><span>&nbsp;&nbsp;Connected</span>
    {:else}
      <span class="uncon">⏺</span><span>&nbsp;&nbsp;Disconnected</span>
    {/if}
  </div>
  <div class= "middle">
  </div>
  <div class= "right">
    {#if $isLoggedIn}
      <p><span class="info">{ $user.username } (id: {$user.uid})</span></p>
    {:else}
      <p> Not logged in </p>
    {/if}
  </div>
</div>
