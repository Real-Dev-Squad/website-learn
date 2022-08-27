<template>
  <div
    :class="`tooltip w-max h-max relative ${classes}`"
    :data-tooltip="content"
    :data-tooltip-position="position"
  >
    <slot />
  </div>
</template>

<script setup>

defineProps({
  content: String,
  classes: String,
  bgColor: {
    type: String,
    default: 'rgb(229 231 235)',
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].includes(value);
    },
  },
});
</script>

<style scoped>
  .tooltip::before,.tooltip::after {
    --tooltip-bg:v-bind(bgColor);
    --scale:0;
    --transition-duration: 100ms;
    --translate-x: -50%;
    --opacity: 0;
    @apply absolute;
    transform: translateX(var(--translate-x)) translateY(var(--translate-y,0)) scale(var(--scale));
    opacity: var(--opacity);
    transition-duration: var(--transition-duration);
    transition-timing-function: ease-in-out;
    transition-property: transform , opacity;
    transform-origin: var(--transition-origin);
  }
  .tooltip::before {
    --translate-y:-100%;
    content: attr(data-tooltip);
    @apply w-max max-w-[15rem] text-left px-2.5 py-2.5 font-light text-black text-xs rounded-xl;
    border:1px solid var(--tooltip-bg);
    background-color: var(--tooltip-bg);
  }
  .tooltip:hover::before,.tooltip:hover::after {
    --scale:1;
    --opacity:1;
  }
  .tooltip[data-tooltip-position="top"]::before, .tooltip[data-tooltip-position="bottom"]::before {
    @apply left-1/2;
  }
  .tooltip[data-tooltip-position="left"]::before,.tooltip[data-tooltip-position="right"]::before {
    --translate-y:0%;
    @apply -top-full;
  }
  .tooltip[data-tooltip-position="top"]::before {
    @apply -top-3;
    --translate-y:-100%;
    --transition-origin:bottom center;
  }
  .tooltip[data-tooltip-position="bottom"]::before {
    --translate-y:0%;
    top:calc(100% + 0.75rem);
    --transition-origin:top center;
  }
  .tooltip[data-tooltip-position="left"]::before {
    --translate-x:calc(-100% - 0.75rem);
    @apply left-0;
    --transition-origin:center right;
  }
  .tooltip[data-tooltip-position="right"]::before {
    --translate-x:0.75rem;
    @apply left-full;
    --transition-origin:center left;
  }
</style>
