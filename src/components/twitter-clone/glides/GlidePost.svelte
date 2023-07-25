<script lang="ts">
	import TiHeartOutline from 'svelte-icons/ti/TiHeartOutline.svelte';
	import TiMessage from 'svelte-icons/ti/TiMessage.svelte';
	import TiTrash from 'svelte-icons/ti/TiTrash.svelte';
	import type { GlideProps } from '../../../routes/twitter-clone/+page.svelte';

	export let glide: GlideProps;
</script>

<div class="p-4 border-b border-gray-700 border-solid flex-it">
	<div class="flex-row flex-it">
		<div class="mr-4 flex-it">
			<div
				class="w-12 h-12 overflow-visible transition duration-200 cursor-pointer hover:opacity-80"
			>
				<img alt="" class="rounded-full" src={glide.user.avatar} />
			</div>
		</div>
		<article class="flex-grow flex-shrink cursor-pointer flex-it">
			<div class="justify-center flex-grow mb-1 flex-it">
				<div class="flex-row justify-between w-full flex-it">
					<div>
						<span class="font-bold">{glide.user.nickName}</span>
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
				<div class="w-full mb-3 mr-3 flex-it">{glide.content}</div>
			</div>
			<div class="flex-row flex-grow text-gray-400 flex-it">
				<div
					class="flex-row items-center mr-5 transition cursor-pointer flex-it hover:text-blue-400"
				>
					<div class="icon">
						<TiMessage />
					</div>
					<span class="ml-3 text-xs">{glide.subglidesCount}</span>
				</div>
				<div
					class="flex-row items-center transition cursor-pointer flex-it hover:text-pink-400"
				>
					<div class="icon">
						<TiHeartOutline />
					</div>
					<span class="ml-3 text-xs">{glide.likesCount}</span>
				</div>
			</div>
		</article>
	</div>
</div>
