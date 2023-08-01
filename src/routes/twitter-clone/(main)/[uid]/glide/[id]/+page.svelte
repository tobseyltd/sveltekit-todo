<script lang="ts">
	import { page } from '$app/stores';
	import { createGlideIdStore } from '$lib/stores/createGlideIdStore';
	import GlidePost from '@components/twitter-clone/glides/GlidePost.svelte';
	import DataLoaderIndicator from '@components/utils/DataLoaderIndicator.svelte';
	import PostMessenger from '@components/utils/PostMessenger.svelte';

	const { glide, loading } = createGlideIdStore(
		$page.params.uid,
		$page.params.id
	);
</script>

{#if $loading}
	<DataLoaderIndicator />
{:else if $glide}
	<GlidePost glide={$glide} />
	<div class="p-4 border-b-2 border-gray-700 border-solid">
		<div class="mb-2 text-sm italic text-gray-300 underline">
			Answering to: {$glide.user.nickName}
		</div>
		<PostMessenger showAvatar={false} onSubmitGlide={() => {}} />
	</div>
{/if}
