<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { key } from '.';
	import { onAuthStateChanged } from 'firebase/auth';
	import Loader from '@components/utils/Loader.svelte';
	import { firebaseAuth } from '@db/index';

	let isLoading = writable(true);
	let isAuthenticated = writable(false);

	setContext(key, {
		isAuthenticated,
		isLoading
	});

	onMount(() => {
		onAuthStateChanged(firebaseAuth, (user) => {
			if (user) isAuthenticated.set(true);
			else isAuthenticated.set(false);

			$isLoading = false;
		});
	});
</script>

{#if $isLoading && !$isAuthenticated}
	<Loader />
{:else}
	<slot />
{/if}
