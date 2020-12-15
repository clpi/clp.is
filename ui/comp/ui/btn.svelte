<script>
  export let label = "";
  export let type = "";
  export let btn = "outline";
</script>
<style>
button {
  /*min-width: 90px;*/
  height: 40px;
  background-color: #1c1f23;
  padding: 0px 15px 0px 15px;
  /*margin: 5px 0px 5px 0px;*/
  outline: 0;
  border-radius: 4px;
  border: 1px solid #1c1f23;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
}
.filled {
	background-color: #ffca90;
  color: #1c1f23;
  border: 1px solid #1c1f23;
  text-shadow: none;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
}
.raised {
  background-color: #333;
  /*background-image: linear-gradient(rgba(255,255,255,0.04), rgba(0,0,0,0.01));*/
  box-shadow: 0px 1px 1px #0a0a0a;
  border: none;
  border-top: 1px solid #5a5a5a;
  border-bottom: 1px solid rgba(0,0,0,0);
  text-shadow: 0px -2px 0.5px #000;
  color: #ffca90;
}
.grad {
  background-image: linear-gradient(rgba(255,255,255,0.04), rgba(0,0,0,0.01));
}
.white {
  color: #fff;
}
.grad-rev {
  background-image: linear-gradient(rgba(0,0,0,0.01), rgba(255,255,255,0,0.04));
}
.fill {
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0));
  background-color: #ffca90;
  color: #1c1f23;
  text-shadow: none;
}
.embed-fill {
  
}
.outline {
	background-color: #1c1f23;
  color: #ffca90;
  border: 1px solid #ffca90;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
}
.embed {
  background-color: #333;
  box-shadow: 0px -1px 1px #000;
  border: none;
  border-bottom: 1px solid #555;
  text-shadow: 0px 1px 0px #000;
  border-top: 1px solid rgba(0,0,0,0);
  /*color: #ffca90;*/
  color: #eab780;
}
.dark {
  background-color: #2b2b2b;
}
.square {
  border-radius: 0px;
}
.square:hover {
  border-radius: 0px;
}
button:hover {
  color: #fac58a;
  background-color: rgba(255,255,255,0.1);
  /*background-image: rgba(255,255,255,100);*/
  outline: 0;
  border-radius: 4px;
  /*box-shadow: 1px 2px 1px rgba(0,0,0,0.9);*/
  transition: background-color 0.1s, box-shadow 0.2s;
}
.filled:hover {
  color: #36394a;
  border-color: #36394a;
  background-color: #eab57a;
}
.outline:hover {
  color: #36394a;
  border-color: #36394a;
  background-color: #eab57a;
}
/*.embed:hover {*/
  /*color: #36394a;*/
  /*border-color: #36394a;*/
  /*background-color: #eab57a;*/
/*}*/
button:disabled {
	color: #999;
}
.filled:disabled {
  background: #fcca9a;
  color: #999;
}

button:not(:disabled):active {
	background-color: #ffca90;
  color: #1c1f23;
}

button:focus {
	border-color: #666;
}
</style>
<button type={type} class={btn} label={label} on:click>
  <slot/>
</button>

