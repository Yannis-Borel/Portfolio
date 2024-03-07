import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Exemple',
      name: 'Exemple',
      component: () => import('../views/Exemple.vue')
    },
  

  ]
})

export default router
