<template>
  <h2>{{ heading }}</h2>
  <swiper
    :slides-per-view="4"
    :space-between="20"
    navigation
  >
    <swiper-slide
      v-for="video in videos"
      :key="video.id"
    >
      <iframe width="100%" class="youtube-video" :src="video.source"></iframe>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

export default {
  name: 'Slider',
  props: {
    heading: String,
    videos:
    {
      type: Array,
      required: false,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    SwiperCore,
    Navigation,
  },
};
</script>
