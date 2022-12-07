<template>
  <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <a v-on:click="logout" href="#">LogOut</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods:{
      logout(){
          console.warn("logout");
          localStorage.clear();
          this.$router.push({name:'LogIn'})

      }
  }
};
</script>
<style >
.nav{
    background-color: #000;
    overflow: hidden;
}
.nav a{
    color: #fff;
    float: left;
    padding: 16px 14px;
    text-align: center;
    font-size: 16px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background-color: brown;

}

</style>
