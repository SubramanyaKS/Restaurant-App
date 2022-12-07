<template>
<Header/>
<h1>Hello User, Welcome to update Restaurant page</h1>
<form class="add">
      <input type="text" name="name" v-model="restuarant.name" placeholder="Enter the Name"/>
      <input type="text" name="address" v-model="restuarant.address" placeholder="Enter the Address"/>
      <input type="text" name="contact" v-model="restuarant.contact" placeholder="Enter the Contact"/>
      <button v-on:click="updateRest" type="button">Update Restuarant</button>
  </form>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
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
  methods:{
      async updateRest(){
          const r = await axios.put("http://localhost:3000/restuarant/"+this.$route.params.id,{
              name:this.restuarant.name,
              address:this.restuarant.address,
              contact:this.restuarant.contact,
          });
          if(r.status==200){
              this.$router.push({name:"Home"});
          }

      }

  },
   async mounted(){
        let users= localStorage.getItem('user-info');
        if(!users){
             this.$router.push({name:'SignUp'});
        }
        let r = await axios.get('http://localhost:3000/restuarant/'+this.$route.params.id)
        console.warn(r.data);
        this.restuarant=r.data;
    }
}

</script>