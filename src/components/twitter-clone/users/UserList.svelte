<script lang="ts">
	import { fetchUsers } from '@api/users';
	import { getUIContext } from '@components/context/UI';
	import { getAuthContext } from '@components/context/auth';
	import { onMount } from 'svelte';
	import { v4 as uuid4 } from 'uuid';
	import UserListItem from './UserListItem.svelte';
	import DataLoaderIndicator from '@components/utils/DataLoaderIndicator.svelte';

	onMount(loadUsers);

	const { auth }: any = getAuthContext();
	const { addSnackbar } = getUIContext();

	let users: any = [];
	let loading: boolean = true;

	async function loadUsers() {
		try {
			users = await fetchUsers($auth.user);
		} catch (ERROR: any) {
			console.log(ERROR.message);

			addSnackbar({
				message: ERROR.message,
				type: 'error',
				id: uuid4()
			});
		} finally {
			loading = false;
		}
	}
</script>

{#if loading}
	<DataLoaderIndicator />
{:else if users.length > 0}
	{#each users as user (user.uid)}
		<UserListItem {user} />
	{/each}
{/if}
