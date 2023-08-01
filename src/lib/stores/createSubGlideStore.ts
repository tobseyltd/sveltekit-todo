import { fetchSubglides } from '@api/glides';
import { getUIContext } from '@components/context/UI';
import { writable, get } from 'svelte/store';
import { v4 as uuid } from 'uuid';
import type { GlideProps } from './createGlideStore';

const key: number | string = '';

export function createSubglideGlideStore() {
	const { addSnackbar } = getUIContext();
	const pages = writable<{ [key: string]: { glides: GlideProps[] } }>({});
	const page = writable(key);
	const loading = writable(false);

	let lastGlide: any;

	async function loadGlides() {
		const currentPage = get(page);

		if (Number(currentPage) > 1 && !lastGlide) return;
		loading.set(true);

		try {
			const { glides, lastDocGlide }: any = await fetchSubglides(lastGlide);

			if (glides.length > 0) {
				pages.update((_pages) => ({ ..._pages, [currentPage]: { glides } }));
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

	return {
		pages: { subscribe: pages.subscribe },
		loading: { subscribe: loading.subscribe },
		loadGlides
	};
}
