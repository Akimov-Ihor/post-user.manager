<template>
  <div class="container" >
    <div class="form-group">
      <button
        class="btn btn-primary"
        @click.prevent="showModalOne = !showModalOne"
      >Открыть первое окно</button>
      
    </div>

 
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      text: "",
      showModalOne: false,
      showModalTwo: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.btn {
  outline: none !important;
}

.btn.btn-primary {
  background-color: #d0db68;
  border-color: #d0db68;
  outline: none;
}
.btn.btn-primary:hover {
  background-color: #4eca78;
  border-color: #4eca78;
}
.btn.btn-primary:active,
.btn.btn-primary:focus {
  background-color: #4eca78;
  border-color: #4eca78;
}
.btn.btn-primary .fa {
  padding-right: 4px;
}
.customModal {
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.4);
  left: calc(50vw - 300px);
  position: absolute;
  z-index: 999;
  width: 600px;
  top: 20vh;
  border-radius: 5px;
  overflow: hidden;
}
.customModal .customModalTitle {
  background-color: #eee;
  text-align: left;
  padding: 8px 12px;
  font-size: 1.5em;
}
.customModal .customModalTitle .close {
  line-height: 32px;
  color: #5c4084;
}
.customModal .customModalBody {
  background-color: #fff;
  padding: 8px 12px;
  text-align: left;
  padding: 12px;
}
.customModal .customModalFooter {
  background-color: #eee;
  padding: 4px 12px;
  text-align: left;
}
</style>