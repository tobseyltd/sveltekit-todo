<script lang="ts">
	export let title: string;
</script>

<div class="flex justify-center h-full">
	<div class="items-center justify-center h-full flex-it">
		<div class="text-4xl font-bold text-white">{title}</div>
		<div class="w-full p-10 mt-10 bg-white flex-it h-100 xs:w-100 rounded-2xl">
			<div class="flex-it">
				<slot />
			</div>
		</div>
	</div>
</div>
