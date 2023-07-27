<script>
	// @ts-nocheck

	import { registerUser } from '@api/auth';
	import AuthLayout from '@components/layouts/AuthLayout.svelte';
	import RegisterForm from '@components/twitter-clone/forms/RegisterForm.svelte';

	/**
	 * @param {any} formData
	 */
	async function register(formData) {
		const user = await registerUser(formData);
		console.log(user);
	}
</script>

<AuthLayout title="Glider - Create Account">
	<RegisterForm onFormSubmit={register} />
</AuthLayout>
