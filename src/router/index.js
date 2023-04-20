import { createRouter, createWebHistory } from 'vue-router'
import HomeTodo from '../views/HomeTodo.vue'
import HomeSlider from '../views/HomeSlider.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: HomeTodo
    },
    {
      path: '/slider',
      name: 'slider',
      component: HomeSlider
    },
  ]
})

export default router
