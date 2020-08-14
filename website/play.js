import { createApp } from 'vue'
import install from 'element-plus'
import App from './play/index.vue'
const app = createApp(App)
install(app)
app.mount('#app')

