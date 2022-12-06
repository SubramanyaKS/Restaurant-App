<template>
  <Header />
  <h1>Hello User, Welcome to Add Restuarant Page</h1>
  <form class="add">
      <input type="text" name="name" v-model="restuarant.name" placeholder="Enter the Name"/>
      <input type="text" name="address" v-model="restuarant.address" placeholder="Enter the Address"/>
      <input type="text" name="contact" v-model="restuarant.contact" placeholder="Enter the Contact"/>
      <button v-on:click="addRest" type="button">Add New Restuarant</button>
  </form>
</template>
<script>
import Header from "./Header.vue";
import axios from 'axios';
export default {
  name: "Add",
  components: {
    Header,
  },
  data(){
      return{
          restuarant:{
              name:'',
              address:'',
              contact:'',
          }
      }
  },
  methods:{
      async addRest(){
          console.warn(this.restuarant);
          const r = await axios.post("http://localhost:3000/restuarant",{
              name:this.restuarant.name,
              address:this.restuarant.address,
              contact:this.restuarant.contact,
          });
          if(r.status==201){
              this.$router.push({name:"Home"});
          }
          console.warn(r);
      }
  },
  mounted() {
    let users = localStorage.getItem("user-info");
    if (!users) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
