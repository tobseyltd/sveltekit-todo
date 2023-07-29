<script>
	import { getAuthContext } from '@components/context/auth';
	const users = [
		{ avatar: 'https://thrangra.sirv.com/Avatar1.png', nickName: 'Felipe' },
		{ avatar: 'https://thrangra.sirv.com/Avatar2.png', nickName: 'Anna' }
	];
	const { auth } = getAuthContext();
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
	{#each users as user (user.avatar)}
		<div class="p-4 flex-it">
			<div class="flex-row flex-it">
				<div class="mr-4 flex-it">
					<div
						class="w-12 h-12 overflow-visible transition duration-200 cursor-pointer hover:opacity-80"
					>
						<img alt="" class="rounded-full" src={user.avatar} />
					</div>
				</div>
				<article class="flex-grow flex-shrink flex-it">
					<div class="justify-center flex-grow mb-1 flex-it">
						<div class="flex-row justify-between w-full flex-it">
							<div class="justify-center flex-it">
								<span class="font-bold">{user.nickName}</span>
							</div>
							<div class="w-32 mt-3 cursor-pointer flex-it">
								<button
									type="button"
									class="px-4 py-2 font-bold text-white transition duration-200 bg-blue-400 rounded-full disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-blue-500 flex-it"
								>
									<div
										class="flex-row items-start justify-center text-sm font-bold text-white flex-it"
									>
										<span>Follow</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	{/each}
</div>
