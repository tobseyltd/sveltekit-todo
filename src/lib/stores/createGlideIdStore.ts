import { fetchGlide } from '@api/glides';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import type GlideProps from './createGlideStore';

export function createGlideIdStore(uid, id) {
	const glide = writable<GlideProps>({});
	const loading = writable(true);

	onMount(async () => {
		const _glides = await fetchGlide(uid, id);
		loading.set(false);
		glide.set(_glides);
	});

	return {
		glide: {
			subscribe: glide.subscribe
		},
		loading: {
			subscribe: loading.subscribe
		}
	};
}
