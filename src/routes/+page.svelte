<script>
	import TiHomeOutline from 'svelte-icons/ti/TiHomeOutline.svelte';
	import TiGroupOutline from 'svelte-icons/ti/TiGroupOutline.svelte';
	import TiCogOutline from 'svelte-icons/ti/TiCogOutline.svelte';
	import TiBell from 'svelte-icons/ti/TiBell.svelte';
	import TiZoomOutline from 'svelte-icons/ti/TiZoomOutline.svelte';
</script>

<div class="flex justify-center w-full text-gray-100 bg-gray-900">
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
							<a class="items-start flex-grow w-full flex-it" href="/">
								<div
									class="flex-row items-center justify-center p-3 transition duration-200 flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl"
								>
									<div class="flex-it">
										<div class="icon">
											<TiHomeOutline />
										</div>
									</div>
									<div class="hidden mx-4 text-2xl truncate xl:block">
										<span class="truncate">Home</span>
									</div>
								</div>
							</a>
							<a class="items-start flex-grow w-full flex-it" href="/">
								<div
									class="flex-row items-center justify-center p-3 transition duration-200 flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl"
								>
									<div class="flex-it">
										<div class="icon">
											<TiGroupOutline />
										</div>
									</div>
									<div class="hidden mx-4 text-2xl truncate xl:block">
										<span class="truncate">Profile</span>
									</div>
								</div>
							</a>
							<a class="items-start flex-grow w-full flex-it" href="/">
								<div
									class="flex-row items-center justify-center p-3 transition duration-200 flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl"
								>
									<div class="flex-it">
										<div class="icon">
											<TiCogOutline />
										</div>
									</div>
									<div class="hidden mx-4 text-2xl truncate xl:block">
										<span class="truncate">More</span>
									</div>
								</div>
							</a>
							<a class="items-start flex-grow w-full flex-it" href="/">
								<div
									class="flex-row items-center justify-center p-3 transition duration-200 flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl"
								>
									<div class="flex-it">
										<div class="icon">
											<TiBell />
										</div>
									</div>
									<div class="hidden mx-4 text-2xl truncate xl:block">
										<span class="truncate">Notification</span>
									</div>
								</div>
							</a>
							<a class="items-start flex-grow w-full flex-it" href="/">
								<div
									class="flex-row items-center justify-center p-3 transition duration-200 flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl"
								>
									<div class="flex-it">
										<div class="icon">
											<TiZoomOutline />
										</div>
									</div>
									<div class="hidden mx-4 text-2xl truncate xl:block">
										<span class="truncate">Discover</span>
									</div>
								</div>
							</a>
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
					<!-- <UserSettingPopup /> -->
				</div>
			</div>
		</div>
	</div>
	<div class="w-3/12 p-4 border-gray-700 border-x flex-it">
		<div class="sticky top-0 z-10">
			<div
				class="z-10 p-4 text-sm font-bold flex-it h-14 xl:text-xl backdrop-blur-md bg-opacity-70"
			>
				Home
			</div>
			<!-- Children -->
		</div>
	</div>
	<!-- TRENDS SIDEBAR START -->
	<div class="mt-5 ml-5 bg-gray-800 w-80 flex-it rounded-2xl">
		<div class="p-4 flex-it">
			<span class="text-xl font-bold">Trends</span>
		</div>
		<div
			class="p-4 transition duration-200 cursor-pointer flex-it hover:bg-gray-700"
		>
			<div class="flex-it">
				<span class="text-sm text-gray-400"> Trends in Europe </span>
				<span class="text-lg font-bold">Sports</span>
				<span class="text-sm text-gray-400">10 000 glides</span>
			</div>
		</div>
		<div
			class="p-4 transition duration-200 cursor-pointer flex-it hover:bg-gray-700"
		>
			<div class="flex-it">
				<span class="text-sm text-gray-400"> Trends in Europe </span>
				<span class="text-lg font-bold">Sports</span>
				<span class="text-sm text-gray-400">10 000 glides</span>
			</div>
		</div>
		<div
			class="p-4 transition duration-200 cursor-pointer flex-it hover:bg-gray-700"
		>
			<div class="flex-it">
				<span class="text-sm text-gray-400"> Trends in Europe </span>
				<span class="text-lg font-bold">Sports</span>
				<span class="text-sm text-gray-400">10 000 glides</span>
			</div>
		</div>
		<div
			class="p-4 transition duration-200 cursor-pointer flex-it hover:bg-gray-700"
		>
			<div class="flex-it">
				<span class="text-sm text-gray-400"> Trends in Europe </span>
				<span class="text-lg font-bold">Sports</span>
				<span class="text-sm text-gray-400">10 000 glides</span>
			</div>
		</div>
		<div
			class="p-4 transition duration-200 cursor-pointer flex-it hover:bg-gray-700"
		>
			<div class="flex-it">
				<span class="text-sm text-gray-400"> Trends in Europe </span>
				<span class="text-lg font-bold">Sports</span>
				<span class="text-sm text-gray-400">10 000 glides</span>
			</div>
		</div>
		<div
			class="p-4 transition duration-200 cursor-pointer flex-it hover:bg-gray-700"
		>
			<div class="flex-it">
				<span class="text-sm text-gray-400"> Trends in Europe </span>
				<span class="text-lg font-bold">Sports</span>
				<span class="text-sm text-gray-400">10 000 glides</span>
			</div>
		</div>
	</div>
	<!-- TRENDS SIDEBAR END -->
</div>
