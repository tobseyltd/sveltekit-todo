<script>
	import { getUIContext } from '@components/context/UI';
	import SnackbarItem from './SnackbarItem.svelte';
	import { flip } from 'svelte/animate';

	const { snackbars, removeSnackbar } = getUIContext();
</script>

<div class="fixed top-0 right-0 z-50 w-full p-4 md:max-w-xs">
	<ul class="flex flex-col space-y-2">
		{#each $snackbars as snackbar (snackbar.id)}
			<div animate:flip={{ duration: 300 }}>
				<SnackbarItem
					onClose={removeSnackbar(snackbar.id)}
					message={snackbar.message}
					type={snackbar.type}
				/>
			</div>
		{/each}
	</ul>
</div>
