<template>
  <div class="wrapper">
    <!-- <Header /> -->
    <HelloWorld msg="Router/Page based content goes here. " />
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
import LearningVideo from '@/components/LearningVideo/index.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LearningVideo,
  },
  data() {
    return {
      videoList: [
        {
          id: 0,
          title: 'Getting started with VueJ',
          source: 'https://www.youtube.com/embed/gdZH7Anh_6w',
          author: 'Someone',
        },
        {
          id: 1,
          title: 'What even is components?',
          source: 'https://www.youtube.com/embed/FMl8vXPGqCI',
          author: 'Buddy',
        },
        {
          id: 2,
          title: 'Was that an appropriate Reaction?',
          source: 'https://www.youtube.com/embed/MhkGQAoc7bc',
          author: 'Someones Buddy',
        },
        {
          id: 3,
          title: 'What even is components?',
          source: 'https://www.youtube.com/embed/FMl8vXPGqCI',
          author: 'Buddy',
        },
        {
          id: 4,
          title: 'Was that an appropriate Reaction?',
          source: 'https://www.youtube.com/embed/MhkGQAoc7bc',
          author: 'Someones Buddy',
        },
        {
          id: 5,
          title: 'What even is components?',
          source: 'https://www.youtube.com/embed/FMl8vXPGqCI',
          author: 'Buddy',
        },
        {
          id: 6,
          title: 'Was that an appropriate Reaction?',
          source: 'https://www.youtube.com/embed/MhkGQAoc7bc',
          author: 'Someones Buddy',
        },
      ],
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
