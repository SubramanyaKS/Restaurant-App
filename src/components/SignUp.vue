<template class="main">
<img class="logo" alt="Vue logo" src="../assets/logo1.jpg">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" placeholder="Enter the Name:" />
        <input type="text" placeholder="Enter the Email:" />
        <input type="password" placeholder="Enter the Password:" />
        <button class="btn">Sign Up</button>
    </div>
</template>
<script>
export default {
    name:'SignUp'
}
</script>
<style >
.logo{
  width:100px;
}
.register input{
    width:300px;
    height:40px;
    display:block;
    padding-left: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    border: 1px solid brown;
    align-items: center;
}
/* .main{
    background-color: aqua !important;
} */
.register button{
    width: 320px;
    height: 40px;
    background-color: brown;
    border: 1px solid brown;
    color: white;
}

</style>