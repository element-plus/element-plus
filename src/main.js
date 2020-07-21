import { createApp } from 'vue'
import { installAll } from './component.js'
import './style/element-ui@2.13.2.css'
import App from './App.vue'

const app = createApp(App)
installAll(app)
app.mount('#app')
