import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { 
            path: '/', 
            component: Home
        },
        { 
            path: '/users', 
            component: Users,
        }
    ]
});
export default router;