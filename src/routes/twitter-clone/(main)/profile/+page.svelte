<script lang="ts">
	import { pageStore } from '$lib/stores/pagestore';
	import { getAuthContext } from '@components/context/auth';
	import UserList from '@components/twitter-clone/users/UserList.svelte';

	const { auth }: any = getAuthContext();
	pageStore.title.set('Profile');
</script>

<div class="py-1 flex-it">
	<div class="pb-6 mt-6 border-b border-gray-600">
		<div class="flex flex-row items-center justify-between px-4">
			<img alt="" class="w-16 rounded-full" src={$auth.user?.avatar} />

			<div class="mr-2">
				<div class="text-xl font-bold">{$auth.user?.fullName}</div>
				<div class="text-gray-400">{$auth.user?.nickName}</div>
			</div>

			<div class="mr-2">
				<div class="text-lg font-bold">Followers</div>
				<div class="text-gray-400">{$auth.user?.followersCount}</div>
			</div>

			<div>
				<div class="text-lg font-bold">Following</div>
				<div class="text-gray-400">{$auth.user?.followingCount}</div>
			</div>
		</div>
	</div>
	<!--  -->

	<UserList />
</div>
