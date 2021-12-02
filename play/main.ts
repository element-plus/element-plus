import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './src/App.vue'

import '@element-plus/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#play')
