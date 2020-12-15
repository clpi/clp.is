<script lang="ts">
  import Select from 'svelte-select';
  import { user, isLoggedIn } from '../../util/store.js';
  import { goto } from '@sveltech/routify';
  import Nav from '../../comp/ui/nav.svelte';
  import Btn from '../../comp/ui/btn.svelte';
  let itmIn = {
    name: "",
    permission: "",
  }
  const p = [ "private", "mutual", "invite", "public" ];
  let permis = [
		{ value: "private", label: `Private` },
		{ value: "mutual", label: `Mutuals only` },
		{ value: "invite", label: `Invite only` },
		{ value: "public", label: `Public` },
	];
  const handleSubmit = async () => {
    
  }
</script>

<style>
  .btns {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    display:inline-flex;
    display:table-row;
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
  .sel {
    margin: auto;
    --border: 1px solid #da7;
    --borderRadius: 10px;
    --background: #333;
    --labelShadow: 1px 1px 1px #000;
    --boxShadow: 1px 2px 1px #000;
    --borderFocusColor: #fc9;
    max-width: 300px;
    --placeholderColor: #da7;
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
  <Btn btn="raised square" on:click={() => {$goto('/home')}}>Back</Btn
  ><Btn btn="raised fill square">Index</Btn
    ><Btn btn="raised square">Fore</Btn>
</div>
<br/><br/>
<h1>Add itmord</h1>
<br/><br/>
<form on:submit|preventDefault={handleSubmit}>

  <p>Item name: {itmIn.name}</p>
  <input bind:value={itmIn.name}/>
  <br/>
  <p>Permissions:</p>
	<select value={itmIn.permission}>
		{#each permis as perm}
			<option value={perm.value}>
				{perm.label}
			</option>
		{/each}
	</select>
  <div class="sel"><Select {permis} bind={itmIn.permission}></Select></div>
  <br/><br/>
  <Btn btn="raised">Clear</Btn>
  <Btn type="submit" btn="raised">Submit</Btn>
</form>

