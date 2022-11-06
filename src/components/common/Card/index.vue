<template>
  <section id="card">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        :src=props.cardImage
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-3xl mb-2">{{props.cardTitle}}</div>
        <p class="text-gray-700 text-base">
      {{props.cardDescription}}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>


const props = defineProps({
  cardTitle: {
    type: String,
    default: "title",
  },
  cardDescription: {
    type: String,
    default: "description",
  },
  cardImage:{
    type: String,
    default:"https://v1.tailwindcss.com/img/card-top.jpg"
  }
});

</script>
<style scoped></style>
