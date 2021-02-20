// import auth from "@/page/auth/signin.vue";

export default {
    path: "/auth",
    name: 'auth',
    component: () => import('@/page/auth/signin.vue'),
};

