import { createApp } from 'vue'
import { installAll } from './component.ts'
import router from './router.ts'
import './style/element-ui@2.13.2.css'
import App from './App.vue'

const app = createApp(App)
installAll(app)
app.use(router)
app.mount('#app')
