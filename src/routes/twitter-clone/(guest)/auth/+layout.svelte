<script lang="ts">
	import { goto } from '$app/navigation';
	import { getAuthContext } from '@components/context/auth';

	const { isAuthenticated } = getAuthContext();

	if ($isAuthenticated) goto('/twitter-clone');
</script>

{#if !$isAuthenticated}
	<slot />
{/if}
