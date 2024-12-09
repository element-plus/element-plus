import { Component, createApp } from 'vue'
import '@element-plus/theme-chalk/src/dark/css-vars.scss'
import '@element-plus/theme-chalk/src/notification.scss'
import '@element-plus/theme-chalk/src/message-box.scss'
import '@element-plus/theme-chalk/src/message.scss'
;(async () => {
  const apps = import.meta.glob<
    true,
    string,
    () => Promise<{ default: Component }>
  >('./src/*.vue')
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
