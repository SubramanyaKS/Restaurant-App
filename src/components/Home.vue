<template>
<h1> Welcome to home page</h1>
</template>
<script>
export default {
    name:'HomePage',
    mounted(){
        let users= localStorage.getItem('user-info');
        if(!users){
             this.$router.push({name:'SignUp'});
        }
    }
}

</script>