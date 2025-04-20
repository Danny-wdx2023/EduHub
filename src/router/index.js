import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/About.vue"
import FeedbackView from '@/views/Feedback.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }, {
      path: '/class5',
      name: 'class5',
      component: () => import('@/views/Class5.vue'),
    }, {
      path: "/flowlib",
      name: "flowlib",
      component: () => import("@/views/FlowLib.vue")
    }, {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/Chat.vue'),
    }, {
      path: '/plugin/marketplace',
      name: 'plugin-marketplace',
      component: () => import("@/views/plugin/MarketPlace.vue")
    }, {
      path: '/plugin/me',
      name: 'plugin-me',
      component: () => import('@/views/plugin/Me.vue'),
    }, {
      path: '/about',
      name: 'about',
      component: AboutView,
    }, {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView,
    }, {
      path: '/campus',
      name: 'campus',
      component: () => import('@/views/Campus.vue'),
    }, {
      path: '/personal',
      name: 'personal',
      component: () => import("@/views/Personal.vue"),
    }, {
      path: "/zone/dev",
      name: "zone-dev",
      component: () => import("@/views/zone/Dev.vue")
    }, {
      path: "/:pathMatch(.*)",
      name: "404",
      component: () => import("@/views/404.vue")
    }
  ],
})

export default router