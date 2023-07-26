<script lang="ts">
	import '../../app.css';
	import UiContext from '@components/context/UI/UIContext.svelte';
	import AuthContext from '@components/context/auth/AuthContext.svelte';
	UiContext;
</script>

<UiContext>
	<AuthContext>
		<slot />
	</AuthContext>
</UiContext>
