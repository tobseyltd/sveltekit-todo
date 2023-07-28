<script lang="ts">
	import { getAuthContext } from '@components/context/auth';
	import TiImageOutline from 'svelte-icons/ti/TiImageOutline.svelte';

	const { auth } = getAuthContext();

	let glideContent = '';

	// Helper Functions ////////////////////////////
	function createGlide() {
		console.log('new glide');
	}
</script>

<div class="flex-row px-4 py-1 flex-it">
	<div class="mr-4 flex-it">
		<div
			class="w-12 h-12 overflow-visible transition duration-200 cursor-pointer hover:opacity-80"
		>
			<img alt="" class="rounded-full" src={$auth?.user?.avatar} />
		</div>
	</div>
	<!-- MESSENGER START -->
	<div class="flex-grow flex-it">
		<div class="flex-it">
			<textarea
				bind:value={glideContent}
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
					on:click={createGlide}
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
