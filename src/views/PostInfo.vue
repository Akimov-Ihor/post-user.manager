<template>
  <!-- <div class="post" v-for="post in getPostBodyInfo" :key="post.id"> -->
  <div>
    <div v-for="post in getPostBodyInfo" :key="post.id">
      <h2>{{post.title}}</h2>
      <div>{{post.body}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      body: {}
    };
  },
  async mounted() {
    this.getPostBody();
  },
  methods: {
    ...mapActions(["getPostBody"])
  },
  computed: mapGetters(["getPostBodyInfo"])
};
</script>