import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: () => {
        return import('../views/Home.vue')
      }
    },
    {
      path: '/home',
      name: "Home",
      component: () => {
        return import('../views/Home.vue')
      }
    },
    {
      path: '/class',
      name: "Class",
      component: () => {
        return import('../views/Class.vue')
      }
    },
    {
      path: '/goodCar',
      name: "Goodcar",
      component: () => {
        return import('../views/Goodcar.vue')
      }
    },
    {
      path: '/user',
      name: "User",
      component: () => {
        return import('../views/User.vue')
      }
    },
    {
      path: '/brand',
      name: "Brand",
      component: () => {
        return import('../components/ympp/ymppg.vue')
      },
      children: [
        {
          path: '/youpin618',
          name: "Youpin618",
          component: () => {
            return import('../components/ympp/youpin618.vue')
          }
        }
      ]

    },
    {
      path: "*",
      component: () => {
        return import('../views/Home.vue')
      }
    }
  ]
})

export default router
