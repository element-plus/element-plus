import ElementPlus from 'element-plus'
import NotFound from '../components/not-found.vue'
import ElementPlusLayout from '../layouts/layout.vue'
import NavLink from '../components/nav-link.vue'
import Demo from '../components/demo.vue'
import MainColor from '../components/demo/main-color.vue'
import NeutralColor from '../components/demo/neutral-color.vue'
import SecondaryColors from '../components/demo/secondary-colors.vue'
import IconList from '../components/demo/icons.vue'

export default {
  NotFound,
  Layout: ElementPlusLayout,
  logo: '/images/element-plus-logo-small.svg',
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.component('nav-link', NavLink)
    app.component('Demo', Demo)
    app.component('MainColor', MainColor)
    app.component('NeutralColor', NeutralColor)
    app.component('SecondaryColors', SecondaryColors)
    app.component('IconList', IconList)
  },
}
