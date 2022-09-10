<template>
    <div :class="twMerge(`border-${thickness} border-solid rounded-full animate-[spin_${speed}_infinite_linear]`, sizeConfig[size],`border-t-${color} border-l-${color} border-b-${emptyColor} border-r-${emptyColor}`)"></div>
</template>

<script setup>
import {twMerge} from "tailwind-merge"

defineProps({
    size:{
        type:String,
        default:"md",
        validator(value){
            return ["xs","sm","md","lg","xl"].includes(value);
        }
    },
    emptyColor:{
        type:String,
        default:"transparent"
    },
    color:{
        type:String,
        default:"black"
    },
    speed: {
        type: String,
        default: "700ms"
    },
    thickness : {
        type: String,
        default: "2",
        validator(value){
            return ["2","4","8"].includes(value);
        }
    }
})
const sizeConfig = {
    "xs":"w-3 h-3",
    "sm":"w-4 h-4",
    "md":"w-5 h-5",
    "lg":"w-7 h-7",
    "xl":"w-10 h-10"
}
</script>

<style scoped>
</style>