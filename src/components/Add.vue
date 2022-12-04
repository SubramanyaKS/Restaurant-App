<template>
<Header/>
<h1>Hello User, Welcome to Add Restuarant Page</h1>
</template>
<script>
import Header from './Header.vue';

export default {
    name:'Add',
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