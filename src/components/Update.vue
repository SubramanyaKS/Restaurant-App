<template>
<Header/>
<h1>Hello User, Welcome to update Restaurant page</h1>
<form class="add">
      <input type="text" name="name" v-model="restuarant.name" placeholder="Enter the Name"/>
      <input type="text" name="address" v-model="restuarant.address" placeholder="Enter the Address"/>
      <input type="text" name="contact" v-model="restuarant.contact" placeholder="Enter the Contact"/>
      <button v-on:click="addRest" type="button">Update Restuarant</button>
  </form>
</template>
<script>
import Header from './Header.vue';

export default {
    name:'Update',
    components:{
        Header
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
    mounted(){
        let users= localStorage.getItem('user-info');
        if(!users){
             this.$router.push({name:'SignUp'});
        }
    }
}

</script>