<template>
  <div
    class="relative cursor-pointer w-max h-max"
    :onmouseenter="trigger === 'hover' ? showTooltip : null"
    :onmouseleave="trigger === 'hover' ? hideTooltip : null"
    :onclick="trigger === 'click' ? toggleTooltip : null"
  >
  <div v-if="isTooltipVisible" :class="twMerge(`absolute p-1 px-3 text-sm transition-opacity animate-fade z-10 text-${TOOLTIP_TEXT_COLOR} bg-${TOOLTIP_BG_COLOR} rounded w-max text-left`, contentPositionalClasses[position])">
    <!-- Arrow -->
    <div v-if="!hideArrow" :class="twMerge('absolute', arrowPositionalClasses[position])"></div>
    <slot name="content"></slot>
  </div>
  <slot></slot>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { twMerge } from 'tailwind-merge'

const isTooltipVisible=ref(false);
const ARROW_SIZE="0.375rem";

const props = defineProps({
  hideArrow:{
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].includes(value);
    },
  },
  trigger: {
    type: String,
    default: 'hover',
    validator(value) {
      return ['hover', 'click'].includes(value);
    },
  },
  type:{
    type: String,
    default: 'dark',
    validator(value) {
      return ["dark","success","warning","error","secondary"].includes(value);
    },
  }
});

const TOOLTIP_TYPES = {
  "dark":{
    TOOLTIP_BG_COLOR:"black",
    TOOLTIP_TEXT_COLOR:"white"
  },
  "success":{
    TOOLTIP_BG_COLOR:"blue-700",
    TOOLTIP_TEXT_COLOR:"white"
  },
  "warning":{
    TOOLTIP_BG_COLOR:"yellow-500",
    TOOLTIP_TEXT_COLOR:"white"
  },
  "error":{
    TOOLTIP_BG_COLOR:"red-600",
    TOOLTIP_TEXT_COLOR:"white"
  },
  "secondary":{
    TOOLTIP_BG_COLOR:"neutral-600",
    TOOLTIP_TEXT_COLOR:"white"
  },
}

const {TOOLTIP_BG_COLOR, TOOLTIP_TEXT_COLOR} = TOOLTIP_TYPES[props.type];

const contentPositionalClasses = {
  "left": `right-full bottom-1/2 translate-y-1/2 ${props.hideArrow? 'mr-1':'mr-2.5'}`,
  "right": `left-full bottom-1/2 translate-y-1/2 ${props.hideArrow? 'ml-1':'ml-2.5'}`, 
  "top": `bottom-full left-1/2 -translate-x-1/2 ${props.hideArrow? 'mb-1':'mb-2.5'}`,
  "bottom": `top-full left-1/2 -translate-x-1/2 ${props.hideArrow? 'mt-1':'mt-2.5'}`
};

const arrowPositionalClasses = {
  "left": `border-solid border-y-[${ARROW_SIZE}] border-y-transparent border-l-[${ARROW_SIZE}] border-l-${TOOLTIP_BG_COLOR} left-full top-1/2 -translate-y-1/2`,
  "right": `border-solid border-y-[${ARROW_SIZE}] border-y-transparent border-r-[${ARROW_SIZE}] border-r-${TOOLTIP_BG_COLOR} right-full top-1/2 -translate-y-1/2`, 
  "top": `border-solid border-x-[${ARROW_SIZE}] border-x-transparent border-t-[${ARROW_SIZE}] border-t-${TOOLTIP_BG_COLOR} left-1/2 -translate-x-1/2 top-full`,
  "bottom": `border-solid border-x-[${ARROW_SIZE}] border-x-transparent border-b-[${ARROW_SIZE}] border-b-${TOOLTIP_BG_COLOR} left-1/2 -translate-x-1/2 bottom-full`
};

const showTooltip = ()=>{
  isTooltipVisible.value = true;
}
const hideTooltip = ()=>{
  isTooltipVisible.value = false;
}
const toggleTooltip= ()=>{
  isTooltipVisible.value = !isTooltipVisible.value;
}
</script>

<style scoped>
</style>
