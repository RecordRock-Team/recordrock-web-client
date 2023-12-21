
import { createWebHistory, createRouter } from "vue-router";
import LoginPage from '../views/LoginPage.vue'
import RecordPage from '../views/RecordPage.vue'
import CommunityPage from '../views/CommunityPage.vue'
import SettingsPage from '../views/SettingsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/record',
    component: RecordPage,
  },
  {
    path: '/community',
    component: CommunityPage,
  },
  {
    path: '/settings',
    component: SettingsPage,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
