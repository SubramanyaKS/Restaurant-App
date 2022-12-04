<template>
<img class="logo" alt="Vue logo" src="../assets/logo1.jpg">
<h1>Login Page</h1>
<div class="login">
        
        <input type="text" v-model="email" placeholder="Enter the Email:" />
        <input type="password" v-model="password" placeholder="Enter the Password:" />
        <button v-on:click="login" class="btn">Login In</button>
        <p>Not register?<router-link to="/signup">Sign Up</router-link></p>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'LogIn',   
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        async login(){
            let r = await axios.get(`http://localhost:3000/user?email=${this.email}&& password=${this.password}`)
            console.warn(r);
            if(r.status==200 && r.data.length>0){
              // console.log("Sign-Up done");
               localStorage.setItem("user-info",JSON.stringify(r.data[0]));
               this.$router.push({name:'Home'});
            }
        }

    },
    mounted(){
        let users= localStorage.getItem('user-info');
        if(users){
             this.$router.push({name:'Home'});
        }
    }
}
</script>
