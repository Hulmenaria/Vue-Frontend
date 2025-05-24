import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import SheetView from '../Views/SheetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usar import.meta.env.BASE_URL en lugar de process.env.BASE_URL
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView, // Sin paréntesis aquí
    },
    {
      path: '/sheet',
      name: 'sheet',
      component: SheetView,
    },
  ],
})

export default router
