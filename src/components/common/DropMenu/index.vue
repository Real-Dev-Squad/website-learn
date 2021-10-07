<template>
  <div class="dm-container" :style="{width: width + 'px' }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DropMenu',
  props: {
    width: {
      type: Number,
    },
  },
};
</script>

<style>
.dm-container {
  padding: 10px;
  border: 1px solid #000;
}
.dm-container ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
  display: inline-block;
  min-width: 100px;
}
.dm-container li {
  margin: 5px 0;
}
.dm-container li:first-child {
  margin-top: 0;
}
.dm-container li:last-child {
  margin-bottom: 0;
}
.dm-container ul li a {
  text-decoration: none;
}
</style>
