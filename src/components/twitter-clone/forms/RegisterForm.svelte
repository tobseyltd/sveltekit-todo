<script>
	// @ts-nocheck

	import {
		createFormStore,
		minLengthValidator,
		firstUppercaseLetter,
		requiredValidator,
		compareWithValidator
	} from '$lib/stores/formHandler';
	import FormErrors from './FormErrors.svelte';

	const { validate, submitForm, errors, setValue } = createFormStore({
		fullName: '',
		nickName: '',
		email: '',
		avatar: '',
		password: '',
		passwordConfirmation: ''
	});

	export let onFormSubmit;
	export let loading;
</script>

<form class="flex-it">
	<div class="overflow-hidden flex-it sm:rounded-md">
		<div class="flex-it">
			<div class="flex-it">
				<div class="py-2 flex-it">
					<label for="fullName" class="block text-sm font-medium text-gray-700">
						Full Name
					</label>
					<input
						on:input={setValue}
						use:validate={[
							requiredValidator,
							(ele) => minLengthValidator(ele, 5),
							firstUppercaseLetter
						]}
						type="text"
						name="fullName"
						id="fullName"
						class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<FormErrors errors={$errors.fullName} />
				</div>

				<div class="py-2 flex-it">
					<label for="nickName" class="block text-sm font-medium text-gray-700">
						Nick Name
					</label>
					<input
						on:input={setValue}
						use:validate={[
							requiredValidator,
							(ele) => minLengthValidator(ele, 3)
						]}
						type="text"
						name="nickName"
						id="nickName"
						class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<FormErrors errors={$errors.nickName} />
				</div>

				<div class="py-2 flex-it">
					<label for="email" class="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						on:input={setValue}
						use:validate={[requiredValidator]}
						type="text"
						name="email"
						id="email"
						class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<FormErrors errors={$errors.email} />
				</div>

				<div class="py-2 flex-it">
					<label for="avatar" class="block text-sm font-medium text-gray-700">
						Avatar
					</label>
					<input
						on:input={setValue}
						use:validate={[requiredValidator]}
						type="text"
						name="avatar"
						id="avatar"
						class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<FormErrors errors={$errors.avatar} />
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

				<div class="py-2 flex-it">
					<label
						for="passwordConfirmation"
						class="block text-sm font-medium text-gray-700"
					>
						Password Confirmation
					</label>
					<input
						on:input={setValue}
						use:validate={[
							requiredValidator,
							(ele) => compareWithValidator(ele, 'password')
						]}
						type="password"
						name="passwordConfirmation"
						id="passwordConfirmation"
						class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<FormErrors errors={$errors.passwordConfirmation} />
				</div>
			</div>
		</div>
		<div class="pb-4 text-sm text-gray-600">
			Already Registered?{' '}
			<a class="hover:underline" href="/auth/login"> Go to Login </a>
		</div>
		<div class="py-2 flex-it">
			<button
				on:click={submitForm(onFormSubmit)}
				disabled={loading}
				type="button"
				class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-400 focus:outline-none focus:ring-offset-2"
			>
				Register
			</button>
		</div>
	</div>
</form>
