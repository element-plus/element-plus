import { createApp } from 'vue'
import '@element-plus/theme-chalk/src/index.scss'
import { ElLoading } from '@element-plus/components/loading'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)

  app.use(ElLoading).mount('#play')
})()
