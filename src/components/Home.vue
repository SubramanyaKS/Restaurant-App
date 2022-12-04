<template>
<Header/>
<h1> Welcome to home page</h1>
</template>
<script>
import Header from './Header.vue';

export default {
    name:'HomePage',
    components:{
        Header
    },
    mounted(){
        let users= localStorage.getItem('user-info');
        if(!users){
             this.$router.push({name:'SignUp'});
        }
    }
}

</script>