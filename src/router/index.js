import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import("../views/Home" /* webpackChunkName: "home" */);

const routes = [
    {
        path: '/sana',
        name: 'Home',
        component: Home
    },/*
    {
        path: '/:category',
        name: 'Game',
        component: Game
    }*/
];

const router = createRouter({
  history: createWebHistory(),
  base: "sana",
  routes
});

export default router
