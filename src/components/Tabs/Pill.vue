<template>
  <div>
    <span class="pill">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Pill",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.pill {
  color: black;
  border-radius: 1rem;
  padding: 0.7rem;
  background-color: #041187;
  color: #ffffff;
  display: block;
  cursor: pointer;
}
.pill:hover {
  background-color: #88D870;
  display: block;
}
</style>