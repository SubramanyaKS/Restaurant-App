<template>
<img class="logo" alt="Vue logo" src="../assets/logo1.jpg">
<h1>Login Page</h1>
<div class="login">
        
        <input type="text" v-model="email" placeholder="Enter the Email:" />
        <input type="password" v-model="password" placeholder="Enter the Password:" />
        <button v-on:click="signup" class="btn">Login In</button>
        <p>Not register?<router-link to="/signup">Sign Up</router-link></p>
    </div>
</template>

<script>

export default{
    name:'LogIn',   
}
</script>
