import { createApp, reactive, nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// import hljs from 'highlight.js'
import routes from './route.config'
import demoBlock from './components/demo-block'
import MainFooter from './components/footer'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'
import title from './i18n/title'
// import 'highlight.js/styles/color-brewer.css'
import './demo-styles/index.scss'
import './assets/styles/common.css'
import './assets/styles/fonts/style.css'
import icon from './icon.json'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn') // todo: locale based on Doc site lang

import App from './app.vue'
import ElementPlus from 'element-plus'
if(process.env.NODE_ENV === 'development') require('../src/style/element-ui@2.13.2.css')


const app = createApp(App)

const globalEle = reactive({
  data: { $isEle: false }, // 是否 ele 用户
})

app.mixin({
  computed: {
    $isEle: {
      get: () => (globalEle.data.$isEle),
      set: data => {globalEle.data.$isEle = data},
    },
  },
})
app.config.globalProperties.$icon = icon

app.component('DemoBlock', demoBlock)
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
router.isReady().then(()=>{

  router.afterEach(async route => {
    // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
    await nextTick()
    // const blocks = document.querySelectorAll('pre code:not(.hljs)')
    // Array.prototype.forEach.call(blocks, hljs.highlightBlock)
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
