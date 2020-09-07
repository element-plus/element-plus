import { createApp } from 'vue'
import install from 'element-plus'
import App from './play/index.vue'
import '../packages/theme-chalk/src/index.scss'
const app = createApp(App)
install(app)
app.mount('#app')

