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
    width: 60px;
    height: 34px;
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
    background-color: #333;
    box-shadow: 0px -1px 1px #000;
    border-bottom: 1px solid #555;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #1c1f23;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #ffca90;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #ffca90;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

</style>

 <label class="switch">
   <input type="checkbox" bind:checked={toggled}>
  <span class="slider"></span>
</label>
