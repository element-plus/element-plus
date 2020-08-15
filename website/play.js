import { createApp } from 'vue'
import install from 'element-plus'
import App from './play/index.vue'
import '../src/style/element-ui@2.13.2.css'
const app = createApp(App)
install(app)
app.mount('#app')

