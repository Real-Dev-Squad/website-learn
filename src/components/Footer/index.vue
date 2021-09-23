<template>
  <footer class="footer-container">
    <p>{{content}} <a href={{link}}>{{linkText}}</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      content: 'The contents of this website are deployed from this',
      link: 'https://github.com/Real-Dev-Squad/website-learn/',
      linkText: 'open sourced repo',
    };
  },
};
</script>

<style scoped>
.footer-container {
  background-color: #efefef;
}
</style>
