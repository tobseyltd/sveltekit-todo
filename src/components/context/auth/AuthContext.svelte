<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { firebaseAuth } from '@db/index';
	import { key } from '.';
	import { writable } from 'svelte/store';
	import Loader from '@components/utils/Loader.svelte';

	let isLoading = writable(true);
	let auth = writable({
		isAuthenticated: false,
		user: {}
	});

	setContext(key, {
		auth,
		isLoading
	});

	onMount(listenToAuthChanges);

	function listenToAuthChanges() {
		onAuthStateChanged(firebaseAuth, (user) => {
			if (user) auth.set({ isAuthenticated: true, user });
			else auth.set({ isAuthenticated: false, user: {} });

			$isLoading = false;
		});
	}
</script>

{#if $isLoading}
	<Loader />
{:else}
	<slot />
{/if}
