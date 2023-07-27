<script>
	import { loginUser } from '@api/auth';
	import AuthLayout from '@components/layouts/AuthLayout.svelte';
	import LoginForm from '@components/twitter-clone/forms/LoginForm.svelte';

	/**
	 * @param {{ email: string; password: string; }} formData
	 */
	async function login(formData) {
		const user = await loginUser(formData);
	}
</script>

<AuthLayout title="Glide it - Login">
	<LoginForm onFormSubmit={login} />
</AuthLayout>
