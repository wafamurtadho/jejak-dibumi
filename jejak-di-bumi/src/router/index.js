import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Picture from '../views/Pictures.vue'
import PictureDetail from '../views/PictureDetail.vue'
import Bii from '../views/Bii.vue'
import Saved from '../views/Saved.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: Picture
  },
  {
    path: '/pictures/:id',
    name: 'PictureDetail',
    component: PictureDetail
  },
  {
    path: '/bii',
    name: 'Bii',
    component: Bii
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved
  },
  {
    path: '/ayy',
    name: 'Ayy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ayy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
