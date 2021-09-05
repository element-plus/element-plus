import ElementPlus from 'element-plus'
import NotFound from '../components/not-found.vue'
import ElementPlusLayout from '../layouts/layout.vue'
import NavLink from '../components/nav-link.vue'

export default {
  NotFound,
  Layout: ElementPlusLayout,
  logo: '../assets/images/element-plus-logo-small.svg',
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.component('nav-link', NavLink)
  },
}
