<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width:100px;
}
.register input, .login input{
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
.register button, .login button{
    width: 320px;
    height: 40px;
    background-color: brown;
    border: 1px solid brown;
    color: white;
}
</style>
