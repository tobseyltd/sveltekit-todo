<script>
	import { page } from '$app/stores';
</script>

<div class="items-center justify-center h-full text-white flex-it">
	<div class="text-4xl font-bold">
		{$page.status} - {$page.error?.message}
	</div>
	<a href="/twitter-clone">Go back to Home Page</a>
</div>
