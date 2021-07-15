<template>
  <Modal v-if="showModal">
    <template v-slot:header>
      <h3>What is your preference?</h3>
    </template>
    <template v-slot:body>
      <a href="#" @click="handlePreference('articles')">Articles</a>
      <a href="#" @click="handlePreference('videos')">Audios / Videos</a>
    </template>
    <template v-slot:footer>
      Choose any one.
      <button class="modal-default-button" @click="showModal=false">
        Close
      </button>
    </template>
  </Modal>
</template>
<script>
import Modal from '@/components/common/Modal/index.vue';

export default {
  name: 'ModalPrefer',
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    const resourcePreference = localStorage.getItem('resource-preference');
    if (!resourcePreference) {
      this.showModal = true;
    } else {
      this.showModal = false;
    }
  },
  methods: {
    handlePreference(selected) {
      localStorage.setItem('resource-preference', selected);
      this.showModal = false;
    },
  },
};
</script>
