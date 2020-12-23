<script>
  import { createEventDispatcher } from 'svelte';
  let toggled = false;
	const dispatch = createEventDispatcher();
  const toggle = () => {
		dispatch('toggled', {
			toggled: !toggled,
		});
	}
</script>
<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.06);
    box-shadow: 0px -1px 1px #000;
    border-bottom: 1px solid #555;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 17px;
    left: 3px;
    bottom: 2px;
    background-color: rgba(0,0,0,0.4);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #99ffa9;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }

</style>

 <label class="switch">
   <input type="checkbox" bind:checked={toggled}>
  <span class="slider"></span>
</label>
