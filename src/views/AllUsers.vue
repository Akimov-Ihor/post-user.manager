<template>
  <div>
    <table>
      <tbody>
        <th class="titelID">ID</th>
        <th>Full name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Website</th>
      </tbody>
      <tbody v-for="user of allUsers" :key="user.id">
        <tr class="id">
          <td>{{user.id}}</td>
        </tr>

        <tr>
          <td>{{user.name}}</td>
        </tr>

        <tr>
          <td>{{user.username}}</td>
        </tr>

        <tr>
          <td>{{user.email}}</td>
        </tr>

        <tr>
          <td>{{user.website}}</td>
        </tr>

        <div @click="toggleModal(user.company)" class="info"></div>
      </tbody>
    </table>
    <div v-if="isModalOpen">
      <modal @close="toggleModal" v-bind:company="this.company" />
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import modal from "../components/modal";

export default {
  components: {
    modal
  },
  created() {
    this.getAllUsers();
  },
  data() {
    return {
      isModalOpen: false,
      company: []
    };
  },
  computed: mapGetters(["allUsers"]),
  methods: {
    toggleModal: function(x) {
      this.isModalOpen = !this.isModalOpen;
      this.company = x;
      console.log(this.company);
    },
    ...mapActions(["getAllUsers"])
  }
};
</script>



<style scoped>
table {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2%;
  color: black;
}
tbody {
  width: 72%;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid; */
  height: 3vw;
  text-align: center;
}
tr {
  width: 34%;
  border: 1px solid;
}
td {
  width: 100%;
}
.id {
  width: 5%;
}
.titelID {
  width: 5%;
  font-weight: bolder;
}
th {
  width: 34%;
}
.info {
  width: 3vw;
  height: 4vh;
  background: url(../assets/icons/info.svg) no-repeat center;
  background-size: contain;
  opacity: 0.6;
  outline: none;
}
.info:hover{
  opacity: 1;
}
</style>