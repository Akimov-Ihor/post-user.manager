<template>
  <div>
    <div>
      <button :disabled="getNumberOfPage>=getPageCount-1" @click="showNextPosts">Next</button>
      <button :disabled="getNumberOfPage==0" @click="showPreviousPosts">Previous</button>
    </div>
    <div class="posts" v-for="post in paginatedData" :key="post.id">
      <h2>{{post.title}}</h2>
      <span>{{post.body}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "AllPost",

  methods: {
    ...mapMutations(["showNextPosts", "showPreviousPosts"]),
    ...mapActions(["getPost"])
  },

  computed: mapGetters([
    "allPosts",
    "getNumberOfPage",
    "paginatedData",
    "getPageCount"
  ]),
  async mounted() {
    this.getPost();
  }
};
</script>

<style scoped>
</style>

<style scoped>
.posts {
  width: 400px;
  border: 2px solid coral;
  margin-bottom: 1%;
}
</style>