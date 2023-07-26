import { writable } from 'svelte/store';

export function createFormStore() {
	const form = writable<object>();

	function setForm(formData: object) {
		form.set(formData);
	}

	function validate(node: HTMLDataElement) {
		console.log(node);
	}

	return {
		validate,
		setForm
	};
}
