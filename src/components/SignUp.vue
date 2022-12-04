<template class="main">
<img class="logo" alt="Vue logo" src="../assets/logo1.jpg">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter the Name:" />
        <input type="text" v-model="email" placeholder="Enter the Email:" />
        <input type="password" v-model="password" placeholder="Enter the Password:" />
        <button v-on:click="signup" class="btn">Sign Up</button>
        <p>Already register?<router-link to="/login">Login</router-link></p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup(){
            //console.warn("Signup",this.name,this.email,this.password);
             let r = await axios.post("http://localhost:3000/user",{
                 name:this.name,
                 email:this.email,
                 password:this.password
             }).catch(error => console.log(error.response));
            //let r= await axios.get("http://localhost:3000/user");
           console.warn(r); 
           if(r.status==201){
              // console.log("Sign-Up done");
               localStorage.setItem("user-info",JSON.stringify(r.data));
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