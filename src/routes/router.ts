import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import TodoView from '@/views/TodoView.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'todos',
    path: '/todos',
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
