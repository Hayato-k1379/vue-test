import { createRouter, createWebHistory } from "vue-router"
import ButtonTest from './components/ButtonTest.vue'
import DummyImage from './components/DummyImage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dummy',
      component: DummyImage,
    },
    {
      path: '/button',
      name: 'ButtonTest',
      component: ButtonTest,
    },
  ]
})