<script lang="ts">
	import PostMessenger from '@components/utils/PostMessenger.svelte';
	import { createGlideStore } from '$lib/stores/createGlideStore';
	import PaginatedGlides from '@components/twitter-clone/glides/PaginatedGlides.svelte';
	import { pageStore } from '$lib/stores/pagestore';
	import { getAuthContext } from '@components/context/auth';

	const { auth }: any = getAuthContext();
	const { glidePages, addGlide, loading, loadGlides } = createGlideStore(
		$auth.user
	);

	pageStore.title.set('Home');
</script>

<PostMessenger onSubmitGlide={addGlide} />
<div class="h-px my-1 bg-gray-700" />

<!-- GLIDE POST START -->

<PaginatedGlides
	glidePages={$glidePages}
	loadMoreGlides={loadGlides}
	loading={$loading}
/>

<!-- GLIDE POST END -->
