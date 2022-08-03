import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import Gallery from "../views/Gallery.vue"
import Menu from "../views/Menu.vue"
import Contact from "../views/Contact.vue"
import Reviews from "../views/Reviews.vue"
import Staff from "../views/Staff.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
