<script>
  import Btn from './Btn.svelte';

</script>
<style>
  div {
    margin: 0;
  }
.menu {
  background-color: rgba(0,0,0,0.15);
  background-image: linear-gradient(rgba(255,255,255,0.015), rgba(0,0,0,0));
  font-size: 0.9rem;
  font-weight: 350;
  overflow: hidden;
  text-align: center;
  width: 100%;
  /*min-width: 100%;*/
  /*min-height: 40px;*/
  height: 40px;
  padding: 10px 0vw 10px 0vw;
  max-height: 40px;
  margin: 0;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(0,0,0,0.5);
}
ul {
  margin: auto;
  list-style: none;
  padding-right: 5vw;
}

li {
  float: left;
  display: block-inline;
  margin: 0 0.8vw 0 0.8vw;
  border-bottom: 2px solid rgba(100, 100, 100, 0);
}
.nav li:hover {
  border-bottom: 2px solid rgba(240, 190, 130, 0.5);
  transition: border-bottom 0s;
}

.left {
  float: left;
  width: 55%;

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
        <a href="/">
        <Btn btn="outline grad-rev">
          Home
        </Btn>
        </a>
      </li>
      <li>
        <a href="/about">
        <Btn btn="outline grad-rev">
          About
        </Btn>
        </a>
      </li>
      <li>
        <Btn btn="outline grad-rev">
          Contact
        </Btn>
      </li>
      <li>
        <Btn btn="outline grad-rev">
          Projects
        </Btn>
      </li>
    </div>
    <div class="middle">
    </div>
    <div class="right">
      <li>
        <Btn btn="outline grad-rev">
          Stats
        </Btn>
      </li>
      <li>
        <Btn btn="outline grad-rev">
          Profile
        </Btn>
      </li>
    </div>
  </ul>

</div>
