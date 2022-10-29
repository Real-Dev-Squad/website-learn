<template>
  <div class="flex justify-center">
    <OnboardStep
      :stepCount="currentStepCount"
      :stepData="ONBOARDING_STEPS_CONFIG[currentStepCount]"
      :totalSteps="ONBOARDING_STEPS_CONFIG.length"
      @previous="previousHandler"
      @next="nextHandler"
    />
  </div>
</template>

<script setup>
import OnboardStep from "@/components/OnboardStep/index.vue";
import ONBOARDING_STEPS_CONFIG from "../constants/onboarding-steps-config.js";
import * as LocalStorageUtils from "../utils/LocalStorageUtils";
import { provide, reactive, ref, watch } from "vue";
import { DATA_TYPES, LOCAL_STORAGE_KEYS } from "@/constants/index.js";

const persistedOnboardingData = LocalStorageUtils.getData(LOCAL_STORAGE_KEYS.ONBOARDING_RESPONSES)
const persistedStepCount = LocalStorageUtils.getData(LOCAL_STORAGE_KEYS.ONBOARDING_STEP, DATA_TYPES.INTEGER)
const stepCount = persistedStepCount == null ? 0 : persistedStepCount;
const formInitalValues = persistedOnboardingData == null ? {} : persistedOnboardingData;
const currentStepCount = ref(stepCount);
const stepResponses = reactive(formInitalValues);

provide("stepResponses", stepResponses);

watch(currentStepCount,()=>{
  LocalStorageUtils.setData(LOCAL_STORAGE_KEYS.ONBOARDING_STEP, currentStepCount.value);
})

watch(stepResponses,()=>{
  LocalStorageUtils.setData(LOCAL_STORAGE_KEYS.ONBOARDING_RESPONSES, stepResponses);
})

const nextHandler = () => {
  if (currentStepCount.value == ONBOARDING_STEPS_CONFIG.length - 1)
    console.log("Submit data");
  else currentStepCount.value = currentStepCount.value + 1;
};

const previousHandler = () => {
  if (currentStepCount.value == 0) return;
  currentStepCount.value = currentStepCount.value - 1;
};
</script>

<style>
</style>