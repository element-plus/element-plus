import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './src/App.vue'

import '@element-plus/theme-chalk/src/index.scss'

const app = createApp(App).use(ElementPlus, {
  locale: zhCn,
})

app.mount('#play')
