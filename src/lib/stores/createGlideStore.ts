import { fetchGlides } from '@api/glides';
import { getUIContext } from '@components/context/UI';
import { onMount } from 'svelte';
import { writable, get } from 'svelte/store';
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

const key: number | string = '';

export function createGlideStore() {
	const { addSnackbar } = getUIContext();
	const glidePages = writable<{ [key: string]: { glides: GlideProps[] } }>({});
	const page = writable(key);
	const loading = writable(false);
	
	let lastGlide: any;

	onMount(loadGlides);

	async function loadGlides() {
		const currentPage = get(page);

		if (Number(currentPage) > 1 && !lastGlide) return;
		loading.set(true);

		try {
			const { glides, lastDocGlide }: any = await fetchGlides(lastGlide);

			if (glides.length > 0) {
				glidePages.update((pages) => ({ ...pages, [currentPage]: { glides } }));
				page.update((p) => Number(p) + 1);
			}

			lastGlide = lastDocGlide;
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
		glidePages.update((pages) => ({
			...pages,
			[key]: { glides: [glide, ...pages[key].glides] }
		}));
	}

	return {
		glidePages: { subscribe: glidePages.subscribe },
		loading: { subscribe: loading.subscribe },
		addGlide,
		loadGlides
	};
}
