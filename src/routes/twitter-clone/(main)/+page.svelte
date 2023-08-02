<script lang="ts">
	import PostMessenger from '@components/utils/PostMessenger.svelte';
	import { createGlideStore } from '$lib/stores/createGlideStore';
	import PaginatedGlides from '@components/twitter-clone/glides/PaginatedGlides.svelte';
	import { pageStore } from '$lib/stores/pagestore';
	import { getAuthContext } from '@components/context/auth';
	import UserPopupPortal from '@components/utils/UserPopupPortal.svelte';

	const { auth }: any = getAuthContext();
	const {
		glidePages,
		addGlide,
		loading,
		loadGlides,
		freshGlides,
		displayFreshGlides
	} = createGlideStore($auth.user);

	pageStore.title.set('Home');
</script>

<PostMessenger onSubmitGlide={addGlide} />
<div class="h-px my-1 bg-gray-700" />

{#if $freshGlides.length >= 1}
	<UserPopupPortal>
		<div class="fixed -translate-x-1/2 top-2 z-100 left-2/4">
			<button
				on:click={displayFreshGlides}
				type="button"
				class="px-4 py-2 font-bold text-white transition duration-200 bg-blue-400 rounded-full disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-blue-500 flex-it"
			>
				<div
					class="flex-row items-start justify-center text-sm font-bold text-white flex-it"
				>
					<span>Read New Glides</span>
				</div>
			</button>
		</div>
	</UserPopupPortal>
{/if}

<!-- GLIDE POST START -->

<PaginatedGlides
	glidePages={$glidePages}
	loadMoreGlides={loadGlides}
	loading={$loading}
/>

<!-- GLIDE POST END -->
