import { createApp } from 'vue'
import '@element-plus/theme-chalk/src/index.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const App = (await apps[`./src/${name}.vue`]()).default
  const app = createApp(App)

  app.mount('#play')
})()
