<template>
  <div class="navbarWrapper">
    <nav>
      <ul>
        <router-link tag="li" to="/add" active-class="active">
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
  background: #0801010a;
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
@media (min-width: 992px) and (max-width: 1199px) {
  .navbarWrapper {
    width: 85%;
  }
}
/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  .navbarWrapper {
    width: 66%;
  }
  nav {
    width: 58%;
  }
}
/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .navbarWrapper {
    width: 66%;
  }
  nav {
    width: 58%;
  }
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .navbarWrapper {
    width: 99%;
    height: 4vh;
    font-size: 2rem;
  }
  nav {
    width: 100%;
  }
}
/* Iphone 5 */
@media (max-width: 320px) {
  .navbarWrapper {
    width: 99%;
    height: 4vh;
    font-size: 2rem;
  }
  nav {
    width: 100%;
  }
}
</style>