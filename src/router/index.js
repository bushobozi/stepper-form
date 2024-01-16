import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/School.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'school',
      component:() => import('../components/Setup.vue')
    },
    {
      path: '/classes',
      name: 'classes',
      component: () => import('../views/Classes.vue')
    },
    {
      path: '/fees',
      name: 'fees',
      component: () => import('../views/Fees.vue')
    },
    {
      path: '/parents',
      name: 'parents',
      component: () => import('../views/Parents.vue')
    },
    {
      path: '/learners',
      name: 'learners',
      component: () => import('../views/Learners.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/Staff.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../components/Setup.vue')
    },
  ]
})

export default router
