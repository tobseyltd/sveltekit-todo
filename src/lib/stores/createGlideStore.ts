import { writable } from 'svelte/store';

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
	date: any
}

export function createGlideStore() {
	const glides = writable<GlideProps[]>([]);
	console.log(glides);

	function addGlide(glide: GlideProps) {
		glides.update((glideArray) => [...glideArray, glide]);
	}

	return {
		glides: { subscribe: glides.subscribe },
		addGlide
	};
}
