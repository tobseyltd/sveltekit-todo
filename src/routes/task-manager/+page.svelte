<script lang="ts">
	import TaskList from '../../components/task-manager/TaskList.svelte';
	import { taskListStoreData } from '$lib/stores/tasks';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- HTML MARKUP -->

<div class="h-full p-10">
	<div class="mb-6 text-2xl text-white">{data.appName} - {data.content}</div>
	<button
		on:click={taskListStoreData.addList}
		class="flex items-start mb-3 text-xl font-bold text-white cursor-pointer hover:underline"
	>
		+ Add List
	</button>
	<div class="h-full flex-it">
		<div class="flex-row h-full flex-it rounded-xl">
			<!-- TASK LIST START -->

			{#each $taskListStoreData as taskList, listIndex (taskList.id)}
				<TaskList {taskList} {listIndex} />
			{/each}

			<!-- TASK LIST END -->
		</div>
	</div>
</div>

<!-- HTML MARKUP -->
