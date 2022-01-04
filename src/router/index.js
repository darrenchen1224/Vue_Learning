import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Counter from '../views/Counter.vue';
import inforCard from '../views/inforCard.vue';
import Controller from '../views/Controller.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/inforCard',
    name: 'InforCard',
    component: inforCard,
  },
  {
    path: '/controller',
    name: 'Controller',
    component: Controller,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
