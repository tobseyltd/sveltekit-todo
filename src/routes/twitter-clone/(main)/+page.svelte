<script lang="ts">
	import PostMessenger from '@components/utils/PostMessenger.svelte';
	import GlidePost from '../../../components/twitter-clone/glides/GlidePost.svelte';
	import { createGlideStore } from '$lib/stores/createGlideStore';

	const { glides, addGlide } = createGlideStore();
</script>

<PostMessenger onSubmitGlide={addGlide} />
<div class="h-px my-1 bg-gray-700" />

<!-- GLIDE POST START -->
{#each $glides as glide (glide.id)}
	<GlidePost {glide} />
{/each}
<!-- GLIDE POST END -->
