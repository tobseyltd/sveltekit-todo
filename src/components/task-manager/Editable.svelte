<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let textInputValue: string;

	let editable: boolean = false;

	function handleEditable(): void {
		editable = !editable;
	}
</script>

{#if editable}
	<div class="flex-it">
		<!-- svelte-ignore a11y-autofocus -->
		<textarea autofocus bind:value={textInputValue} />
		<button
			on:click={() => {
				handleEditable();
				dispatch('editedTask', {
                    editedTaskValue: textInputValue});
			}}
			class="flex underline">Save Task</button
		>
	</div>
{:else}
	<button on:click={handleEditable}>
		<slot />
	</button>
{/if}

<style>
	textarea {
		border-radius: 5px;
		padding: 5px;
	}
</style>
