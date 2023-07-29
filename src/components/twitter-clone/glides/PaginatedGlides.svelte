<script lang="ts">
	import DataLoaderIndicator from '@components/utils/DataLoaderIndicator.svelte';
	import GlidePost from './GlidePost.svelte';

	export let glidePages: any;
	export let loadMoreGlides: () => void;
	export let loading: boolean;

	let lastItemRef: HTMLDivElement;

	function ploadPaginationGlides() {
		if (
			lastItemRef.getBoundingClientRect().top <= window.innerHeight &&
			!loading
		)
			loadMoreGlides();
	}
</script>

<svelte:window on:scroll={ploadPaginationGlides} />

{#each Object.keys(glidePages) as page}
	{#each glidePages[page].glides as glide (glide.id)}
		<GlidePost {glide} />
	{/each}
{/each}
{#if loading}
	<DataLoaderIndicator />
{/if}

<div bind:this={lastItemRef} />
<div class="h-96" />
