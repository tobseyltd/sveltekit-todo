import { fetchGlides } from '@api/glides';
import { getUIContext } from '@components/context/UI';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

export interface UserProps {
	nickName: string;
	avatar: string;
}

export interface GlideProps {
	message: string;
	id: string;
	user: UserProps;
	likesCount: number;
	subglidesCount: number;
	date: string;
}

export function createGlideStore() {
	const { addSnackbar } = getUIContext();
	const glides = writable<GlideProps[]>([]);
	const loading = writable(false);

	onMount(loadGlides);

	async function loadGlides() {
		loading.set(true);
		try {
			const { glides: dbGlides } = await fetchGlides();
			glides.set(dbGlides);
		} catch (ERROR: any) {
			addSnackbar({
				message: ERROR.message,
				type: 'error',
				id: uuid()
			});
		} finally {
			loading.set(false);
		}
	}

	function addGlide(glide: GlideProps) {
		glides.update((glideArray) => [...glideArray, glide]);
	}

	return {
		glides: { subscribe: glides.subscribe },
		loading: { subscribe: loading.subscribe },
		addGlide
	};
}
