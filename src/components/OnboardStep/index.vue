<template>
  <div
    class="flex flex-col items-center px-8 py-6 border border-black rounded w-96"
  >
    <!-- Form header -->
    <div class="w-full mb-6">
      <div class="flex items-center justify-between w-full">
        <h1 class="w-full text-2xl font-semibold text-left">
          {{ stepData.title }}
        </h1>
        <Tooltip class="ml-10">
          <template #content>
            <p>
              {{ stepData.tooltipContent }}
            </p>
          </template>
          <span
            class="inline-block w-6 h-6 font-bold text-white bg-black rounded-full "
            >i</span
          >
        </Tooltip>
      </div>
      <p
        v-if="stepData.body.data.key"
        class="flex justify-start w-full text-sm text-red-500"
      >
        {{ formErrors[stepData.body.data.key] }}
      </p>
    </div>

    <!-- Form body -->
    <div class="flex-1 w-full" @change="handleBodyViewChanges">
      <component
        :is="stepData.body.view"
        :data="stepData.body.data"
        :stepCount="stepCount"
      ></component>
    </div>

    <!-- Form buttons -->
    <div class="flex w-full">
      <div v-if="stepCount > 0" class="flex justify-start w-full">
        <Button variant="shadow" :onClick="prevBtnHandler"
          >Back</Button
        >
      </div>
      <div class="flex justify-end w-full">
        <Button variant="shadow" :onClick="nextBtnHandler">{{stepCount === totalSteps-1 ? 'Start Learning':'Next'}}</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/common/Button/index.vue";
import Tooltip from "../common/Tooltip/index.vue";
import { reactive } from "vue";

const emit = defineEmits(["next", "previous"]);
defineProps({
  stepData: Object,
  stepCount: Number,
  totalSteps: Number,
});
const formErrors = reactive({});

const nextBtnHandler = () => {
  emit("next");
};
const prevBtnHandler = ()=>{
  emit("previous")
}
const handleBodyViewChanges = (e) => {
  if (e.target.dataset.formInput && formErrors[e.target.dataset.formInput])
    delete formErrors[e.target.dataset.formInput];
};
</script>

<style>
</style>