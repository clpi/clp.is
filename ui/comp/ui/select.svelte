<script lang="ts">
  export let options = [];
</script>
<style>
  .custom-select {
  position: relative;
  font-family: Arial;
}

  .custom-select select {
    display: none; /*hide original SELECT element: */
  }
</style>
<div class="custom-select" style="width:200px;">
  <select>
		{#each options as opt}
			<option value={opt.val}>
				{opt.text}
			</option>
		{/each}
  </select>
</div>
