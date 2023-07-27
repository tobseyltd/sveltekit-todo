<script lang="ts">
	import MainTwitterLayout from '@components/layouts/MainTwitterLayout.svelte';
	import type { PageData } from './$types';
	import { getAuthContext } from '@components/context/auth';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const { auth } = getAuthContext();

	$: {
		if (!$auth.isAuthenticated) goto('/twitter-clone/auth/login');
	}
</script>

{#if $auth.isAuthenticated}
	<MainTwitterLayout {data}>
		<slot />
	</MainTwitterLayout>
{/if}
