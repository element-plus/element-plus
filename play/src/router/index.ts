import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import DefaultSelect from '../views/default-select.vue'
import ElSelectDemo from '../views/el-select-demo.vue'
import ElInputDemo from '../views/el-input-demo.vue'
import ElDatePickerDemo from '../views/el-date-picker-demo.vue'
import ElDropdownDemo from '../views/el-dropdown-demo.vue'
import ElPopoverDemo from '../views/el-popover-demo.vue'
import ElTooltipDemo from '../views/el-tooltip-demo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/select',
      name: 'select',
      component: DefaultSelect,
    },
    {
      path: '/el-input',
      name: 'el-input',
      component: ElInputDemo,
    },
    {
      path: '/el-select',
      name: 'el-select',
      component: ElSelectDemo,
    },
    {
      path: '/el-date-picker',
      name: 'el-date-picker',
      component: ElDatePickerDemo,
    },
    {
      path: '/el-dropdown',
      name: 'el-dropdown',
      component: ElDropdownDemo,
    },
    {
      path: '/el-popover',
      name: 'el-popover',
      component: ElPopoverDemo,
    },
    {
      path: '/el-tooltip',
      name: 'el-tooltip',
      component: ElTooltipDemo,
    },
  ],
})

export default router
