import { createMemoryHistory, createRouter } from 'vue-router'

import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
