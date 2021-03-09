import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connexion',
    name: 'Connexion',
    // route level code-splitting
    // this generates a separate chunk (connexion.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "connexion" */ '../views/Connexion.vue')
  },
  {
    path: '/murappli',
    name: 'MurAppli',
    component: () => import(/* webpackChunkName: "murappli" */ '../views/MurAppli.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
