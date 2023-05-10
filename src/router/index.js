import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const BusinessIndex = () => import(/* webpackChunkName: "business" */ '@/views/business/Index.vue')
const BusinessDetail = () => import(/* webpackChunkName: "business" */ '@/views/business/Detail.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/business',
      name: 'businessIndex',
      component: BusinessIndex,
    },
    {
      path: '/business/:businessId',
      name: 'businessDetail',
      component: BusinessDetail
    },
  ]
})

export default router
