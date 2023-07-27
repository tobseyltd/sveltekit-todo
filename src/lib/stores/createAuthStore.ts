import { authenticate } from '@api/auth';
import { writable } from 'svelte/store';

export function createAuthStore(authType: string) {
	const loading = writable(false);

	async function authUser(form: { email: string; password: string }) {
		loading.set(true);

		try {
			await authenticate(form, authType);
		} catch (ERROR: any) {
			console.log(ERROR.message);
			loading.set(false);
		}
	}

	return {
		authUser,
		loading: { subscribe: loading.subscribe }
	};
}
