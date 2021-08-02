import { createApp, nextTick } from 'vue'
import { hyphenate } from '@vue/shared'
import * as ElementPlusSvgIcons from '@element-plus/icons'
import clipboardCopy from 'clipboard-copy'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './route.config'
import demoBlock from './components/demo-block'
import RightNav from './components/right-nav'
import MainFooter from './components/footer'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'
import title from './i18n/title'
import 'highlight.js/styles/color-brewer.css'
import './demo-styles/index.scss'
import './assets/styles/common.scss'
import './assets/styles/fonts/style.css'
import icon from './icon.json'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn') // todo: locale based on Doc site lang
import compLang from './i18n/component.json'
import App from './app.vue'
import ElementPlus from 'element-plus'
import '../packages/theme-chalk/src/index.scss'
import '../packages/theme-chalk/src/display.scss'

const app = createApp(App)

const svgIcons = []
for (let i in ElementPlusSvgIcons) {
  const component = ElementPlusSvgIcons[i]
  app.component(component.name, component)
  svgIcons.push(component.name)
}
app.config.globalProperties.$svgIcons = svgIcons
app.config.globalProperties.$icon = icon


app.component('DemoBlock', demoBlock)
app.component('RightNav', RightNav)
app.component('MainFooter', MainFooter)
app.component('MainHeader', MainHeader)
app.component('SideNav', SideNav)
app.component('FooterNav', FooterNav)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
app.use(ElementPlus)
app.use(router)
router.isReady().then(() => {
  let lang = location.hash.split('/')[1]
  let langConfig = compLang.filter(config => config.lang === lang)[0]['demo-block']

  app.config.globalProperties.$copySvgIcon = iconName => {
    clipboardCopy(
      `<el-svg-icon>
  <${hyphenate(iconName)} />
</el-svg-icon>
      `,
    ).then(() => {
      app.config.globalProperties.$message({
        showClose: true,
        message: langConfig['copy-success'],
        type: 'success',
      })
    }).catch(() => {
      app.config.globalProperties.$message({
        showClose: true,
        message: langConfig['copy-error'],
        type: 'error',
      })
    })
  }
  router.afterEach(async route => {
    await nextTick()
    lang = location.hash.split('/')[1]
    const data = title[route.meta.lang]
    for (let val in data) {
      if (new RegExp('^' + val, 'g').test(route.name)) {
        document.title = data[val]
        return
      }
    }
    document.title = 'Element'
    ga('send', 'event', 'PageView', route.name)
  })

})

app.mount('#app')
