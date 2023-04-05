import { createRouter, createWebHistory } from 'vue-router'
import HomeTodo from '../views/HomeTodo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: HomeTodo
    }
  ]
})

export default router
