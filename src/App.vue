<template>
  <div id="app">
   <CreateNewPost/>
   <AllPost/>
   <AllUsers/>
  </div>
</template>

<script>
import AllUsers from './components/AllUsers'
import CreateNewPost from './components/CreateNewPost'
import AllPost from './components/AllPost';
export default {
  name: 'App',
  components: {
    AllPost,
    CreateNewPost,
    AllUsers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
