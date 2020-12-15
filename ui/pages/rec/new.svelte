<script lang="ts">
  import { user, isLoggedIn } from '../../util/store.js';
  import { goto } from '@sveltech/routify';
  import Nav from '../../comp/ui/nav.svelte';
  import Btn from '../../comp/ui/btn.svelte';
  let recIn = {
    name: "",
    permission: "",
  }
  let permis = [
		{ val: "private", text: `Private` },
		{ val: "mutual", text: `Mutuals only` },
		{ val: "invite", text: `Invite only` },
		{ val: "public", text: `Public` },
	];
  const handleSubmit = async () => {
    
  }
</script>

<style>
  .btns {
    margin: 0px -4px 0px -4px;
    padding: 0px -4px 0px -4px;
    letter-spacing: 0rem;
    padding: 0px 0px 0px 0px;
    display:inline-block;
    position: relative;
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
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;       /* Remove default arrow */
    background-color: #333;
    /*background: url() 96% / 15% no-repeat #EEE;*/
    background: #000 96% / 15% no-repeat #EEE;

    color: #fc9;
    border: 1px solid #fc9;
    padding: 10px 20px 10px 20px;
  }
  option {
    background: #333;
  }
</style>

<Nav/>
<div class="btns">
  <Btn btn="raised square" on:click={() => {$goto('/home')}}>Back</Btn>
  <Btn btn="raised square">Index</Btn>
  <Btn btn="raised square">Fore</Btn>
</div>
<br/><br/>
<h1>Add Record</h1>
<br/><br/>
<form on:submit|preventDefault={handleSubmit}>

  <p>Record name: {recIn.name}</p>
  <input bind:value={recIn.name}/>
  <br/>
  <p>Permissions:</p>
	<select value={recIn.permission}>
		{#each permis as perm}
			<option value={perm.val}>
				{perm.text}
			</option>
		{/each}
	</select>
  <br/><br/>
  <Btn btn="raised">Clear</Btn>
  <Btn type="submit" btn="raised">Submit</Btn>
</form>

