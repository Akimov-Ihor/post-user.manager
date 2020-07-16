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
@media (min-width: 1200px) {
  #app{
    height: 81vw;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  #app {
    height: 146vw;
  }
  .post {
    width: 18%;
  }
  .post > h3 {
    font-size: 1em;
    margin: 0;
  }
  .post > span {
    font-size: 15px;
  }
}
/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  #app {
    height: 147vh;
  }
  h1 {
    font-size: 2em;
  }
  .post > h3 {
    font-size: 1em;
    margin: 0;
  }
  .post > span {
    font-size: 13px;
  }
}
/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  #app {
    height: 148vw;
  }
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  #app {
    width: 132vw;
    height: 242vh;
  }
  h1 {
    font-size: 25px;
  }
  .post > h3 {
    font-size: 16px;
    margin: 0;
  }
  .post > span {
    font-size: 13px;
  }
}
/* Iphone 5 */
@media (max-width: 320px) {
  #app {
    width: 132vw;
    height: 230vh;
  }
}
@media (max-height: 480px) {
  #app {
    height: 230vh;
  }
}
</style>
