import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue'; // Asegúrate de que la ruta y el archivo existen

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Puedes agregar más rutas si es necesario
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
