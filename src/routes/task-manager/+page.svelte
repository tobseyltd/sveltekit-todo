<script lang="ts">
	import TaskList from '../../components/task-manager/TaskList.svelte';
	import { _taskListData } from './+page';

	let taskList = _taskListData;
</script>

<div class="h-full p-10">
	<div class="mb-6 text-2xl text-white">Some List</div>
	<button class="flex items-start mb-3 text-xl font-bold text-white cursor-pointer hover:underline">
		+ Add List
	</button>
	<div class="h-full flex-it">
		<div class="flex-row h-full flex-it rounded-xl">
			<!-- TASK LIST START -->

			{#each taskList as list (list.id)}
				<TaskList listTitle={list.text} tasks={list.items} />
			{/each}

			<!-- TASK LIST END -->
		</div>
	</div>
</div>
