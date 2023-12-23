import { createApp } from 'vue'
import '@element-plus/theme-chalk/src/dark/css-vars.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue') as Record<
    string,
    () => Promise<{
      [key: string]: any
    }>
  >
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)

  app.mount('#play')
})()
