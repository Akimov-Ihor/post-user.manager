<template>
  <div>
    <h2>{{post.title}}</h2>
    <div>{{post.body}}</div>
    <div class="comments" v-for="comment of comments" :key="comment.id">
    <p>Email:{{comment.email}}</p>
    <p>Name:{{comment.name}}</p>
    <hr>
    <p>Message:{{comment.body}}</p>

    </div>
  </div>
</template>
<script>
export default {
  computed: {
    post() {
      const id = this.$route.params.id;
      return  this.$store.state.post.posts.filter(p => p.id === Number(id))[0] ;
    },
    comments() {
      const id = this.$route.params.id;
      return this.$store.state.post.comments.filter(p => p.postId === Number(id));
    }
  }
};
</script>