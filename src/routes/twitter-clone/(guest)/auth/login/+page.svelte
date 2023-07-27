<script>
	import { createAuthStore } from '$lib/stores/createAuthStore';
	import AuthLayout from '@components/layouts/AuthLayout.svelte';
	import LoginForm from '@components/twitter-clone/forms/LoginForm.svelte';

	const { authUser } = createAuthStore('login');

	/**
	 * @param {{ email: string; password: string; }} formData
	 */
	async function login(formData) {
		authUser(formData);
	}
</script>

<AuthLayout title="Glide it - Login">
	<LoginForm onFormSubmit={login} />
</AuthLayout>
