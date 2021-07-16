<template>
  <button @click="toggleBookmarks()" class="header-links">Bookmarks</button>
  <div v-if="showBookmarks" class="bookmarks-container">
    <h2>Bookmarks</h2>
    <ul class="bookmark-list">
      <li
        v-for="item in bookmarked"
        :key="item.id"
      >
        <img :src="item.thumbnail" alt="Thumbnail" width="300">
        <p>{{ item.title }}</p>
        <p><button @click="removeBookmark(item)">Remove</button></p>
        <hr />
      </li>
    </ul>
  </div>
</template>
<script>
import videoList from '@/constants';

export default {
  name: 'Bookmarks',
  data() {
    return {
      showBookmarks: false,
      videoList,
    };
  },
  computed: {
    bookmarked() {
      return videoList.filter((video) => video.bookmarked === true);
    },
  },
  methods: {
    toggleBookmarks() {
      this.showBookmarks = !this.showBookmarks;
    },
    removeBookmark(item) {
      // item.thumbnail = false;
      console.log(item.bookmarked);
    },
  },
};
</script>
<style scoped>
.header-links {
  border: none;
  background: none;
  color: #fff;
  height: 63px;
  cursor: pointer;
  margin-right: 20px;
}
.bookmarks-container {
  height: 100%;
  width: 400px;
  background-color: lightgray;
  position: absolute;
  right: 0;
  overflow-y: auto;
}
.bookmark-list {
  display: flex;
  justify-content: center;
  background-color: lightgray;
  flex-wrap: wrap;
  padding: 0;
}
.bookmark-list li:first-child {
  margin-top: auto;
}
.bookmark-list li {
  margin-top: 20px;
}
</style>
