import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './play/index.vue'
import '../packages/theme-chalk/src/index.scss'
import 'dayjs/locale/zh-cn'

import locale from '../packages/locale/lang/zh-cn'
const app = createApp(App)
app.use(ElementPlus, { locale })
app.mount('#app')

