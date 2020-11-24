import Home from "@/page/home/home.vue";
import Homepage from "@/page/home/homePage.vue";

export default {
    path: "/",
    name: 'home',
    component: Home,
    children: [
        
        {
            path: '/homepage',
            component: Homepage
        },
        {
            path: '/',
            component: Homepage
        },
    ]
};
