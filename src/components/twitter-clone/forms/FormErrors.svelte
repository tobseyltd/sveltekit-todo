<script>
	// @ts-nocheck

	export let errors;
</script>

{#if errors?.length > 0}
	<div
		class="p-3 pl-3 mt-1 text-xs text-white bg-red-400 rounded-md flex-it grow"
	>
		{#each errors as error}
			<div>{error}</div>
		{/each}
	</div>
{/if}
