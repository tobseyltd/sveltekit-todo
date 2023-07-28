<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { firebaseAuth } from '@db/index';
	import { key } from '.';
	import { writable } from 'svelte/store';
	import { getUser } from '@api/users';
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
		onAuthStateChanged(firebaseAuth, async (user) => {
			if (user) {
				const registeredUser = await getUser(user.uid);

				auth.set({ isAuthenticated: true, user: { registeredUser } });
			} else auth.set({ isAuthenticated: false, user: {} });

			$isLoading = false;
		});
	}
</script>

{#if $isLoading}
	<Loader />
{:else}
	<slot />
{/if}
