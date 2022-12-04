import HomePage from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes=[
    {
        name:'Home',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'LogIn',
        component:Login,
        path:'/login'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;