<template>
  <div class="wrapper">
    <p>Place holder</p>
  </div>
</template>

<script>
export default {
  name : "Home",
  mounted() {
    console.log( process.env.VUE_APP_fuck );
  },
};
</script>

<style scoped>
section { margin: 30px auto; }
.wrapper {
  padding: 12px 16px;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
