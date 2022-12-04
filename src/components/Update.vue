<template>
<Header/>
<h1>Hello User, Welcome to update Restaurant page</h1>
</template>
<script>
import Header from './Header.vue';

export default {
    name:'Update',
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