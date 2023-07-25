<script lang="ts">
	import NavSidebar from '../../../components/twitter-clone/sidebars/NavSidebar.svelte';
	import TrendsSidebar from '../../../components/twitter-clone/sidebars/TrendsSidebar.svelte';

	export let data: any;
</script>

<div class="flex justify-center w-full h-full text-gray-100 bg-gray-900">
	<!-- Sidebar -->
	<NavSidebar />
	<!-- Sidebar End -->

	<!-- Children -->
	<div class="w-3/12 p-4 border-gray-700 border-x flex-it">
		<div class="sticky top-0 z-10">
			<div
				class="z-10 p-4 text-sm font-bold flex-it h-14 xl:text-xl backdrop-blur-md bg-opacity-70"
			>
				Home
			</div>
			<slot />
		</div>
	</div>
	<!-- TRENDS SIDEBAR START -->
	<TrendsSidebar trends={data.trends} />
	<!-- TRENDS SIDEBAR END -->
</div>
