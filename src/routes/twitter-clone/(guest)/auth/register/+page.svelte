<script lang="ts">
	import { createAuthStore } from '$lib/stores/createAuthStore';

	import AuthLayout from '@components/layouts/AuthLayout.svelte';
	import RegisterForm from '@components/twitter-clone/forms/RegisterForm.svelte';

	const { authUser, loading } = createAuthStore('register');

	async function register(formData: { email: string; password: string }) {
		authUser(formData);
	}
</script>

<AuthLayout title="Glider - Create Account">
	<RegisterForm loading={$loading} onFormSubmit={register} />
</AuthLayout>
