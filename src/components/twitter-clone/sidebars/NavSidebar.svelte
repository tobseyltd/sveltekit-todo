<script lang="ts">
	import TiSocialFlickr from 'svelte-icons/ti/TiSocialFlickr.svelte';

	import { navLinks } from './navLinks';
	import UserPopup from '@components/utils/UserPopup.svelte';
</script>

<div class="w-20 xl:w-80 flex-it">
	<div class="fixed top-0 h-full mt-3 flex-it">
		<div
			class="justify-between w-20 h-full px-3 overflow-y-auto flex-it xl:w-80"
		>
			<div class="items-start flex-it">
				<div
					class="p-3 pt-4 pb-0 text-sm font-bold transition duration-200 xl:pb-3 xl:text-2xl hover:opacity-80"
				>
					<a href="/">
						<h1>Glider</h1>
					</a>
				</div>
				<div class="w-full my-1 flex-it">
					<nav class="items-start flex-it">
						{#each navLinks as navLink}
							<a
								class="items-start flex-grow w-full flex-it"
								href={navLink.href}
							>
								<div
									class="flex-row items-center justify-center p-3 transition duration-200 flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl"
								>
									<div class="flex-it">
										<div class="icon">
											<svelte:component this={navLink.icon} />
										</div>
									</div>
									<div class="hidden mx-4 text-2xl truncate xl:block">
										<span class="truncate">{navLink.name}</span>
									</div>
								</div>
							</a>
						{/each}
					</nav>
				</div>
				<!-- GLIDER SEND-MESSAGE BUTTON -->
				<div class="w-10/12 my-1 cursor-pointer flex-it">
					<div
						class="px-4 py-2 font-bold text-white transition bg-blue-400 rounded-full hover:bg-blue-500 flex-it"
					>
						<div
							class="flex-row items-start justify-center text-xl font-bold text-white truncate duration-200 flex-it"
						>
							<div>Glide It</div>
						</div>
					</div>
				</div>
			</div>
			<!-- PROFILE MENU -->
			<div class="my-3 flex-it hover:cursor-pointer">
				<UserPopup>
					<!-- <UserSettingPopup /> -->
					<div
						class="flex-row items-center p-3 transition duration-200 cursor-pointer flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl"
					>
						<div class="flex-it">
							<div class="w-10 h-10 overflow-visible">
								<img
									alt=""
									class="rounded-full"
									src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
								/>
							</div>
						</div>
						<div
							class="flex-row items-center justify-between flex-grow hidden flex-it xl:flex"
						>
							<div class="mx-3 font-bold flex-it">Filip99</div>
							<div class="flex-it">
								<div class="icon">
									<TiSocialFlickr />
								</div>
								<!-- <FiMoreHorizontal /> -->
							</div>
						</div>
					</div>
				</UserPopup>
			</div>
		</div>
	</div>
</div>
