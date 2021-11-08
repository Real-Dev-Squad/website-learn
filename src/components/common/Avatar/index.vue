<template>
  <img :src="src" :class="classes"/>
</template>

<script>
import { reactive, computed } from 'vue';
import DEFAULT_IMAGE from '../../../assets/dummy-image.png';

export default {
  name: 'Avatar',
  props: {
    size: {
      type: String,
      validator(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  setup(prop) {
    const props = reactive(prop);
    return {
      classes: computed(() => ({
        'learn-avatar': true,
        [`learn-avatar--${props.size || 'medium'}`]: true,
      })),
      src: computed(() => props.src || DEFAULT_IMAGE),
    };
  },
};
</script>
<style scoped>
.learn-avatar {
    padding: 0.2rem;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
  }
  .learn-avatar--small {
    width:25px;
    height:25px;
  }
  .learn-avatar--medium {
    width:50px;
    height:50px;
  }
  .learn-avatar--large {
    width:75px;
    height:75px;
  }
</style>
