<template>
  <table>
    <tbody>
      <th class="titelID">ID</th>
      <th>Full name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Website</th>
    </tbody>
    <tbody v-for="user of  allUsers" :key="user.id">
        <tr class="id">
        <td >{{user.id}}</td>
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
    </tbody>
  </table>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: mapActions(["getAllUsers"]),

  computed: mapGetters(["allUsers"]),
  async mounted() {
    this.getAllUsers();
  }
};
</script>



<style scoped>
table {
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
}
tbody {
  width: 72%;
    display: flex;
    justify-content: space-around;
    border: 1px solid;
}
tr {
 width: 34%;
border: 1px solid;
}
td{
    width: 100%;
}
.id{
    width: 5%;
}
.titelID{
    width: 2px;
}
</style>