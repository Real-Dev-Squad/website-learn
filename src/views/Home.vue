<template>
  <div class="wrapper">
    <!-- <Header /> -->
    <HelloWorld msg="Router/Page based content goes here. " />
    <div id="learning-site-videos">
      <div class="video-grid-container">
        <LearningVideo
          v-for="item in videoList"
          :video="item"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LearningVideo from '@/components/LearningVideo/index.vue';

// constants
import videoList from '@/constants';

export default {
  name: 'Home',
  components: {
    HelloWorld,
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
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    justify-content: space-between;
    grid-gap: 20px;
}
#learning-site-videos {
  max-width: 1500px;
  margin: 0 auto;
}
@media screen and (max-width: 1135px) {
  .video-grid-container {
    justify-content: center;
  }
}
</style>
