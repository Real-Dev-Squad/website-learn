<template>
  <div class="wrapper">
    <!-- <Header /> -->
    <HelloWorld msg="Router/Page based content goes here. " />
    <ModalPrefer />
    <div id="learning-site-videos">
      <div class="video-grid-container">
        <LearningVideo
          v-for="item in videoList"
          v-bind:video="item"
          v-bind:key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ModalPrefer from '@/components/ModalPrefer/index.vue';
import LearningVideo from '@/components/LearningVideo/index.vue';
// constants
import videoList from '@/constants';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ModalPrefer,
    LearningVideo,
  },
  data() {
    return {
      videoList,
    };
  },
};
</script>

<style>
.wrapper {
  padding: 12px 16px;
  margin: 0 auto;
}
.video-grid-container {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 20px;
    justify-content: flex-start;
}
</style>
