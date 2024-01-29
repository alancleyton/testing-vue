import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import TodoView from '@/views/TodoView.vue';
import PostView from '@/views/PostView.vue';

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
  {
    name: 'posts',
    path: '/posts',
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
