<script lang="ts">
	import TiArrowSyncOutline from 'svelte-icons/ti/TiArrowSyncOutline.svelte';
	export let size = 27;
</script>

<div class="items-center justify-center h-full text-white flex-it">
	<div class="rotating">
		<div class="icon" style="width: {size}px; height: {size}px">
			<TiArrowSyncOutline />
		</div>
	</div>
</div>
