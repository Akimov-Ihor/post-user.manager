<template>
  <div>
    <div class="posts">
      <div class="post" v-for="post in paginatedData" :key="post.id">
        <h2>{{post.title}}</h2>
        <div>{{post.body}}</div>
        <router-link tag="button" class="btn btn-small" :to="'/post/' + post.id">Open</router-link>
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
    ...mapActions(["getPost","getAllComments"]),
    submit() {}
  },

  computed: {
    // test() {
    //   // console.log(this.$store.state.allPosts.reverse())
    // },
    ...mapGetters([
    "allPosts",
    "getNumberOfPage",
    "paginatedData",
    "getPageCount"
  ])
  },
  created() {
     this.getAllComments()
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
  border: 1px solid coral;
  flex-basis: auto;
  margin: 1% 0%;
}
h2 {
  font-size: 100%;
  width: 100%;
  height: 100%;
}
</style>