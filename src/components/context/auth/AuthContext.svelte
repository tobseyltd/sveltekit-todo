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
		user: {}
	});

	setContext(key, {
		auth,
		isLoading,
		updateUser
	});

	function updateUser(userData: any) {
		auth.update((authState) => ({
			...authState,
			user: { ...authState.user, ...userData }
		}));
	}

	function listenToAuthChanges() {
		onAuthStateChanged(firebaseAuth, async (user) => {
			if (user) {
				const registeredUser = await getUser(user.uid);

				auth.set({ isAuthenticated: true, user: <any>{ ...registeredUser } });
			} else auth.set({ isAuthenticated: false, user: {} });

			isLoading.set(false);
		});
	}
</script>

{#if $isLoading}
	<div>
		<Loader />
	</div>
{:else}
	<slot />
{/if}
