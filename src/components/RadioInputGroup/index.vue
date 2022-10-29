<template>
  <ul class="flex flex-col w-full h-24 mb-6 overflow-scroll">
    <li v-for="item in data.options" :key="item.value">
      <div class="flex w-max">
        <input
          class="mr-3 accent-black"
          type="radio"
          :id="item.value"
          :name="data.key"
          :value="item.value"
          v-model="stepResponses[data.key]"
          @change="handleChange"
          :data-form-input="data.key"
        />
        <label class="cursor-pointer" :for="item.value">{{
          item.displayName
        }}</label>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { inject, watchEffect } from "vue";

defineEmits(["previous", "next"]);
const props = defineProps({
  data: Object,
  stepCount: Number,
});
const stepResponses = inject("stepResponses");

watchEffect(() => {
  if (!stepResponses[props.data.key]) {
    stepResponses[props.data.key] = props.data.options[0].value;
  }
});
</script>

<style>
</style>