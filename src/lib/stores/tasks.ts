import { writable } from 'svelte/store';

const DATA = [
	{
		id: 'l-1',
		text: 'List 1',
		items: [
			{ id: 't-1', text: 'Task 1' },
			{ id: 't-2', text: 'Task 2' },
			{ id: 't-3', text: 'Task 3' }
		]
	},
	{
		id: 'l-2',
		text: 'List 2',
		items: [
			{ id: 't-4', text: 'Task 4' },
			{ id: 't-5', text: 'Task 5' },
			{ id: 't-6', text: 'Task 6' }
		]
	},
	{
		id: 'l-3',
		text: 'List 3',
		items: [
			{ id: 't-7', text: 'Task 7' },
			{ id: 't-8', text: 'Task 8' },
			{ id: 't-9', text: 'Task 9' }
		]
	}
];

function createStore() {
	const taskListData = writable(DATA);
	const { subscribe, update } = taskListData;

	return {
		subscribe,
		updateTask: (task: any, listIndex: any) => {
			update((storeTaskList) => {
				const taskIndex = storeTaskList[listIndex].items.findIndex(
					(storeTask) => storeTask.id === task.id
				);

				if (taskIndex >= 0) {
					storeTaskList[listIndex].items[taskIndex] = { ...task };
				}
				return storeTaskList;
			});
		},
		addList: () => {
			update((list) => [
				...list,
				{
					id: new Date().toISOString(),
					text: 'New List',
					items: []
				}
			]);
		}
	};
}
export const taskListStoreData = createStore();
