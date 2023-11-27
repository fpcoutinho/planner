import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import CreateView from '../views/CreateView.vue'
import TagView from '../views/TagView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import HelpView from '../views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: DetailsView,
      props: true
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateView
    },
    {
      path: '/tags/:tag',
      name: 'Tag',
      component: TagView,
      props: true
    },
    {
      path: '/help',
      name: 'Help',
      component: HelpView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    },
  ]
})

export default router
