<script lang="ts">
	import { clickOutside } from '$lib/actions/clickOutside';
	import UserPopupPortal from './UserPopupPortal.svelte';

	let isOpen = false;

	$: {
		isOpen ? enableScroll() : disableScroll();
	}

	function enableScroll() {
		document.body.classList.remove('no-scroll');
	}
	function disableScroll() {
		document.body.classList.add('no-scroll');
	}
</script>

<slot name="opener" openModal={() => (isOpen = true)} />
{#if isOpen}
	<UserPopupPortal>
		<div class="openModal">
			<div
				use:clickOutside
				on:outclick={() => (isOpen = false)}
				class="fixed p-8 -translate-x-1/2 modal min-w-160 top-14 left-2/4 rounded-2xl"
			>
				<slot closeModal={() => (isOpen = false)} name="modal-content" />
			</div>
		</div>
	</UserPopupPortal>
{/if}
