<template>
  <form @submit.prevent="submit">
    <input type="text" name="title" placeholder="title" v-model="title" />
    <input type="text" name="body" placeholder="body" v-model="body" />
    <button type="submit"></button>
  </form>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    ...mapMutations(["createNewPost"]),
    submit() {
      this.createNewPost({
        title: this.title,
        body: this.body,
        id: new Date()
      });
      (this.title = ""), (this.body = "");
    }
  }
};
</script>