<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { firebaseAuth } from '@db/index';
	import { key } from '.';
	import { writable } from 'svelte/store';
	import { getUser } from '@api/users';
	import Loader from '@components/utils/Loader.svelte';

	onMount(listenToAuthChanges);

	let isLoading = writable(true);
	let auth = writable({
		isAuthenticated: false,
		user: undefined
	});

	setContext(key, {
		auth,
		isLoading,
		updateUser
	});

	function updateUser(userData) {
		auth.update((authState) => ({
			...authState,
			user: { ...authState.user, ...userData }
		}));
	}

	function listenToAuthChanges() {
		onAuthStateChanged(firebaseAuth, async (user) => {
			if (user) {
				const registeredUser = await getUser(user.uid);

				auth.set({ isAuthenticated: true, user: { ...registeredUser } });
			} else auth.set({ isAuthenticated: false, user: undefined });

			$isLoading = false;
		});
	}
</script>

{#if $isLoading}
	<Loader />
{:else}
	<slot />
{/if}
