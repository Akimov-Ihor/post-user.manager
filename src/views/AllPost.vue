<template>
  <div>
    <h1>All posts:</h1>
    <div class="posts">
      <div class="post" v-for="post in paginatedData" :key="post.id">
        <router-link :to="'/post/' + post.id">
          <h3>{{post.title}}</h3>
          <hr>
          <div>{{post.body}}</div>
        </router-link>
      </div>
    </div>
    <button :disabled="getNumberOfPage>=getPageCount-1" @click="showNextPosts">Next</button>
    <button :disabled="getNumberOfPage==0" @click="showPreviousPosts">Previous</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "AllPost",
  methods: {
    ...mapMutations(["showNextPosts", "showPreviousPosts"]),
    ...mapActions(["getPost", "getAllComments"]),
    submit() {}
  },

  computed: {
    ...mapGetters([
      "allPosts",
      "getNumberOfPage",
      "paginatedData",
      "getPageCount"
    ])
  },
  created() {
    this.getAllComments();
    if (this.allPosts && !this.allPosts.length) this.getPost();
  }
};
</script>

<style scoped>
</style>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
}
.post {
  width: 40%;
  height: 23%;
  background-color: #0801010a;
  flex-basis: auto;
  margin: 1% 0%;
}
h1{
  font-size: 3em;
    color: black
}

</style>