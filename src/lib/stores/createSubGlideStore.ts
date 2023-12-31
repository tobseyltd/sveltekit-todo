import { fetchSubglides } from '@api/glides';
import { getUIContext } from '@components/context/UI';
import { writable, get } from 'svelte/store';
import { v4 as uuid } from 'uuid';

const key = 1;

export function createSubglideGlideStore() {
	const { addSnackbar } = getUIContext();
	const pages = writable({ [key]: { glides: [] } });

	const page = writable(key);
	const loading = writable(false);

	let lastGlideDoc = null;

	async function loadGlides(glideLookup) {
		const _page = get(page);

		if (typeof lastGlideDoc === 'undefined') {
			return;
		}

		loading.set(true);
		try {
			const { glides, lastGlideDoc: _lastGlideDoc } = await fetchSubglides(
				lastGlideDoc,
				glideLookup
			);

			if (glides.length > 0) {
				pages.update((_pages) => ({ ..._pages, [_page]: { glides } }));
				page.update((_page) => _page + 1);
			}

			lastGlideDoc = _lastGlideDoc;
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
		pages.update((pages) => ({
			[key]: { glides: [glide, ...pages[key].glides] }
		}));
	}

	function resetPagination() {
		pages.update((_pages) => {
			for (let i = 1; i <= Object.keys(_pages).length; i++) {
				_pages[i] = {
					glides: []
				};
			}
			return _pages;
		});

		lastGlideDoc = null;
		page.set(1);
	}

	return {
		pages: { subscribe: pages.subscribe },
		loading: { subscribe: loading.subscribe },
		loadGlides,
		addGlide,
		resetPagination
	};
}
