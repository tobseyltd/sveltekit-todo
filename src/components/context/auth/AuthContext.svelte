<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { key } from '.';
	import Loader from '@components/utils/Loader.svelte';

	let isLoading = writable(true);
	let isAuthenticated = writable(false, (set) => {
		setTimeout(() => {
			set(false);
			$isLoading = false;
			// isLoading.set(false)
		}, 1000);
	});

	setContext(key, {
		isAuthenticated,
		isLoading
	});
</script>

{#if $isLoading && !$isAuthenticated}
	<Loader />
{:else}
	<slot />
{/if}
