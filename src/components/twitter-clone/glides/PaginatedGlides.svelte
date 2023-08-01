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
{:else if glidePages[1].glides.length === 0}
	<div class="flex-it">
		<div class="p-4 mx-4 mt-6 bg-yellow-600 rounded-lg">
			No Glides. Create a new Glide!
		</div>
	</div>
{/if}

<div bind:this={lastItemRef} />
<div class="h-96" />
