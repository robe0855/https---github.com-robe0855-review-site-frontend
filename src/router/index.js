import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Review from '../views/Review.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/review/:id',
    name: 'review',
    component: Review,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
