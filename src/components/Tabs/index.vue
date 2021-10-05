<template>
  <div class="tabs">
    <ul v-for="(category, index) in categoriesList" :key="index">
      <li>
        <Pill :title="category" />
      </li>
    </ul>
  </div>
</template>

<script>
import Pill from "./Pill.vue";

export default {
  name: "Tabs",
  components: {
    Pill: Pill,
  },
  data() {
    return {
      categoriesList: [
        "All",
        "Web Development",
        "Open source",
        "crypto",
        "Machine learning",
        "Android Development",
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  padding: 0.5rem;
}
.tabs {
  display: flex;
  align-items: center;
  overflow: scroll;
  background-color: pink;
}

.tabs::-webkit-scrollbar {
  display: none;
}
</style>