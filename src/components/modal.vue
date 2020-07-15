<template>
<div class="container">
  <div>
    <div @click="closeModal">&times;</div>
    <p> modalka</p>
    <p>{{company}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'modal',
  props: ["company"],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container > div {
    height: 50%;
    width: 50%;
    background: rgba(0,0,0,.5);
    color: red;

  }
</style>