<template>
  <Header />
  <h1>Hello {{ name }}, Welcome to home page</h1>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>contact</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in restuarant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button v-on:click="deleteRest(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      restuarant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteRest(id) {
      let r = await axios.delete("http://localhost:3000/restuarant/" + id);
      if (r.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      console.log(user);
      if (user == null || !user) {
        this.$router.push({ name: "SignUp" });
      }
      let r = await axios.get("http://localhost:3000/restuarant");
      console.warn(r);
      this.restuarant = r.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
td,
th {
  width: 160px;
  height: 40px;
}
</style>
