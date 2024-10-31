import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import AboutUs from '@/pages/Aboutus.vue';
import OrigenesPage from '@/pages/OrigenesPage.vue';
import CoffeePage from '@/pages/CoffeePage.vue';
import CacaoPage from '@/pages/CacaoPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/origins', name: 'origins', component: OrigenesPage },
  { path: '/coffee', name: 'coffee', component: CoffeePage },
  { path: '/cacao', name: 'cacao', component: CacaoPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
