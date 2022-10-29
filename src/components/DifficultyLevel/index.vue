<template>
  <div class="relative flex w-full h-24 mt-4" ref="sliderMenuRef">
    <div
      class="flex-1 cursor-pointer"
      v-for="(item,index) in data.options"
      :key="item.value"
    >
      <input
        class="hidden"
        type="radio"
        :id="item.value"
        :name="data.key"
        :value="item.value"
        v-model="stepResponses[data.key]"
        :data-form-input="data.key"
      />
      <label
        :class="`flex w-full h-full cursor-pointer`"
        :for="item.value"
      >
        <div class="relative flex-1 h-1 bg-black">
          <div class="absolute flex w-full pt-3">
            <div :class="`flex w-full overflow-hidden overflow-ellipsis ${
            index === 0
              ? 'justify-start'
              : index === data.options.length - 1
              ? 'justify-end'
              : 'justify-center'
          }`">{{ item.displayName }}</div>
          </div>
        </div>
      </label>
    </div>
    <div
      class="absolute w-4 h-4 transition-all -translate-y-1.5 bg-black rounded-full"
      ref="slider"
    ></div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref, watch } from "vue";

const sliderMenuRef = ref(null);
const slider = ref(null);
defineEmits(["next","previous"]);
const props = defineProps({
  data: Object,
  stepCount: Number,
});
const stepResponses = inject("stepResponses");

const optionValuesToIndex = computed(() => {
  return props.data.options.reduce((acc, item, index) => {
    acc[item.value] = index;
    return acc;
  }, {});
});

const moveSlider = () => {
  const selectedOption = stepResponses[props.data.key];
  const selectedOptionIndex = optionValuesToIndex.value[selectedOption];
  const totalOptions = props.data.options.length;
  const sliderMenuWidth = sliderMenuRef.value.getBoundingClientRect().width;
  const perOptionWidth = sliderMenuWidth / totalOptions;
  const sliderWidth = 16;
  let sliderLeftOffset = perOptionWidth * selectedOptionIndex;
  if (selectedOptionIndex === 0) {
    sliderLeftOffset = 0;
  } else if (selectedOptionIndex === totalOptions - 1) {
    sliderLeftOffset = sliderMenuWidth - sliderWidth / 2;
  } else {
    sliderLeftOffset =
      perOptionWidth * selectedOptionIndex +
      perOptionWidth / 2 -
      sliderWidth / 2;
  }

  slider.value.style.left = `${sliderLeftOffset}px`;
};

onMounted(() => {
  if (!stepResponses[props.data.key]) {
    stepResponses[props.data.key] = props.data.options[0].value;
  } else moveSlider();
});

watch(stepResponses, moveSlider);
</script>

<style>
</style>