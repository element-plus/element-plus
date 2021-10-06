import { createApp } from 'vue'
import { ElSelect, ElSelectV2 } from '@element-plus/components'
import Play from './play.vue'
import '@element-plus/theme-chalk/src/index.scss'

const app = createApp(Play)

app.use(ElSelect)
app.use(ElSelectV2)

app.mount('#play')
