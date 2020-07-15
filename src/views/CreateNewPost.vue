<template>
  <div class="formWrapper">
    <div class="formWrapperCenter">
      <form @submit.prevent="submit">
        <div>
          <input type="text" name="title" placeholder="title" v-model="title" />
        </div>
        <div>
          <input type="text" name="body" placeholder="body" v-model="body" />
        </div>
        <div>
          <button type="submit"></button>
        </div>
      </form>
    </div>
  </div>
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
      // this.$router.push("/posts");
    }
  }
};
</script>


<style scoped>
.formWrapperCenter {
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>>
  

  
