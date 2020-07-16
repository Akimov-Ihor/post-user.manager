<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  /* background-color: whitesmoke; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("./assets/background/background.jpg") no-repeat center;
  background-size: cover;
  opacity: 1;
  position: relative;
  height: 100vh;
  padding: 0;
  z-index: 1;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(93, 84, 84, 0.64);
  filter: blur(0.5px);
}
.container {
  width: 100%;
  height: 100%;
}
a {
  color: black;
  text-decoration: none;
  outline: none;
}
a:visited {
  color: black;
  text-decoration: none;
  outline: none;
}
a:link {
  color: black;
  text-decoration: none;
  outline: none;
}

hr {
  color: black;
}
</style>
