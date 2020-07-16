<template>
  <div class="container">
    <div>
      <div @click="closeModal">&times;</div>
      <p>Company name: {{this.company.name}}</p>
      <p>Business: {{this.company.bs}}</p>
      <p>Сatchphrase: {{this.company.catchPhrase}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ["company"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #020202ab;
  display: flex;
  justify-content: center;

}
.container > div {
  margin-top: 20%;
      height: 15%;
    width: 35%;
    background: #020202ab;
    color: #e8f0fe
}


@media (min-width: 992px) and (max-width: 1199px) {
  .container > div{
    font-size: 15px;
  }
}
/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  
  
}
/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  
  .container > div{
    height: 20%;
    font-size: 12px;
  }
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .container > div{
    height: 20%;
    font-size: 100%;
  } 
}
/* Iphone 5 */
@media (max-width: 320px) {
  .container > div{
  height: 20%;
  font-size: 100%;
  }

  
}
</style>