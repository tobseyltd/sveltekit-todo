<script>
	// @ts-nocheck

	import { createFormStore, requiredValidator } from '$lib/stores/formHandler';
	import FormErrors from './FormErrors.svelte';

	const { validate, errors, setValue, submitForm } = createFormStore({
		email: '',
		password: ''
	});

	export let onFormSubmit;
</script>

<form class="flex-it">
	<div class="overflow-hidden flex-it sm:rounded-md">
		<div class="flex-it">
			<div class="flex-it">
				<div class="py-2 flex-it">
					<label for="email" class="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						on:input={setValue}
						use:validate={[requiredValidator]}
						type="email"
						name="email"
						id="email"
						class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<FormErrors errors={$errors.email} />
				</div>
				<div class="py-2 flex-it">
					<label for="password" class="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						on:input={setValue}
						use:validate={[requiredValidator]}
						type="password"
						name="password"
						id="password"
						class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<FormErrors errors={$errors.password} />
				</div>
			</div>
		</div>
		<div class="pb-4 text-sm text-gray-600">
			No Account Yet?{' '}
			<a class="hover:underline" href="/auth/register">
				Create a new account
			</a>
		</div>
		<div class="py-2 flex-it">
			<button
				on:click={submitForm(onFormSubmit)}
				type="button"
				class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-400 focus:outline-none focus:ring-offset-2"
			>
				Login
			</button>
		</div>
	</div>
</form>
