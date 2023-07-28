<script lang="ts">
	import '../../app.css';
	import UiContext from '@components/context/UI/UIContext.svelte';
	import AuthContext from '@components/context/auth/AuthContext.svelte';
	import SnackbarContainer from '@components/snackbar/SnackbarContainer.svelte';
	UiContext;
</script>

<UiContext>
	<AuthContext>
		<SnackbarContainer />
		<slot />
	</AuthContext>
</UiContext>
