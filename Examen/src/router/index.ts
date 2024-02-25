import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../components/Tarea/TaskList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/task',
      name: 'Task',
      component: TaskList
    }
  ]
})

export default router
