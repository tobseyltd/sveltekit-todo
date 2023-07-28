<script lang="ts">
	import PostMessenger from '@components/utils/PostMessenger.svelte';
	import GlidePost from '../../../components/twitter-clone/glides/GlidePost.svelte';
	import { createGlideStore } from '$lib/stores/createGlideStore';
	import DataLoaderIndicator from '@components/utils/DataLoaderIndicator.svelte';

	const { glides, addGlide, loading } = createGlideStore();
</script>

<PostMessenger onSubmitGlide={addGlide} />
<div class="h-px my-1 bg-gray-700" />

<!-- GLIDE POST START -->
{#each $glides as glide (glide.id)}
	<GlidePost {glide} />
{/each}
{#if $loading}
	<DataLoaderIndicator />
{/if}
<!-- GLIDE POST END -->
