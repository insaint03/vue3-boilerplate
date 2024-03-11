import { createRouter, createWebHashHistory } from 'vue-router'
import views from '@/views'

const naming = (path) => path
    .replace(/^\//, '')
    .replace(/\//g, '-')
    .toLowerCase();

const router = createRouter({
  history: createWebHashHistory(),
//   history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.entries(views)
    .map(([path, view])=>({
        path,
        name: naming(path),
        component: ()=>import(`@/views/${view}.vue`),
    })),
})

export default router
