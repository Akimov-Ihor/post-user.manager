<template>
  <div class="navbarWrapper">
    <nav>
      <ul>
        <router-link tag="li" to="/add"  active-class="active">
          <a href="#">AddPost</a>
        </router-link>
        <router-link tag="li" to="/" exact active-class="active">
          <a href="#">Home</a>
        </router-link>
        <router-link tag="li" to="/users" active-class="active">
          <a href="#">Users</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<style  scoped>
.navbarWrapper {
  width: 100%;
  height: 2vh;
  background: black;
  display: flex;
  flex-direction: row-reverse;
}
nav {
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
  padding: 0;
  width: 20%;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  list-style: none;
  justify-content: space-around;
}
</style>