<script lang="ts">
	export let trends: any;
</script>

<div class="mt-5 ml-5 bg-gray-800 w-80 flex-it rounded-2xl h-3/6">
	<div class="p-4 flex-it">
		<span class="text-xl font-bold">Trends</span>
	</div>
	{#each trends as { category, content, glideCount }}
		<div
			class="p-4 transition duration-200 cursor-pointer flex-it hover:bg-gray-700"
		>
			<div class="flex-it">
				<span class="text-sm text-gray-400"> {content} </span>
				<span class="text-lg font-bold">{category}</span>
				<span class="text-sm text-gray-400">{glideCount} glides</span>
			</div>
		</div>
	{/each}
</div>
