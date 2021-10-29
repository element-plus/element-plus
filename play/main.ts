import { createApp } from 'vue'
import App from './src/App.vue'
import { useComponent } from './src/use'

import '@element-plus/theme-chalk/src/index.scss'

const app = createApp(App)
useComponent(app)
app.mount('#play')
