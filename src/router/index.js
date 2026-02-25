import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: { title: 'Выберите город' }
      },
      {
        path: 'city/:cityId',
        name: 'city',
        component: () => import('../views/CityView.vue'),
        meta: { title: 'Выберите ресторан' }
      },
      {
        path: 'choose-map',
        name: 'choose-map',
        component: () => import('../views/ChooseMapView.vue'),
        meta: { title: 'Яндекс Карты или 2GIS' }
      },
      {
        path: 'review',
        name: 'review',
        component: () => import('../views/ReviewView.vue'),
        meta: { title: 'Оставьте отзыв' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
