import { authenticate } from '@api/auth';

export function createAuthStore(authType: string) {
	async function authUser(form: { email: string; password: string }) {
		const firebaseUser = await authenticate(form, authType);

		return firebaseUser;
	}

	return {
		authUser
	};
}
