<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { key } from '.';

	let snackbars = writable<Object[]>([]);

	let isXl = writable(false);
	let isLg = writable(false);

	let innerWidth: number;

	$: {
		$isXl = innerWidth > 1280;
		$isLg = innerWidth > 1024;
	}

	function addSnackbar(snackbarData: {
		message: string;
		type: string;
		id: number;
	}) {
		snackbars.update((snackbarArray) => [...snackbarArray, snackbarData]);
	}

	const removeSnackbar = (id: string) => () => {
		snackbars.update((snackbarArray) =>
			snackbarArray.filter((snackbar: any) => snackbar.id !== id)
		);
	};

	setContext(key, {
		isXl,
		isLg,
		snackbars,
		addSnackbar,
		removeSnackbar
	});
</script>

<svelte:window bind:innerWidth />
<slot />
