<script lang="ts">
	import Editable from './Editable.svelte';
	import { taskListStoreData } from '$lib/stores/tasks';

	// Props //////////////////////////////////////
	export let task: any;
	export let listIndex: number;
	export let taskIndex: number;

	// Variables //////////////////////////////////
	let taskDescription = task.text;

	// Helper Functions ///////////////////////////
	function updateTask(event: any): void {
		taskListStoreData.updateTask(
			{
				id: task.id,
				text: event.detail.editedValue
			},
			listIndex
		);
	}

	function dragStart(event: any) {
		const data = { listIndex, taskIndex };

		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
</script>

<!-- HTML MARKUP -->

<div
	draggable="true"
	role="listitem"
	on:dragstart={dragStart}
	class="p-2 mb-2 border border-solid cursor-pointer flex-it rounded-xl bg-slate-500"
>
	<div class="flex-it">
		<Editable bind:textInputValue={taskDescription} on:editValue={updateTask}>
			<div class="flex-row flex-it">
				<div class="flex flex-1">{task.text}</div>
				<div class="flex items-end hover:text-red-600">
					<button
						on:click|stopPropagation={() =>
							taskListStoreData.removeTask(listIndex, taskIndex)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-trash"
							viewBox="0 0 16 16"
						>
							<path
								d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
							/>
							<path
								fill-rule="evenodd"
								d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</Editable>
	</div>
</div>
