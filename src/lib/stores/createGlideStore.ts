import { fetchGlides, onGlidesSnapshot } from '@api/glides';
import { getUIContext } from '@components/context/UI';
import { onMount } from 'svelte';
import { writable, get } from 'svelte/store';
import { v4 as uuid } from 'uuid';

export interface UserProps {
	uid: any;
	nickName: string;
	avatar: string;
}

export interface GlideProps {
	mediaUrl: any;
	uid: any;
	lookup: any;
	message: string;
	id: string;
	user: UserProps;
	likesCount: number;
	subglidesCount: number;
	date: string;
}

const key = 1;

export function createGlideStore(loggedInUser: anys) {
	const { addSnackbar } = getUIContext();
	const glidePages = writable({ [key]: { glides: [] } });

	const page = writable(key);
	const freshGlides = writable<GlideProps[]>([]);
	const loading = writable(false);

	let lastGlideDoc: any;
	let unsub: any;

	onMount(() => {
		loadGlides();
		subscribeToNewGlides();

		return () => {
			unsubFromNewGlides();
		};
	});

	async function loadGlides() {
		const currentPage = get(page);

		if (currentPage > 1 && !lastGlideDoc) return;
		loading.set(true);

		try {
			const { glides, lastGlideDoc: _lastGlideDoc }: any = await fetchGlides(
				lastGlideDoc,
				loggedInUser
			);

			if (glides.length > 0) {
				glidePages.update((pages) => ({ ...pages, [currentPage]: { glides } }));
				page.update((p) => p + 1);
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

	//function addGlide(glide: GlideProps) {
	//	glidePages.update((pages) => ({
	//		[key]: { glides: [glide, ...pages[key].glides] }
	//	}));
	//}

	function addGlide(glide) {
		pages.update((_pages) => {
			_pages[FIRST_PAGE].glides.unshift(glide);
			return _pages;
		});
	}

	function subscribeToNewGlides() {
		if (loggedInUser.following.length === 0) {
			return;
		}
		unsub = onGlidesSnapshot(loggedInUser, (newGlides) => {
			freshGlides.set(newGlides);
		});
	}

	function unsubFromNewGlides() {
		unsub && unsub();
	}

	function resubToGlides() {
		unsubFromNewGlides();
		subscribeToNewGlides();
	}

	function displayFreshGlides() {
		get(freshGlides).forEach((freshGlide) => {
			addGlide(freshGlide);
		});
		resubToGlides();
		freshGlides.set([]);
	}

	return {
		glidePages: { subscribe: glidePages.subscribe },
		loading: { subscribe: loading.subscribe },
		freshGlides: { subscribe: freshGlides.subscribe },
		addGlide,
		loadGlides,
		subscribeToNewGlides,
		displayFreshGlides
	};
}
