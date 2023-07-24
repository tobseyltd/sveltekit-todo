<script context="module" lang="ts">
	import { writable } from 'svelte/store';

	let listHoverId: any = writable();
</script>

<script lang="ts">
	import { taskListStoreData } from '$lib/stores/tasks';
	import { flip } from 'svelte/animate';
	import { fade, fly } from 'svelte/transition';
	import TaskItem from './TaskItem.svelte';
	import Editable from './Editable.svelte';

	// Props //////////////////////////////////////
	export let taskList: any;
	export let listIndex: number;

	// Variables //////////////////////////////////
	let listTitle = taskList.text;

	
	// Handler Functions //////////////////////////
	function handleDragEnter() {
		listHoverId.set(taskList.id);
	}

	function handleDragover(event: DragEvent) {
		event.preventDefault();
	}

	function handleDrop(event: any): void {
		const sourceData = JSON.parse(event.dataTransfer.getData('text/plain'));
		taskListStoreData.moveTask(sourceData, listIndex);
		listHoverId.set('');
	}

	// Helper Functions ///////////////////////////
	function updateList(event: any) {
		taskListStoreData.updateList(event.detail.editedValue, listIndex);
	}
</script>

<!-- HTML Markup -->

<div class="max-w-sm max-h-full min-h-full m-2 my-0 flex-it w-80">
	<div
		role="listitem"
		on:dragenter={handleDragEnter}
		on:dragover={handleDragover}
		on:drop={handleDrop}
		class:hovering={taskList.id === $listHoverId}
		class="max-h-full border-2 border-gray-500 bg-slate-400 flex-it rounded-xl"
	>
		<div class="m-5 flex-it">
			<Editable bind:textInputValue={listTitle} on:editValue={updateList}>
				<div class="flex-row flex-it">
					<div class="mr-2 text-xl font-bold text-left">
						{taskList.text}
					</div>
					<div class="flex items-center hover:text-red-600">
						<button
							on:click|stopPropagation={() =>
								taskListStoreData.removeList(listIndex)}
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
		<div class="p-3 overflow-x-auto overflow-y-auto with-scrollbar">
			<!-- TASK ITEM START -->

			{#each taskList.items as task, taskIndex (task.id)}
				<div
					in:fly={{ y: 200, duration: 700 }}
					out:fade={{ duration: 600 }}
					animate:flip
				>
					<TaskItem {task} {listIndex} {taskIndex} />
				</div>
			{/each}

			<!-- TASK ITEM END -->
		</div>
		<button
			on:click={() => taskListStoreData.addTask(listIndex)}
			class="flex p-2 underline"
		>
			+ Add Task
		</button>
	</div>
</div>

<!-- Styles -->

<style>
	.hovering {
		border: 2px solid orange;
	}
</style>
