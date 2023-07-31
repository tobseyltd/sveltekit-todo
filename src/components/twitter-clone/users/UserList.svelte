<script lang="ts">
	import * as api from '@api/users';
	import { getUIContext } from '@components/context/UI';
	import { getAuthContext } from '@components/context/auth';
	import { onMount } from 'svelte';
	import { v4 as uuid4 } from 'uuid';
	import UserListItem from './UserListItem.svelte';
	import DataLoaderIndicator from '@components/utils/DataLoaderIndicator.svelte';

	onMount(loadUsers);

	const { auth, updateUser }: any = getAuthContext();
	const { addSnackbar } = getUIContext();

	let users: any = [];
	let loading: boolean = true;
	let followState: boolean = false;

	async function loadUsers() {
		try {
			users = await api.fetchUsers($auth.user);
		} catch (ERROR: any) {
			addSnackbar({
				message: ERROR.message,
				type: 'error',
				id: uuid4()
			});
		} finally {
			loading = false;
		}
	}

	async function followUser(followingUser: any) {
		followState = true;
		try {
			if (
				$auth.user.following.filter(
					(following: any) => following.id === followingUser.uid
				).length > 0
			) {
				throw new Error('You already follow this user!');
			}
			const followingRef = await api.followUser(
				$auth.user.uid,
				followingUser.uid
			);

			updateUser({
				followingCount: $auth.user.followingCount + 1,
				following: [followingRef, ...$auth.user.following]
			});

			users = users.filter((user: any) => {
				return user.uid !== followingUser.uid;
			});

			addSnackbar({
				message: `You started following ${followingUser.nickName}`,
				type: 'success',
				id: uuid4()
			});
		} catch (ERROR: any) {
			addSnackbar({
				message: ERROR.message,
				type: 'error',
				id: uuid4()
			});
		} finally {
			followState = false;
		}
	}
</script>

{#if loading}
	<DataLoaderIndicator />
{:else if users.length > 0}
	{#each users as user (user.uid)}
		<UserListItem
			on:followClick={(EVENT) => followUser(EVENT.detail)}
			{user}
			{followState}
		/>
	{/each}
{/if}
