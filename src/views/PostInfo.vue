<template>
  <div>
      <h2>{{post.title}}</h2>
      <div>{{post.body}}</div>
  </div>
</template>
<script>

export default {
  computed: {
    post() {
      const id = this.$route.params.id;
  
      return this.$store.state.post.posts.filter(p => p.id === Number(id))[0] || null;
    }
  }
};
</script>