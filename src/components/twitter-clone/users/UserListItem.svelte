<script lang="ts">
	export let user: any;
</script>

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
							class="px-4 py-2 font-bold text-white transition duration-200 bg-blue-500 rounded-full sabg-blue-400 disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-blue-700 flex-it"
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
