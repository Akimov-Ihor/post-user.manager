<template>
  <div>
    <h1>All posts:</h1>
    <div class="posts">
      <div class="post" v-for="post in paginatedData" :key="post.id">
        <router-link :to="'/post/' + post.id">
          <h3>{{post.title}}</h3>
          <hr />
          <span>{{post.body}}</span>
        </router-link>
      </div>
    </div>
    <button :disabled="getNumberOfPage==0" @click="showPreviousPosts">Previous</button>
    <button :disabled="getNumberOfPage>=getPageCount-1" @click="showNextPosts">Next</button>
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
h1 {
  font-size: 3em;
  color: black;
}

button {
  box-shadow: inset 0px 0px 15px 3px #181a1d;
  background: linear-gradient(to bottom, #000204 5%, #000000 100%);
  background-color: black;
  border-radius: 17px;
  border: 1px solid #1f2f47;
  display: inline-block;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 12px 35px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
}
button:hover {
  background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
  background-color: #415989;
}
button:active {
  position: relative;
  top: 1px;
}
@media (max-width: 480px) {

  h1{
    font-size: 25px;
  }
  .post > h3 {
    font-size: 16px;
    margin: 0;
  }
    .post>span{
        font-size: 13px;
  }
  .commentsWrapperCenter{
    width: 93%
  }
}
@media (max-width: 320px) {
  .post{
    width: 77%
   
}
}


</style>