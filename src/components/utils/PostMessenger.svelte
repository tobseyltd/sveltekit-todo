<script lang="ts">
	import { postGlide } from '@api/glides';
	import { getUIContext } from '@components/context/UI';
	import { getAuthContext } from '@components/context/auth';
	import TiImageOutline from 'svelte-icons/ti/TiImageOutline.svelte';
	import { v4 as uuidv4 } from 'uuid';

	export let onSubmitGlide: (data: any) => void;

	const { auth }: any = getAuthContext();
	const { addSnackbar } = getUIContext();

	let loading = false;
	let glideContent = { message: '' };

	// Helper Functions ////////////////////////////
	async function submitGlide() {
		loading = true;

		const glideData = {
			...glideContent,
			uid: $auth?.user?.uid
		};

		try {
			const glide = await postGlide(glideData);

			const user = {
				nickName: $auth.user.nickName,
				avatar: $auth.user.avatar
			};

			onSubmitGlide({ ...glide, user });

			addSnackbar({
				message: 'Glide added',
				type: 'success',
				id: uuidv4()
			});
			glideContent.message = '';
		} catch (ERROR: any) {
			addSnackbar({
				message: ERROR.message,
				type: 'error',
				id: uuidv4()
			});
		} finally {
			loading = false;
		}
	}

	function autoTextSize(EVENT: any) {
		const element = EVENT.target;
		element.style.height = '0px';

		const { scrollHeight } = element;
		element.style.height = scrollHeight + 'px';
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
				on:input={autoTextSize}
				bind:value={glideContent.message}
				name="content"
				rows="1"
				id="glide"
				class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
				placeholder={"What's new?"}
			/>
		</div>
		<div class="flex-row items-center justify-between mb-1 flex-it">
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
					disabled={loading || glideContent.message === ''}
					on:click={submitGlide}
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
