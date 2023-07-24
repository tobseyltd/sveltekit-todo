<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Props //////////////////////////////////////
	export let textInputValue: string;
	
	// Variables //////////////////////////////////
	let editable: boolean = false;

	// Handler Functions //////////////////////////
	function handleEditable(): void {
		editable = !editable;
	}
</script>

<!-- HTML MARKUP -->

{#if editable}
	<div class="flex-it">
		<!-- svelte-ignore a11y-autofocus -->
		<textarea autofocus bind:value={textInputValue} />
		<button
			on:click={() => {
				handleEditable();
				dispatch('editValue', {
					editedValue: textInputValue
				});
			}}
			class="flex underline">Save</button
		>
	</div>
{:else}
	<button on:click={handleEditable}>
		<slot />
	</button>
{/if}

<!-- STYLING -->

<style>
	textarea {
		border-radius: 5px;
		padding: 5px;
	}
</style>
