<template>
  <Header />
  <main>
    <router-view/>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

#app > header {
  grid-area: header;
}

#app > main {
  grid-area: main;
  padding: 15px 5px 10px 5px;
}

#app > footer {
  grid-area: footer;
}

body {
  margin: 0;
}
</style>
