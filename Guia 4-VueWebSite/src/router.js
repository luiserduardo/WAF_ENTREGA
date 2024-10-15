import { createRouter, createWebHistory } from 'vue-router'

import About from '@/views/About.vue'
import Lanzamientos from '@/views/Lanzamientos.vue'
import Contact from '@/views/Contact.vue'
import MainContent from './components/MainContent.vue'

const routes = [
  {
    path: '/',
    name: 'MainContente',
    component: MainContent
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/lanzamientos',
    name: 'Lanzamientos',
    component: Lanzamientos
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router