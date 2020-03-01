import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../screens/home/home';
import projects from '../screens/projects/projects';
import about from '../screens/about/about';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
