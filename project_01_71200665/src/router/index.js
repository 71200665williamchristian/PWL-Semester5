import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import MakananView from '../components/MakananView.vue'
import MinumanView from '../components/MinumanView.vue'
import SnackView from '../components/SnackView.vue'
import EndView from '../components/EndView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/MakananView',
    name: 'MakananView',
    component: MakananView
  },
  {
    path: '/MinumanView',
    name: 'MinumanView',
    component: MinumanView
  },
  {
    path: '/SnackView',
    name: 'SnackView',
    component: SnackView
  },
  {
    path: '/EndView',
    name: 'EndView',
    component: EndView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
