<script context="module" lang="ts">
	interface UserProps {
		nickName: string;
		avatar: string;
	}

	export interface GlideProps {
		content: string;
		id: string;
		user: UserProps;
		likesCount: number;
		subglidesCount: number;
		date: () => string;
	}
</script>

<script lang="ts">
	import PostMessenger from '@components/utils/PostMessenger.svelte';
	import GlidePost from '../../../components/twitter-clone/glides/GlidePost.svelte';

	let glides: GlideProps[] = [];
</script>

<PostMessenger />
<div class="h-px my-1 bg-gray-700" />

<!-- GLIDE POST START -->
{#each glides as glide (glide.id)}
	<GlidePost {glide} />
{/each}
<!-- GLIDE POST END -->
