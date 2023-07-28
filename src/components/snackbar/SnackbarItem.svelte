<script lang="ts">
	import { onMount } from 'svelte';
	import TiTimesOutline from 'svelte-icons/ti/TiTimesOutline.svelte';
	import { fly } from 'svelte/transition';

	export let message: string;
	export let type: string;
	export let onClose: () => void;
	export let autoCloseDuration = 1000;

	let bgColor: string;

	$: duration = autoCloseDuration;
	$: progress = Math.floor((duration / autoCloseDuration) * 100);

	if (type === 'success') bgColor = 'bg-blue-400';
	else if (type === 'error') bgColor = 'bg-red-700';
	else bgColor = 'bg-yellow-500';

	onMount(() => {
		const intervalID = setInterval(() => {
			duration -= 50;

			if (duration === 0) {
				clearInterval(intervalID);
				onClose();
			}
		}, 50);
	});
</script>

<div
	in:fly={{ x: 200 }}
	out:fly={{ x: 200 }}
	class="{bgColor} min-w-68 text-white flex-it font-bold rounded-md md:max-w-xs w-full text-sm shadow-md"
>
	<div class="flex-row-reverse p-1 flex-it">
		<button on:click={onClose} class="text-xl rounded-full">
			<div class="icon">
				<TiTimesOutline />
			</div>
		</button>
	</div>
	<div class="px-2 pb-3 flex-it">{message}</div>
	<div style="width: {progress}%" class="h-2 text-right bg-black opacity-40" />
</div>
