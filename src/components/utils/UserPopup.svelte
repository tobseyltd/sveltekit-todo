<script>
// @ts-nocheck

	import { afterUpdate, onMount } from 'svelte';
	import UserPopupPortal from './UserPopupPortal.svelte';
	// @ts-ignore
	import { clickOutside } from '@components/actions/clickOutside';

	let isOpen = false;

  let openerMenu;
  let popup;

  let popupBottomPosition;
  let popupLeftPosition;

  onMount(() => {
    addEventListener("resize", adjustPopup);
    
    return () => {
      removeEventListener("resize", adjustPopup);
    }
  })

  afterUpdate(() => {
    adjustPopup();
  })

  function adjustPopup() {
    if (isOpen) {
      const position = openerMenu.getBoundingClientRect();

      popupBottomPosition = openerMenu.clientHeight + "px";
      popupLeftPosition = position.left + "px";
    }
  }

</script>

<div class="flex-it">
  <div bind:this={openerMenu} class="flex-it">
    <button on:click|stopPropagation={() => {
      isOpen = !isOpen;
    }}>
      <slot />
    </button>
  </div>
  {#if isOpen}
    <!-- svelte-ignore missing-declaration -->
    <UserPopupPortal>
      <div 
        on:outclick={() => {
          isOpen = false;
        }}
        use:clickOutside
        bind:this={popup}
        style="bottom: {popupBottomPosition}; left: {popupLeftPosition}"
        class="fixed z-10 text-white transition duration-1000 bg-gray-800 border border-gray-700 flex-it hover:cursor-pointer popup rounded-2xl"
      >
        <div class="overflow-auto w-72 min-w-68 max-h-120 min-h-8 flex-it">
          <div class="flex-grow flex-shrink py-3 flex-it">
            <div class="px-4 py-3 transition flex-it hover:bg-gray-700">Logout</div>
          </div>
        </div>
      </div>
    </UserPopupPortal>
  {/if}
</div>
