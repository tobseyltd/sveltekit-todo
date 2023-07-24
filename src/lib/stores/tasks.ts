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
	const stored = localStorage.getItem('task-data');
	const storedTaskList = stored ? JSON.parse(stored) : DATA;

	const taskListData = writable(storedTaskList);
	const { subscribe, update } = taskListData;

	return {
		subscribe,

		updateTask: (task: any, listIndex: any) => {
			update((storeTaskList) => {
				const taskIndex = storeTaskList[listIndex].items.findIndex(
					(storeTask: any) => storeTask.id === task.id
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
		},

		addTask: (listIndex: any) => {
			update((list) => {
				const { items } = list[listIndex];

				list[listIndex].items = [
					...items,
					{
						id: new Date().toISOString(),
						text: 'What to do?'
					}
				];
				return list;
			});
		},

		moveTask: (sourceData: any, moveToListIndex: any) => {
			update((list) => {
				const [task] = list[sourceData.listIndex].items.splice(
					sourceData.taskIndex,
					1
				);

				list[moveToListIndex].items.push(task);
				return list;
			});
		},

		removeTask: (listIndex: any, taskIndex: any) => {
			update((list) => {
				list[listIndex].items.splice(taskIndex, 1);
				return list;
			});
		},

		removeList: (listIndex: any) => {
			update((list) => list.filter((_: any, idx: any) => idx !== listIndex));
		},

		updateList: (newText: any, listIndex: any) => {
			update((list) => {
				list[listIndex].text = newText;
				return list;
			});
		}
	};
}
export const taskListStoreData = createStore();

taskListStoreData.subscribe((list) => {
	list && localStorage.setItem('task-data', JSON.stringify(list));
});
