<script lang="ts">
	import TiTrash from 'svelte-icons/ti/TiTrash.svelte';
	import TiMessage from 'svelte-icons/ti/TiMessage.svelte';
	import TiHeartOutline from 'svelte-icons/ti/TiHeartOutline.svelte';
	import TiImageOutline from 'svelte-icons/ti/TiImageOutline.svelte';
	import TrendsSidebar from '../../components/twitter-clone/sidebars/TrendsSidebar.svelte';
	import NavSidebar from '../../components/twitter-clone/sidebars/NavSidebar.svelte';
</script>

<!-- HOME PAGE START -->
<div class="flex-row px-4 py-1 flex-it">
	<div class="mr-4 flex-it">
		<div
			class="w-12 h-12 overflow-visible transition duration-200 cursor-pointer hover:opacity-80"
		>
			<img
				alt=""
				class="rounded-full"
				src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
			/>
		</div>
	</div>
	<!-- MESSENGER START -->
	<div class="flex-grow flex-it">
		<div class="flex-it">
			<textarea
				name="content"
				rows="1"
				id="glide"
				class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
				placeholder={"What's new?"}
			/>
		</div>
		<div class="flex-row items-center mb-1 flex-it xs:justify-between">
			<div
				class="mt-3 mr-3 text-white transition cursor-pointer flex-it hover:text-blue-400"
			>
				<div class="upload-btn-wrapper">
					<div class="icon">
						<TiImageOutline />
					</div>
					<input type="file" name="myfile" />
				</div>
			</div>
			<div class="w-32 mt-3 cursor-pointer flex-it">
				<button
					type="button"
					class="px-4 py-2 font-bold text-white transition duration-200 bg-blue-400 rounded-full disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-blue-500 flex-it"
				>
					<div
						class="flex-row items-start justify-center text-sm font-bold text-white flex-it"
					>
						<span>Glide It</span>
					</div>
				</button>
			</div>
		</div>
	</div>
	<!-- MESSENGER END -->
</div>
<div class="h-px my-1 bg-gray-700" />
<!-- GLIDE POST START -->
<div class="p-4 border-gray-700 border-solid flex-it border-b-1">
	<div class="flex-row flex-it">
		<div class="mr-4 flex-it">
			<div
				class="w-12 h-12 overflow-visible transition duration-200 cursor-pointer hover:opacity-80"
			>
				<img
					alt=""
					class="rounded-full"
					src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
				/>
			</div>
		</div>
		<article class="flex-grow flex-shrink cursor-pointer flex-it">
			<div class="justify-center flex-grow mb-1 flex-it">
				<div class="flex-row justify-between w-full flex-it">
					<div>
						<span class="font-bold">Filip99</span>
						<span class="mx-2">&#8226;</span>
						<span class="text-gray-400">2h</span>
					</div>
					<div
						class="text-gray-400 transition cursor-pointer hover:text-red-400"
					>
						<div class="icon">
							<TiTrash />
						</div>
					</div>
				</div>
			</div>
			<div class="flex-row items-center flex-grow-0 mb-2 flex-it">
				<div class="w-full mb-3 mr-3 flex-it">My First Post</div>
			</div>
			<div class="flex-row flex-grow text-gray-400 flex-it">
				<div
					class="flex-row items-center mr-5 transition cursor-pointer flex-it hover:text-blue-400"
				>
					<div class="icon">
						<TiMessage />
					</div>
					<span class="ml-3 text-xs">321</span>
				</div>
				<div
					class="flex-row items-center transition cursor-pointer flex-it hover:text-pink-400"
				>
					<div class="icon">
						<TiHeartOutline />
					</div>
					<span class="ml-3 text-xs">123</span>
				</div>
			</div>
		</article>
	</div>
</div>
<!-- GLIDE POST END -->
<!-- HOME PAGE END -->
