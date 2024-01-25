import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
