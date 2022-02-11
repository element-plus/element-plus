import { createApp } from 'vue'
import '@element-plus/theme-chalk/src/index.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
  }
  const App = (await file()).default
  const app = createApp(App)

  app.mount('#play')
})()
