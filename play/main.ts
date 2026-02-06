import { Component, createApp } from 'vue'
import '@element-plus/theme-chalk/src/var.scss'
import '@element-plus/theme-chalk/src/dark/css-vars.scss'
import '@element-plus/theme-chalk/src/notification.scss'
import '@element-plus/theme-chalk/src/message-box.scss'
import '@element-plus/theme-chalk/src/message.scss'

// #21498
window.addEventListener('error', (e: ErrorEvent) => {
  console.error(`%c${e.message}`, 'color: #e74c3c; font-weight: bold;')
  console.error(e)
})
window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
  const err = e.reason as Error
  console.error(
    `%cUnhandled Promise Rejection: %c${err.message}`,
    'color: #e74c3c; font-weight: bold;',
    'color: #3498db;'
  )
  console.error(err)
})
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
