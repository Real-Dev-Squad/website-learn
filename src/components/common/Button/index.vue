<template>
  <button
    type="button"
    :class="twMerge('h-8 px-4 py-1 overflow-hidden text-sm break-all transition duration-300 ease-in-out bg-white border border-black rounded-sm cursor-pointer w-max shadow-[0.3rem_0.3rem_0px_black] hover:shadow-none hover:bg-black hover:text-white overflow-ellipsis whitespace-nowrap transform active:bg-gray-700 active:scale-90 max-w-[10rem] min-w-[4.5rem]', classes)"
    @click="clickHandler"
  >
  <slot></slot>
  </button>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';
defineProps({
  clickHandler:Object,
  classes: String,
});
</script>

<style scoped>
</style>
