<template>
  <button
    type="button"
    :class="twMerge('overflow-hidden break-all transition duration-300 ease-in-out rounded-sm cursor-pointer w-max overflow-ellipsis whitespace-nowrap transform min-w-[4rem] flex items-center justify-center active:scale-90',sizeConfig[size].button,variantConfig[variant].button,'disabled:active:scale-100 disabled:opacity-40 disabled:cursor-not-allowed')"
    :disabled="isDisabled || isLoading"
    @click="onClick"
  >
    <img v-if="iconLeft && !isLoading" :src="iconLeft" alt="left-button-icon" :width="sizeConfig[size].icon.width" :height="sizeConfig[size].icon.height" class="mr-2">
    <div v-if="isLoading" class="flex items-center">
      <p class="mr-2.5">{{loadingText}}</p>
      <Spinner :size="size" :color="variantConfig[variant].spinner.color" class="mr-2"/>
    </div>
    <slot v-if="!isLoading"></slot>
    <img v-if="iconRight && !isLoading" :src="iconRight" alt="right-button-icon" :width="sizeConfig[size].icon.width" :height="sizeConfig[size].icon.height" class="ml-2">
  </button>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';
import Spinner from '../Spinner/index.vue';
defineProps({
  onClick:Object,
  iconRight:String,
  iconLeft:String,
  size:{
    type:String,
    default:"sm",
    validator(value) {
      return ["xs","sm","md","lg"].includes(value);
    },
  },
  variant:{
    type: String,
    default:"solid",
    validator(value) {
      return ["solid","outline","shadow"].includes(value);
    },
  },
  isLoading:{
    type:Boolean,
    default:false,
  },
  loadingText:{
    type:String
  },
  isDisabled:{
    type:Boolean,
    default:false,
  }
});
const sizeConfig = {
  "xs":{button:"text-xs h-6 px-2",icon:{ height:"15", width:"15" }},
  "sm":{button:"text-sm h-8 px-3",icon:{ height:"20", width:"20" }},
  "md":{button:"text-md h-10 px-4",icon:{ height:"25", width:"25" }},
  "lg":{button:"text-lg h-12 px-6",icon:{ height:"35", width:"35" }},
}
const variantConfig = {
  "outline":{
    button:"text-black bg-white disabled:hover:text-black hover:text-white hover:bg-black disabled:hover:bg-white border border-black active:bg-black/70 disabled:opacity-20",
    spinner:{color:"black"},
  },
  "solid":{
    button:`bg-black text-white border border-black hover:bg-black/80 disabled:hover:bg-black disabled:active:bg-black active:bg-black/70`,
    spinner:{color:"white"},
  },
  "shadow":{
    button:`bg-white text-black border border-black hover:bg-black disabled:hover:text-black hover:text-white disabled:hover:bg-white disabled:active:bg-white active:bg-black/70 disabled:hover:shadow-[0.3rem_0.3rem_0px_black] hover:shadow-none shadow-[0.3rem_0.3rem_0px_black]`,
    spinner:{color:"black"},
  },
}
</script>

<style scoped>
</style>
