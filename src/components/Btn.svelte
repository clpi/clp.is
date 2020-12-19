<script>
  export let label = "";
  export let type = "";
  export let btn = "outline";
</script>
<style>
button {
  height: 40px;
  background-color: #1c1f23;
  padding: 0px 15px 0px 15px;
  outline: 0;
  border-radius: 3px;
  border: 1px solid #1c1f23;
  font-size: 0.9rem;
}
.filled {
	background-color: #91ffaa;
  color: #1c1f23;
  border: 1px solid #1c1f23;
  text-shadow: none;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
  /* box-shadow: 0px 0px 8px #000; */
}
.raised {
  background-color: rgba(255,255,255,0.1);
  /*background-image: linear-gradient(rgba(255,255,255,0.04), rgba(0,0,0,0.01));*/
  box-shadow: 0px 1px 1px #0a0a0a;
  border: none;
  border-top: 1px solid #5a5a5a;
  border-bottom: 2px solid rgba(0,0,0,0);
  text-shadow: 0px -2px 0.5px #000;
  color: #91ffaa;
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
  background-color: #91ffaa;
  color: #1c1f23;
  text-shadow: none;
}
.embed-fill {

}
.outline {
	background-color: rgba(255,255,255,0.1);
  color: #91ffaa;
  border-top: 1px ridge #91ffaa;
  border-bottom: 1px solid rgba(0,0,0,0.6);
  padding: 2px 16px 2px 16px;
  border-radius: 0px;
  /* box-shadow: 1px 2px 2px rgba(0,0,0,0.1); */
}
.embed {
  background-color: #333;
  box-shadow: 0px -1px 1px #000;
  border: none;
  border-bottom: 1px solid #555;
  text-shadow: 0px 1px 0px #000;
  border-top: 1px solid rgba(0,0,0,0);
  /*color: #91ddff;*/
  color: #91ffaa;
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
  color: #81de89;
  background-color: rgba(255,255,255,0.1);
  /*background-image: rgba(255,255,255,100);*/
  outline: 0;
  transition: background-color 0.1s, box-shadow 0.2s;
}
.filled:hover {
  color: #36394a;
  border-color: #36394a;
  background-color: #91ee99;
}
.filled:active {
  color: #211f36;
  background-color: #b1ffcc;
  box-shadow: 0px 0px 8px #000;
}
.outline:hover {
  color: #36394a;
  border-color: #36394a;
  background-color: #91ee99;
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
  background: #91ffaa;
  color: #999;
}

button:not(:disabled):active {
	background-color: #91ffaa;
  color: #1c1f23;
}

button:focus {
	border-color: #666;
}
</style>
<button type={type} class={btn} label={label} on:click>
  <slot/>
</button>

