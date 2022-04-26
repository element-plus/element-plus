/*
 * @Author: LG
 * @Date: 2022-04-24 11:03:28
 * @Description:
 * @Last Modified By: liu.guo
 * @Last Modified Time: 2022-04-26 09:59:58
 */
import { createApp } from 'vue'
import '@element-plus/theme-chalk/src/index.scss'
import { ElLoading } from '@element-plus/components'
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
