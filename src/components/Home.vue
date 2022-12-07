<template>
  <Header />
  <h1>Hello {{name}}, Welcome to home page</h1>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>contact</th>
      <th>Address</th>
      <th>Actions</th>

    </tr>
    <tr v-for="item in restuarant" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.contact}}</td>
      <td>{{item.address}}</td>
      <td><router-link :to="'/update/'+item.id">Update</router-link></td>
    </tr>

  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from 'axios';
export default {
  name: "Home",
  data() {
    return {
      name: "",
      restuarant:[],
    };
  },
  components: {
    Header,
  },
  async mounted() {
    let users = localStorage.getItem("user-info");
    this.name= JSON.parse(users).name;
    console.log(users)
    if (users==null) {
      this.$router.push({ name: "SignUp" });
    }
    let r= await axios.get("http://localhost:3000/restuarant")
    console.warn(r);
    this.restuarant=r.data;
  },
};
</script>
<style>
td, th{
  width: 160px;
  height: 40px;
}

</style>