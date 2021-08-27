import DefaultTheme from 'vitepress/dist/client/theme-default'
import ElementPlus from 'element-plus'
import ElementPlusLayout from '../../layouts/layout.vue'

export default {
  ...DefaultTheme,
  Layout: ElementPlusLayout,
  logo: '../assets/images/element-plus-logo-small.svg',
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
  }
}
