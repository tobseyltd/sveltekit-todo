import { authenticate } from '@api/auth';
import { getUIContext } from '@components/context/UI';
import { writable } from 'svelte/store';
import { v4 as uuid4 } from 'uuid';

export function createAuthStore(authType: string) {
	const { addSnackbar } = getUIContext();
	const loading = writable(false);

	async function authUser(form: { email: string; password: string }) {
		loading.set(true);

		try {
			await authenticate(form, authType);
			addSnackbar({
				message: 'Welcome back!',
				type: 'success',
				id: uuid4()
			});
		} catch (ERROR: any) {
			addSnackbar({
				message: ERROR.message,
				type: 'error',
				id: uuid4()
			});
			loading.set(false);
		}
	}

	return {
		authUser,
		loading: { subscribe: loading.subscribe }
	};
}
