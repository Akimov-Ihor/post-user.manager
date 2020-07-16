<template>
  <div class="formWrapper">
    <div class="formWrapperCenter">
      <h1>Create Post</h1>
      <form @submit.prevent="submit">
        <div class="formTitle">
          <p>Your Title</p>
          <input type="text" name="title" v-model="title" />
        </div>
        <div class="formBody">
          <p>Your Post</p>
          <input type="text" name="body" v-model="body" />
        </div>
        <div class="formButton">
          <button :disabled="title && body =='' " class="crtButton" type="submit">Create Post</button>
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
        id: new Date().getTime()
      });
      (this.title = ""), (this.body = "");
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
.formWrapper {
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}
.formWrapperCenter {
  width: 22%;
  height: 80%;
  background-color: #7b5c5959;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
form {
  width: 80%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  /* justify-content: space-evenly; */
}
.formTitle > input {
  width: 81%;
  height: 4vh;
  padding: 0;
  border: none;
  background-color: #e8f0fe;
  border-bottom: 1px solid;
  outline: none;
  margin: 0;
}

.formBody > input {
  width: 100%;
  height: 29vh;
  padding: 0;
  background-color: #e8f0fe;
  /* border: none; */
  /* border-bottom: 1px solid; */
  outline: none;
  margin: 0;
}

.formButton {
  margin-top: 1%;
}
.crtButton {
  box-shadow: inset 0px 0px 15px 3px #181a1d;
  background: linear-gradient(to bottom, #000204 5%, #000000 100%);
  background-color: black;
  border-radius: 17px;
  border: 1px solid #1f2f47;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 12px 35px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
}
.crtButton:hover {
  background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
  background-color: #415989;
}
.crtButton:active {
  position: relative;
  top: 1px;
}

@media (min-width: 768px) and (max-width: 991px) {
  .formWrapperCenter {
    width: 40%;
    height: 57%;
  }
}
/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .formWrapperCenter {
    width: 55%;
    height: 68%;
  }
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .formWrapperCenter {
    width: 57%;
    height: 57%;
  }
}
/* Iphone 5 */
@media (max-width: 320px) {
  .formWrapperCenter {
    width: 57%;
    height: 57%;
  }
}
</style>>
  

  
