<script lang="ts">
	import { page } from '$app/stores';
	import { createGlideIdStore } from '$lib/stores/createGlideIdStore';
	import { createSubglideGlideStore } from '$lib/stores/createSubGlideStore';
	import { pageStore } from '$lib/stores/pagestore';
	import GlidePost from '@components/twitter-clone/glides/GlidePost.svelte';
	import PaginatedGlides from '@components/twitter-clone/glides/PaginatedGlides.svelte';
	import BackButton from '@components/utils/BackButton.svelte';
	import DataLoaderIndicator from '@components/utils/DataLoaderIndicator.svelte';
	import PostMessenger from '@components/utils/PostMessenger.svelte';
	import { onMount } from 'svelte';

	const { glide, loading, getGlide, incrementSubglidesCount }: any =
		createGlideIdStore($page.params.uid, $page.params.id);

	const {
		pages,
		loading: loadingSubGlides,
		loadGlides
	} = createSubglideGlideStore();

	pageStore.title.set(BackButton);

	onMount(async () => {
		const _glide = await getGlide();
		loadGlides(_glide.lookup);
	});

	$: {
		console.log($pages);
	}
</script>

{#if $loading}
	<DataLoaderIndicator />
{:else if $glide}
	<GlidePost glide={$glide} />
	<div class="p-4 border-b-2 border-gray-700 border-solid">
		<div class="mb-2 text-sm italic text-gray-300 underline">
			Answering to: {$glide.user.nickName}
		</div>
		<PostMessenger
			showAvatar={false}
			onSubmitGlide={() => {
				incrementSubglidesCount();
			}}
			glideLookup={$glide.lookup}
		/>
	</div>
	<PaginatedGlides
		glidePages={$pages}
		loading={$loadingSubGlides}
		loadMoreGlides={() => {}}
	/>
{/if}
