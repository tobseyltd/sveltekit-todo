<script lang="ts">
	import { taskListStoreData } from '$lib/stores/tasks';
	import TaskItem from './TaskItem.svelte';

	export let listTitle: string;
	export let listIndex: number;
	export let tasks: any[];
</script>

<div class="max-w-sm max-h-full min-h-full m-2 my-0 flex-it w-80">
	<div class="max-h-full border-2 border-gray-500 bg-slate-400 flex-it rounded-xl">
		<div class="m-5 flex-it">
			<div class="flex-row flex-it">
				<div class="mr-2 text-xl font-bold text-left">{listTitle}</div>
				<div class="flex items-center hover:text-red-600">
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
				</div>
			</div>
		</div>
		<div class="p-3 overflow-x-auto overflow-y-auto with-scrollbar">
			<!-- TASK ITEM START -->

			{#each tasks as task (task.id)}
				<TaskItem {task} {listIndex} />
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
