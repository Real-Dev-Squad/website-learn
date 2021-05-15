<template>
    <div class="video-grid-item">
    <div>
      <iframe class="youtube-video" :src="video.source"></iframe>
    </div>
    {{ video.title }}
    <br>
    <i> <label> Author: </label> <b> {{ video.author }} </b> </i>
  </div>
</template>

<script>
export default {
  name: 'LearningVideo',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.video-grid-item {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 10px 15px;
    margin: 5px 10px;
    user-select: none;
    overflow-x: auto;
}

.youtube-video {
    width: 350px;
    height: 200px;
}
</style>
